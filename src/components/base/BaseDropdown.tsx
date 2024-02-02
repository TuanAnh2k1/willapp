import { IconArrowDown, IconDot, IconListClose, IconListOpen } from "@assets";
import React, { ReactNode, memo, useEffect, useRef, useState } from "react";
import { Modal, StatusBar, StyleProp } from "react-native";
import { Text, StyleSheet, TextStyle, View, ViewStyle, TouchableWithoutFeedbackProps, TouchableWithoutFeedback, LayoutChangeEvent, Dimensions, FlatList } from "react-native";

interface typeDataDropDown {
  id?: number;
  label?: string;
  parent?: number;
};

interface iDropdownBaseProps extends TouchableWithoutFeedbackProps {
  /** Mảng dữ liệu của dropdown. */
  data: Array<typeDataDropDown>;

  value?: number;

  placeholder?: string;
  /** Hàm bấm item dropdonw. */
  onPressItemDropdown?: (id: number | undefined, label: string | undefined) => void;

  isDataTreeStructure?: boolean;
};

interface iDropdownExtendProps {
  /** Style của view chứa dropdown. */
  containerStyle?: StyleProp<ViewStyle>;

  itemStyle?: ViewStyle;
  /** Style của label dropdown. */
  labelStyle?: StyleProp<TextStyle>;
  /** Label mặc định. */
  defaultLabel?: string;
  /** Icon component. */
  arrowComponent?: ReactNode;
};

export type SMDropdownProps = iDropdownBaseProps & iDropdownExtendProps;

const windowHeight = Dimensions.get('window').height;

const BaseDropdown = memo((props: SMDropdownProps) => {
  const {
    data,
    value,
    placeholder,
    onPressItemDropdown,
    isDataTreeStructure,
    containerStyle,
    itemStyle,
    labelStyle,
    defaultLabel,
    arrowComponent,
  } = props;
  let refView = useRef<View>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [dataDropdown, setDataDropdown] = useState<Array<typeDataDropDown>>(data);
  const [boxLayout, setBoxLayout] = useState({
    marginTop: 0,
    marginLeft: 0,
    width: 0,
    height: 0,
  });
  const finalData = isDataTreeStructure ? dataDropdown.filter(c => c.parent === undefined) : dataDropdown;

  useEffect(() => {
    if (defaultLabel && dataDropdown.length > 0) {
      setDataDropdown([{ id: undefined, label: defaultLabel }, ...dataDropdown]);
    }
  }, [])

  const onPressDropdown = () => {
    setOpen(!open);
  };

  const onLayout = () => {
    if (refView.current)
      refView.current.measure((fx: number, fy: number, width: number, height: number, px: number, py: number) => {
        const itemHeight = Number(itemStyle?.height) > 0 ? Number(itemStyle?.height) : height;
        const caculatedWidth = width;
        const caculatedHeight = dataDropdown.length > 0 ? dataDropdown.length > 5 ? itemHeight * 5 : itemHeight * dataDropdown.length : itemHeight;
        const caculatedX = px;
        const caculatedY = windowHeight - (py + height) > caculatedHeight ? py + height : py - caculatedHeight;
        setBoxLayout({
          marginTop: caculatedY - (StatusBar.currentHeight ?? 0),
          marginLeft: caculatedX,
          width: caculatedWidth,
          height: caculatedHeight
        });
      })
  };

  const onPressItem = (id: number | undefined, label: string | undefined) => {
    onPressDropdown();
    onPressItemDropdown && onPressItemDropdown(id, label === defaultLabel ? undefined : label);
  }

  const EmptyData = () => {
    return (
      <View style={styles.item}>
        <Text style={[styles.label, labelStyle]}>{"Không có dữ liệu"}</Text>
      </View>
    );
  };

  interface ItemProps {
    item: typeDataDropDown;
  }

  const Item = (props: ItemProps) => {
    const { item } = props;

    return (
      <TouchableWithoutFeedback onPress={() => onPressItem(item.id, item.label)}>
        <View style={[{ ...styles.item, backgroundColor: value == item.id ? "#DFFDFF" : "#FFFFFF" }, itemStyle]}>
          <Text style={[styles.label, labelStyle]}>{item.label}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const ParentItem = (props: ItemProps) => {
    const { item } = props;
    const [expand, setExpand] = useState(false);
    const children = dataDropdown.filter(c => c.parent === item.id);

    return (
      <>
        <TouchableWithoutFeedback onPress={() => setExpand(!expand)}>
          <View style={[styles.item, itemStyle]}>
            <Text style={[styles.label, labelStyle]}>{item.label}</Text>
          </View>
        </TouchableWithoutFeedback>
        {expand &&
          <View style={styles.childrenContainer}>
            {children.map((item, index) =>
              <Item key={index} item={item} />
            )}
          </View>
        }
      </>
    );
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={onPressDropdown}>
        <View
          ref={refView}
          style={[styles.container, containerStyle]}
          onLayout={onLayout}
        >
          {value ?
            <Text style={[styles.label, labelStyle]}>
              {data.find(c => c.id === value)?.label}
            </Text>
            :
            <Text style={[styles.placeholder]}>
              {placeholder}
            </Text>
          }
          {arrowComponent ?
            arrowComponent
            :
            <IconArrowDown size={20} />
          }
        </View>
      </TouchableWithoutFeedback>
      <Modal
        transparent
        visible={open}
      >
        <TouchableWithoutFeedback onPress={onPressDropdown}>
          <View style={styles.boxItemContainer}>
            <FlatList
              style={[styles.boxItem, boxLayout]}
              data={finalData}
              renderItem={({ item }) => isDataTreeStructure ? <ParentItem item={item} /> : <Item item={item} />}
              keyExtractor={(item, index) => index.toString()}
              ListEmptyComponent={() => <EmptyData />}
              overScrollMode={"never"}
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    width: 280,
    height: 40,
    borderWidth: 1,
    borderColor: "#D1D1D1",
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    flex: 1,
    fontSize: 14,
  },
  placeholder: {
    flex: 1,
    fontSize: 14,
    color: "#7E7D7E",
  },
  modalContainer: {
    backgroundColor: "#00000000",
  },
  boxItemContainer: {
    flex: 1,
  },
  boxItem: {
    position: "absolute",
    borderRadius: 4,
    backgroundColor: "white",
    elevation: 8,
    shadowRadius: 4.5,
    shadowOpacity: 0.3,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    zIndex: 999,
  },
  item: {
    paddingHorizontal: 10,
    flex: 1,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  childrenContainer: {
    marginLeft: 15,
  },
});

export { BaseDropdown };
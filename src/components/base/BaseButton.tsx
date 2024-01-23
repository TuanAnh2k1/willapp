import { ReactNode, memo } from "react";
import { View, TouchableOpacity, Text, ViewStyle, StyleSheet, TextStyle, TouchableOpacityProps, StyleProp } from "react-native";

//const usePreventDoubleClick = (WrappedComponent: any) => {
//  const [clickable, setClickable] = useState<boolean>(true);

//  const PreventDoubleClick = (props: any) => {
//    const onPress = () => {
//      if (clickable) {
//        props.onPress && props.onPress();

//        setClickable(false);

//        setTimeout(() => {
//          setClickable(true);
//        }, 1000);
//      };
//    };

//    return <WrappedComponent {...props} onPress={onPress} />;
//  };

//  PreventDoubleClick.displayName = `withPreventDoubleClick(${WrappedComponent.displayName || WrappedComponent.name})`;

//  return PreventDoubleClick;
//};

interface iButtonBaseProps extends TouchableOpacityProps {
};

interface iButtonExtendProps {
  /** Vô hiệu hóa button. */
  disable?: boolean;
  /** Style của view chứa button. */
  containerStyle?: StyleProp<ViewStyle>;
  /** Style của label button. */
  labelStyle?: StyleProp<TextStyle>;
  /** Label button. */
  label?: string;
  /** Icon component. */
  iconComponent?: ReactNode;
  /** Vị trí icon. */
  iconPosition?: "left" | "right" | "top" | "bottom";
};

export type SMButtonProps = iButtonBaseProps & iButtonExtendProps;

const BaseButton = memo((props: SMButtonProps) => {
  const {
    disable,
    containerStyle,
    labelStyle,
    label,
    iconComponent,
    iconPosition,
  } = props;

  const direction =
    iconPosition == "left" ? "row"
      : iconPosition == "right" ? "row-reverse"
        : iconPosition == "top" ? "column"
          : iconPosition == "bottom" ? "column-reverse"
            : undefined;

  return (
    <View style={[{ ...styles.container, backgroundColor: disable ? "#F0F0F4" : "#FFFFFF" }, containerStyle]}>
      <TouchableOpacity
        {...props}
        disabled={disable}
        style={{ ...styles.button, flexDirection: direction }}
      >
        {iconComponent && iconComponent}
        {label &&
          <Text style={[styles.label, labelStyle]}>
            {label}
          </Text >
        }
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    //height: 40,
    //borderWidth: 1,
    //borderColor: "#D1D1D1",
    borderRadius: 6,
  },
  button: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 14,
    fontFamily: "semiBold",
  },
});

export { BaseButton };
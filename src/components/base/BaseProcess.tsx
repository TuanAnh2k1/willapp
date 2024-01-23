import React, { memo } from "react";
import { Text, View, StyleSheet, ViewStyle, StyleProp, ColorValue } from "react-native";

interface iProcessProps {
  /** Style của view chứa button. */
  containerStyle?: StyleProp<ViewStyle>;
  /** Label của process. */
  label?: string;
  /** Giá trị hiện tại. */
  presentValue: number;
  /** Tổng giá trị. */
  totalValue: number;
};

const BaseProcess = memo((props: iProcessProps) => {
  const {
    containerStyle,
    label,
    presentValue,
    totalValue,
  } = props;
  const widthRatio = presentValue / totalValue;

  const color: ColorValue =
    widthRatio <= 0.25 ? "#DA3B01"
      : widthRatio <= 0.5 ? "#EAA300"
        : widthRatio <= 0.75 ? "#0F6CBD"
          : "#107C10";

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.ratio}>{`${presentValue}/${totalValue}`}</Text>
      </View>
      <View style={styles.process}>
        <View style={{ ...styles.processBar, width: `${widthRatio * 100}%`, backgroundColor: color }} />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  labelContainer: {
    flexDirection: "row",
  },
  label: {
    flex: 2,
    fontSize: 14,
    fontFamily: "regular",
    color: "#707070",
  },
  ratio: {
    flex: 1,
    fontSize: 14,
    fontFamily: "regular",
    color: "#242424",
    textAlign: "right",
  },
  process: {
    marginTop: 5,
    width: "100%",
    height: 5,
    borderRadius: 5,
    backgroundColor: "#E6E6E6",
  },
  processBar: {
    height: 5,
    borderRadius: 5,
  }
});

export { BaseProcess };
import { useEffect } from "react";
import { Text, ColorValue, LayoutAnimation, StyleSheet, TextStyle, TouchableWithoutFeedback, UIManager, View, ViewStyle, Platform, StyleProp } from "react-native";

interface iSwitchBaseProps {
  /** Giá trị của switch. */
  value?: boolean;
  /** Hàm bấm switch. */
  onPressSwitch?: () => void;
  /** Màu thumb khi switch bật. */
  thumbOnColor?: ColorValue;
  /** Màu thumb khi switch tắt. */
  thumbOffColor?: ColorValue;
  /** Màu track khi bật. */
  trackOnColor?: ColorValue;
  /** Màu track khi tắt. */
  trackOffColor?: ColorValue;
};

interface iSwitchExtendProps {
  /** Style của view chứa switch. */
  containerStyle?: StyleProp<ViewStyle>;
  /** Style của thumb. */
  thumbStyle?: StyleProp<ViewStyle>;
  /** Style của track. */
  trackStyle?: StyleProp<ViewStyle>;
  /** Style của label switch. */
  labelStyle?: StyleProp<TextStyle>;
  /** Label switch. */
  label?: string;
};

export type SMSwitchProps = iSwitchBaseProps & iSwitchExtendProps;

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
};

const BaseSwitch = (props: SMSwitchProps) => {
  const {
    value,
    onPressSwitch,
    thumbOnColor,
    thumbOffColor,
    trackOnColor,
    trackOffColor,
    containerStyle,
    thumbStyle,
    trackStyle,
    labelStyle,
    label,
  } = props;

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [value]);

  const thumbColor = value ?
    thumbOnColor ? thumbOnColor : "#0F6CBD"
    : thumbOffColor ? thumbOffColor : "#E5E5E7";

  const trackColor = value ?
    trackOnColor ? trackOnColor : "white"
    : trackOffColor ? trackOffColor : "white";

  const alignTrack = value ? "flex-end" : "flex-start";

  return (
    <TouchableWithoutFeedback onPress={onPressSwitch}>
      <View style={[styles.container, containerStyle]}>
        <View style={[{ ...styles.thumb, backgroundColor: thumbColor }, thumbStyle]}>
          <View style={[{ ...styles.track, backgroundColor: trackColor, alignSelf: alignTrack }, trackStyle]} />
        </View>
        <Text style={[styles.label, labelStyle]}>
          {label}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  thumb: {
    paddingHorizontal: 5,
    width: 50,
    height: 30,
    borderColor: "#D1D1D1",
    borderRadius: 20,
    justifyContent: "center",
  },
  track: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "white",
  },
  label: {
    marginLeft: 10,
    fontSize: 14,
    fontFamily: "regular",
  },
});

export { BaseSwitch };
import React, { ReactNode, memo } from "react";
import { TextInput, TextInputProps, View, StyleSheet, ViewStyle, StyleProp } from "react-native";

interface iTextInputBaseProps extends TextInputProps {
};

interface iTextInputExtendProps {
  /** Style của view chứa input. */
  containerStyle?: StyleProp<ViewStyle>;
  /** Style của input. */
  inputStyle?: StyleProp<ViewStyle>;
  /** Component bên trái. */
  leftComponent?: ReactNode;
  /** Component bên phải. */
  rightComponent?: ReactNode;
};

export type SMTextInputProps = iTextInputBaseProps & iTextInputExtendProps;

const BaseTextInput = memo((props: SMTextInputProps) => {
  const {
    containerStyle,
    inputStyle,
    leftComponent,
    rightComponent,
  } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      {leftComponent && leftComponent}
      <TextInput
        {...props}
        style={[{ ...styles.input, marginLeft: leftComponent ? 5 : 0, marginRight: rightComponent ? 5 : 0 }, inputStyle]}
      />
      {rightComponent && rightComponent}
    </View>
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
  input: {
    flex: 1,
    fontSize: 14,
    fontFamily: "regular",
  },
});

export { BaseTextInput };
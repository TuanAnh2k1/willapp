import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface BaseModalProps {
  /** Ẩn/Hiện modal. */
  visible: boolean;
  /** Style modal. */
  containerStyle?: StyleProp<ViewStyle>;
  /** Component bên trong modal. */
  children?: any;
};

const BaseModal = (props: BaseModalProps) => {
  const { visible, containerStyle, children } = props;

  if (visible) {
    return (
      <View style={[styles.container, containerStyle]}>
        {children}
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#00000040",
    zIndex: 99,
  },
});

export { BaseModal };
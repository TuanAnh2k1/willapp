import { colors } from "@utils";
import React from "react";
import { StyleSheet, View } from "react-native";
import { BaseModal } from "../base/BaseModal";

interface CustomModalProps {
  visible: boolean;
  children?: any;
}

const CustomModal = (props: CustomModalProps) => {
  const { visible, children } = props;

  if (visible) {
    return (
      <BaseModal visible containerStyle={styles.container}>
        {children}
      </BaseModal>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export { CustomModal };
import { IconBack, IconNotify, IconUsername } from "@assets";
import { SMX, colors } from "@utils";
import { View, Text, StyleSheet } from "react-native";
import { BaseButton } from "../base/BaseButton";
import { useNavigation } from "@react-navigation/native";
import { ReactNode } from "react";

interface ToolbarProps {
  title?: string;
  extend?: ReactNode;
}

const Toolbar = (props: ToolbarProps) => {
  const { title, extend } = props;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <BaseButton
          containerStyle={styles.backContainer}
          iconComponent={<IconBack />}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
      {extend}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    borderBottomWidth: 0.5,
    borderBottomColor: colors._D1D1D1,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  backContainer: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontFamily: "semiBold",
    color: colors.black,
  },
});

export { Toolbar };
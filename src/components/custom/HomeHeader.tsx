import { IconLogout, IconNotify, IconUsername } from "@assets";
import { SMX, colors } from "@utils";
import { View, Text, StyleSheet } from "react-native";
import { BaseButton } from "../base/BaseButton";
import { removeLoginInformation, useAppDispatch, useAppSelector } from "@redux";

const HomeHeader = () => {
  const username = useAppSelector(state => state.app.Username);
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <IconUsername size={30} primaryColor={colors.black} />
      </View>
      <View style={styles.grettingBox}>
        <Text style={styles.greeting}>Xin chào,</Text>
        <Text style={styles.username}>{username.toUpperCase()}</Text>
      </View>
      <BaseButton
        containerStyle={styles.notifyContainer}
        iconComponent={<IconNotify size={18} />}
        onPress={() => { }}
      />
      <BaseButton
        containerStyle={styles.notifyContainer}
        iconComponent={<IconLogout />}
        onPress={() => { dispatch(removeLoginInformation()); }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    columnGap: 10,
    paddingVertical: 30,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  grettingBox: {
    flex: 1,
    height: 50,
    justifyContent: "space-evenly",
  },
  greeting: {
    fontSize: 14,
    fontFamily: "regular",
    color: colors.white,
  },
  username: {
    fontSize: 14,
    fontFamily: "bold",
    color: colors.white,
  },
  notifyContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors._115EA3,
    alignItems: "center",
    justifyContent: "center",
  },
});

export { HomeHeader };
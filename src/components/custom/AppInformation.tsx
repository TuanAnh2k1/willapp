import { SMX, colors } from "@utils";
import { View, Text, StyleSheet } from "react-native";

const AppInformation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>{SMX.AppName}<Text style={styles.appVersion}> - Version {SMX.AppVersion}</Text></Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    alignSelf: "center",
  },
  appName: {
    fontSize: 14,
    fontFamily: "regular",
    color: colors.primary,
  },
  appVersion: {
    fontSize: 14,
    fontFamily: "regular",
    color: colors.grey,
  }
});

export { AppInformation };
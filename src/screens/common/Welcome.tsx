import { welcome } from "@assets";
import { ImageBackground, StyleSheet } from "react-native";

const Welcome = () => {
  return (
    <ImageBackground source={welcome} style={styles.container}>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export { Welcome };
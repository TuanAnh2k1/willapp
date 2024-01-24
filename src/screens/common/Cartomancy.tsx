import { welcome } from "@assets";
import { Toolbar } from "@components";
import { theme } from "@utils";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";

const Cartomancy = () => {
    return (
        <SafeAreaView style={theme.container}>
            <Toolbar
                title={"Bói bài tây hàng ngày"}
            />
            <View style={styles.container}>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export { Cartomancy };
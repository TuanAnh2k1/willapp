import { welcome } from "@assets";
import { BaseButton, Toolbar } from "@components";
import { colors, theme } from "@utils";
import { useState } from "react";
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

const Cartomancy = () => {

    const [card, setCard] = useState<number>();

    const getZodiacMeaning = () => {
        switch (card) {
            case 1:
                return "";
            default:
                return "- Không rõ ý nghĩa";
        }
    }

    return (
        <SafeAreaView style={theme.container}>
            <Toolbar
                title={"Bói bài hàng ngày"}
            />
            <ScrollView style={styles.container}>
                <View style={styles.buttonPlease}>
                    <Text style={styles.textPlease}>Xin thành tâm</Text>
                </View>
                <Text style={styles.textMeaning}>Ý nghĩa lá bài về sức khỏe, công việc, tình yêu trong 24 giờ tới: </Text>
                <Text style={styles.textMeaningData}>{getZodiacMeaning()}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 12,
    },
    buttonPlease: {
        alignItems: 'center',
        marginVertical: 12,
        width: '50%',
    },
    textPlease: {
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: colors._EAA300,
        color: colors.white,
        textAlign: 'center',
        borderRadius: 12,
        paddingVertical: 8,
    },
    textMeaning: {
        fontSize: 16,
        paddingBottom: 12,
        fontWeight: 'bold',
        paddingTop: 6
    },
    textMeaningData: {
        fontSize: 16,
    }
});

export { Cartomancy };
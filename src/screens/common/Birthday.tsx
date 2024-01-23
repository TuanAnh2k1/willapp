import { welcome } from "@assets";
import { Toolbar } from "@components";
import { useAppSelector } from "@redux";
import { Utility, colors, theme } from "@utils";
import { RefreshControl, ScrollView, Text } from "react-native";
import { FlatList } from "react-native";
import { View } from "react-native";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";

const Birthday = () => {

    const birthday = useAppSelector(state => state.app.Birthday);

    return (
        <SafeAreaView style={theme.container}>
            <Toolbar
                title={"Xem ý nghĩa ngày sinh"}
            />
            <ScrollView style={styles.scroll}>
                <View style={styles.viewBirth}>
                    <Text style={styles.textBirth}>Ngày sinh - Dương lịch: </Text>
                    <Text style={styles.textBirthData}>{Utility.formatDateData(birthday!)}</Text>
                </View>
                <View style={styles.viewBirth}>
                    <Text style={styles.textBirth}>Cung hoàng đạo: </Text>
                    <Text style={styles.textBirthData}>{Utility.formatDateZodiac(birthday!)}</Text>
                </View>
                <View style={styles.viewBirth}>
                    <Text style={styles.textBirth}>Ngày sinh - Âm lịch: </Text>
                    <Text style={styles.textBirthData}>{Utility.formatDateLunerData(birthday!)}</Text>
                </View>
                <View style={styles.viewBirth}>
                    <Text style={styles.textBirth}>Năm tuổi: </Text>
                    <Text style={styles.textBirthData}>{Utility.formatDateChineseZodiac(birthday!)}</Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    },
    scroll: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 8
    },
    viewBirth: {
        marginVertical: 4,
        paddingVertical: 4,
        flexDirection: 'row'
    },
    textBirth: {
        fontSize: 16,
        flex: 1
    },
    textBirthData: {
        fontSize: 16,
        fontWeight: '600',
        flex: 1,
    }
});

export { Birthday };
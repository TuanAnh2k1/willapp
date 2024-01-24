import { welcome } from "@assets";
import { Toolbar } from "@components";
import { theme } from "@utils";
import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import { Calendar } from 'react-native-calendars';

const CalendarScreen = () => {

    const [selected, setSelected] = useState('');

    return (
        <SafeAreaView style={theme.container}>
            <Toolbar
                title={"Lịch vạn niên"}
            />
            <View style={styles.container}>
                <Calendar
                    onDayPress={day => {
                        setSelected(day.dateString);
                    }}
                    markedDates={{
                        [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export { CalendarScreen };
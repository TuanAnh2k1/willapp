import React, { useState, useRef, useEffect } from "react";
import {
    View,
    TouchableOpacity,
    Platform,
    Modal,
    StyleSheet,
    Text,
} from "react-native";

import RNDateTimePicker from "@react-native-community/datetimepicker";

import { colors, theme } from "@utils";
import { IconCalendarAlt, IconClock, IconTimesCircle } from "@assets";
import { TextInput } from "react-native";

interface iProp {
    HasTime?: boolean;
    SelectedDate?: Date;
    // eslint-disable-next-line no-unused-vars
    OnselectedDateChanged?: (newDate: Date) => void;
    onRemove?: () => void;
    miniDate?: Date;
    maxDate?: number;
}

const DateTimePicker: React.FC<iProp> = (props: iProp) => {
    const [selectedDate, setSelectedDate] = useState<Date>();
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState<string | undefined>(undefined);
    const pickDate = useRef<Date | null>(null);

    let maxiDate;
    if (props.maxDate) {
        maxiDate = new Date();
        maxiDate.setDate(maxiDate.getDate() + props.maxDate);
    }

    useEffect(() => {
        setSelectedDate(props.SelectedDate);
    }, [props.SelectedDate]);


    const displayDateValue = (dateVal?: Date) => {
        if (dateVal) {
            dateVal = new Date(dateVal);

            let year = dateVal.getFullYear().toString();

            let month = (dateVal.getMonth() + 1).toString();
            if (month.length < 2) {
                month = "0" + month;
            }

            let day = dateVal.getDate().toString();
            if (day.length < 2) {
                day = "0" + day;
            }

            return day + "/" + month + "/" + year;
        } else {
            return "";
        }
    };

    const displayTimeValue = (dateVal?: Date) => {
        if (dateVal) {
            dateVal = new Date(dateVal);

            let hour = dateVal.getHours().toString();
            if (hour.length < 2) {
                hour = "0" + hour;
            }

            let minute = dateVal.getMinutes().toString();
            if (minute.length < 2) {
                minute = "0" + minute;
            }

            return hour + ":" + minute;
        } else {
            return "";
        }
    };

    const openDatePicker = (_mode: string) => {
        if (selectedDate) {
            pickDate.current = selectedDate;
        } else {
            pickDate.current = new Date();
        }
        setShow(true);
        setMode(_mode);
    };

    const setDate = (newDate: Date | null) => {
        if (newDate) {
            let finalDate: Date = newDate;
            if (selectedDate) {
                if (mode === "date") {
                    finalDate.setHours(selectedDate.getHours());
                    finalDate.setMinutes(selectedDate.getMinutes());
                } else {
                    finalDate.setFullYear(selectedDate.getFullYear());
                    finalDate.setMonth(selectedDate.getMonth());
                    finalDate.setDate(selectedDate.getDate());
                }
            }

            setSelectedDate(finalDate);
            setShow(false);
            if (props.OnselectedDateChanged) {
                props.OnselectedDateChanged(finalDate);
            }
        }
    };

    return (
        <View style={styles.container}>
            {props.HasTime === true && (
                <View style={theme.TimeInput}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.touchView}
                        onPress={() => openDatePicker("time")}
                    >
                        <TextInput
                            style={styles.textInput}
                            editable={false}
                            pointerEvents="none"
                            value={displayTimeValue(selectedDate)}
                        />
                        <IconClock />
                    </TouchableOpacity>
                </View>
            )}
            <View style={theme.PickerInput}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.touchPress}
                    onPress={() => openDatePicker("date")}
                >
                    <TextInput
                        style={styles.inputDate}
                        editable={false}
                        pointerEvents="none"
                        value={displayDateValue(selectedDate)}
                        placeholder="Ngày sinh - Dương lịch"
                    />
                    <IconCalendarAlt primaryColor={colors.grey} />
                </TouchableOpacity>
            </View>
            {props.onRemove && <TouchableOpacity
                style={styles.remove}
                activeOpacity={0.5}
                onPress={() => {
                    pickDate.current = null;
                    setSelectedDate(undefined);
                    props.onRemove;
                }}
            >
                <IconTimesCircle style={styles.icon} primaryColor={colors._656566} />
            </TouchableOpacity>
            }
            {show && Platform.OS === "android" && (
                <RNDateTimePicker
                    value={pickDate.current}
                    mode={mode}
                    is24Hour={true}
                    display="spinner"
                    onChange={(event, val) => {
                        if (event.type == "set") {
                            setDate(val);
                        } else {
                            setShow(false);
                        }
                    }}
                    minimumDate={props.miniDate}
                    maximumDate={maxiDate}
                />
            )}
            {show && Platform.OS === "ios" && (
                <Modal visible={true} transparent={true} animationType="fade">
                    <View style={styles.datePick}>
                        <RNDateTimePicker
                            value={pickDate.current}
                            mode={mode}
                            is24Hour={true}
                            display="spinner"
                            onChange={(event, val) => {
                                pickDate.current = val;
                            }}
                            minimumDate={props.miniDate}
                            maximumDate={maxiDate}
                        />
                        <View style={styles.pressPick}>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => setShow(false)}>
                                <Text style={styles.buttonCancel}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => setDate(pickDate.current)}>
                                <Text style={styles.buttonOK}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    buttonCancel: {
        color: colors.primary,
        fontSize: 24,
        fontWeight: "bold",
        margin: 20,
    },
    buttonOK: {
        color: colors._0F6CBD,
        fontSize: 24,
        fontWeight: "bold",
        margin: 20,
    },
    container: {
        flexDirection: "row",
        height: 48,
    },
    datePick: { backgroundColor: colors._70c7ef, flex: 1, justifyContent: "center", padding: 25 },
    icon: { marginLeft: 12, marginRight: 2 },
    inputDate: { borderColor: colors._ACACAC, color: colors._1B2031, flex: 1, fontSize: 14 },
    pressPick: { flexDirection: "row", justifyContent: "center" },
    remove: { justifyContent: "center" },
    textInput: { color: colors._1B2031, flex: 1, fontSize: 16, textAlign: "left" },
    touchPress: { backgroundColor: colors.white, flex: 1, flexDirection: "row" },
    touchView: { backgroundColor: colors.white, flex: 1, flexDirection: "row" },
});

export { DateTimePicker };

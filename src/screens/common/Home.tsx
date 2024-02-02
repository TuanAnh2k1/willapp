import { IconApproveList, IconQuery, IconQuestions, shape } from "@assets";
import { colors, theme } from "@utils";
import { Text, View, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BaseButton } from "../../../src/components/base/BaseButton";
import { HomeHeader } from "@components";
import { BIRTHDAY_SCREEN, CALENDAR_SCREEN, CARTOMANCY_SCREEN } from "../RouteName";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import * as Notifications from 'expo-notifications';
import { setTimeNotice, useAppDispatch, useAppSelector } from "@redux";

const { width } = Dimensions.get("window");

const Home = () => {

  const username = useAppSelector(state => state.app.Username);
  const timeNotice = useAppSelector(state => state.app.TimeNotice);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const category = [
    {
      label: "Ngày sinh?",
      icon: <IconQuestions />,
      route: BIRTHDAY_SCREEN,
    },
    {
      label: "Lịch vạn niên",
      icon: <IconApproveList />,
      route: CALENDAR_SCREEN,
    },
    {
      label: "Bói bài",
      icon: <IconQuery />,
      route: CARTOMANCY_SCREEN,
    },
  ];

  useEffect(() => {
    // Yêu cầu quyền cho thông báo khi component được tạo
    (async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('Quyền thông báo bị từ chối!');
      }
    })();
    checkNotice();
  }, []);

  const checkNotice = async () => {
    if (!timeNotice) {
      dispatch(setTimeNotice(new Date()));
      await scheduleNotification();
    } else {
      const newDate = new Date();
      const oldDate = new Date(timeNotice);
      const timeoutNotice = newDate.getTime() - oldDate.getTime();
      if (timeoutNotice > 1800000) {
        await scheduleNotification();
      }
    }
  }

  const scheduleNotification = async () => {
    await Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Đoán vận mệnh hôm nay',
        body: `${username.toUpperCase()} ơi! Hãy xem ngay vận mệnh hôm nay của bạn thế nào`,
      },
      trigger: {
        seconds: 1, // Thời gian trì hoãn trước khi hiển thị thông báo (đơn vị là giây)
      },
    });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={shape} style={styles.background} resizeMode={"stretch"} >
        <SafeAreaView style={styles.background}>
          <HomeHeader />
          <View style={styles.categoryContainer}>
            <Text style={styles.title}>Danh mục</Text>
            <View style={styles.categoryList}>
              {category.map((item, index) =>
                <BaseButton
                  key={index}
                  containerStyle={[styles.categoryStyle, theme.shadow]}
                  labelStyle={styles.labelStyle}
                  label={item.label}
                  iconComponent={item.icon}
                  iconPosition={"top"}
                  onPress={() => navigation.navigate(item.route)}
                />
              )}
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  background: {
    flex: 1,
  },
  categoryContainer: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    marginTop: 30,
    marginLeft: 15,
    fontSize: 24,
    fontFamily: "semiBold",
    color: colors._242424,
  },
  categoryList: {
    gap: 15,
    padding: 15,
    marginTop: 15,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  categoryStyle: {
    width: (width - 60) / 3,
    aspectRatio: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  labelStyle: {
    marginTop: 10,
    fontSize: 12,
    color: colors.grey,
  },
});

export { Home };
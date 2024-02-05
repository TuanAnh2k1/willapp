import { IconPassword, IconShowPassword, IconUsername, logo } from "@assets";
import { SMX, colors, theme } from "@utils";
import { useState } from "react";
import { Text, View, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppInformation, BaseButton, BaseSwitch, BaseTextInput, DateTimePicker } from "@components";
import { useNavigation } from "@react-navigation/native";
import { HOME } from "../RouteName";
import { AuthenticationDTO } from "@dto";
import { ApiUrl, GlobalService, HttpUtils } from "@services";
import { ExceptionType, SMXException } from "@entities";
import { removeLoginInformation, setAlert, setLoginInformation, setRemember, setUserInformation, useAppDispatch, useAppSelector } from "@redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as LocalAuthentication from 'expo-local-authentication';
import { Button } from "react-native";

const { width } = Dimensions.get("window");

const Login = () => {
  const [account, setAccount] = useState({
    username: useAppSelector(state => state.app.Username),
    password: useAppSelector(state => state.app.Password),
    birthday: useAppSelector(state => state.app.Birthday),
  });
  const [show, setShow] = useState<boolean>(false);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const [authenticationResult, setAuthenticationResult] = useState('');

  const onAccountChange = (state: string, value: any) => {
    setAccount((previousState) => {
      return { ...previousState, [state]: value };
    });
  };

  const checkBiometric = async () => {
    const hasBiometric = await LocalAuthentication.hasHardwareAsync();
    if (!hasBiometric) {
      setAuthenticationResult('Thiết bị không hỗ trợ xác thực vân tay.');
      return;
    }

    const biometricType = await LocalAuthentication.supportedAuthenticationTypesAsync();
    if (biometricType.includes(1)) {
      // 1: FingerPrint
      authenticateBiometric();
    } else {
      setAuthenticationResult('Thiết bị không hỗ trợ xác thực vân tay.');
    }
  };

  const authenticateBiometric = async () => {
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Sử dụng vân tay để đăng nhập',
    });

    if (result.success) {
      console.log(result);

      setAuthenticationResult('Xác thực thành công!');
    } else {
      setAuthenticationResult('Xác thực không thành công.');
    }
  };

  const login = async () => {
    if (account.username === "") {
      dispatch(setAlert("Bạn chưa nhập tên đăng nhập!"));
      return;
    }

    if (!account.birthday) {
      dispatch(setAlert("Bạn chưa chọn ngày sinh!"));
      return;
    }

    GlobalService.showLoading();
    try {
      dispatch(setLoginInformation(account));
      navigation.navigate(HOME)
      GlobalService.hideLoading();
    } catch (error) {
      GlobalService.hideLoading();
    }
  }

  return (
    <SafeAreaView style={theme.container}>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Image style={styles.logo} source={logo} resizeMode={"contain"} />
          <Text style={styles.appName}>{SMX.AppTitle}</Text>
          <View style={styles.loginBox}>
            {/*<BaseDropdown
            data={[{ id: 1, label: "Pick 1" }, { id: 2, label: "Pick 2" }, { id: 3, label: "Pick 3", parent: 2 }, { id: 4, label: "Pick 4" }, { id: 5, label: "Pick 5", parent: 2 }, { id: 6, label: "Pick 6" }]}
            value={id}
            containerStyle={{ marginTop: 20 }}
            defaultLabel={"--- Chọn ---"}
            onPressItemDropdown={(id) => setID(id)}
          />*/}
            <BaseTextInput
              placeholder={"Tên của bạn"}
              value={account.username}
              onChangeText={(value) => onAccountChange("username", value)}
              containerStyle={styles.inputStyle}
              leftComponent={<IconUsername />}
            />
            {/* <BaseTextInput
              placeholder={"Mật khẩu"}
              value={account.password}
              onChangeText={(value) => onAccountChange("password", value)}
              secureTextEntry={!show}
              containerStyle={styles.inputStyle}
              leftComponent={<IconPassword />}
              rightComponent={
                <TouchableOpacity
                  onPressIn={() => setShow(true)}
                  onPressOut={() => setShow(false)}
                >
                  <IconShowPassword />
                </TouchableOpacity>
              }
            /> */}
            <View style={{
              marginTop: 20,
              borderRadius: 8,
            }}>
              <DateTimePicker
                onRemove={() => { onAccountChange("birthday", undefined) }}
                SelectedDate={account.birthday}
                OnselectedDateChanged={(val) => {
                  onAccountChange("birthday", val)
                }}
              />
            </View>
            {/* <BaseSwitch
              value={remember}
              onPressSwitch={() => dispatch(setRemember(!remember))}
              containerStyle={styles.switchStyle}
              label={"Lưu thông tin đăng nhập"}
            /> */}
            <BaseButton
              containerStyle={styles.buttonStyle}
              labelStyle={styles.labelStyle}
              label={"Đăng nhập"}
              onPress={() => login()}
            />
            <Button title="Kiểm tra vân tay" onPress={checkBiometric} />
          </View>
        </View>
      </KeyboardAwareScrollView>
      <AppInformation />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  logo: {
    width: width / 3 * 2,
    height: width / 2,
  },
  appName: {
    fontSize: 24,
    fontFamily: "semiBold",
    color: colors._242424,
  },
  loginBox: {
    paddingHorizontal: 20,
  },
  inputStyle: {
    marginTop: 20,
    width: "100%",
    height: 50,
    borderRadius: 8,
  },
  switchStyle: {
    marginTop: 20,
    alignSelf: "flex-start",
  },
  buttonStyle: {
    marginTop: 30,
    height: 50,
    borderRadius: 8,
    backgroundColor: colors.primary,
  },
  labelStyle: {
    fontSize: 16,
    color: colors.white,
  },
});

export { Login };
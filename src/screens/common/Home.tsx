import { IconApproveList, IconTransport, IconUploadFile, shape } from "@assets";
import { Features, Utility, colors, theme } from "@utils";
import { Text, View, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BaseButton } from "../../../src/components/base/BaseButton";
import { HomeHeader } from "@components";
import { TRANSPORT_STACK } from "../RouteName";
import { useNavigation } from "@react-navigation/native";
import { ApiUrl, GlobalService, HttpUtils } from "@services";
import { useEffect, useState } from "react";
import { adm_Feature } from "@entities";
import { AuthenticationDTO } from "@dto";

const { width } = Dimensions.get("window");

const Home = () => {
  const [features, setFeatures] = useState<adm_Feature[]>([]);
  const navigation = useNavigation();
  const category = [
    {
      label: "Vận chuyển",
      icon: <IconTransport />,
      route: TRANSPORT_STACK,
      disalbe: !Utility.CheckPermissionFeature(features, Features.Transport),
    },
    {
      label: "Phê duyệt",
      icon: <IconApproveList />,
      route: TRANSPORT_STACK,
      disalbe: !Utility.CheckPermissionFeature(features, Features.Approve),
    },
    {
      label: "Upload file",
      icon: <IconUploadFile />,
      route: TRANSPORT_STACK,
      disalbe: !Utility.CheckPermissionFeature(features, Features.UploadFile),
    },
  ];

  useEffect(() => {
    const load = async () => {
      GlobalService.showLoading();
      try {
        let request = new AuthenticationDTO();

        await HttpUtils.post<AuthenticationDTO>(
          ApiUrl.GetUserMenuMobile,
          "",
          JSON.stringify(request),
        ).then((response) => {
          setFeatures(response.Features ?? []);
        }).then(() => {
          GlobalService.hideLoading();
        });
      } catch (error) {
        GlobalService.hideLoading();
      }
    }

    load();
  }, [])

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
                  disable={item.disalbe}
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
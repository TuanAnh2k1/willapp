import { SMX, Utility, colors, theme } from "@utils";
import { memo, useCallback, useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, FlatList, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BaseProcess, Toolbar } from "@components";
import { useNavigation } from "@react-navigation/native";
import { TRANSPORT_DISPLAY } from "../RouteName";
import { ApiUrl, GlobalService, HttpUtils } from "@services";
import { PagingInfo, TransportDTO } from "@dto";
import { ftr_Transport } from "@entities";

const TransportDefault = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [listTransport, setListTransport] = useState<ftr_Transport[]>([]);

  useEffect(() => {
    loadData();
  }, [])

  const loadData = async () => {
    GlobalService.showLoading();
    try {
      let request = new TransportDTO();
      request.PagingInfo = new PagingInfo();

      await HttpUtils.post<TransportDTO>(
        ApiUrl.Transport,
        SMX.ApiActionCode.SearchData,
        JSON.stringify(request)
      ).then((response) => {
        setListTransport(response.Transports ?? []);
      }).then(() => {
        GlobalService.hideLoading();
      });
    } catch (error) {
      GlobalService.hideLoading();
    }
  }

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  }, []);

  return (
    <SafeAreaView style={theme.container}>
      <View style={styles.container}>
        <FlatList
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} progressViewOffset={50} />}
          data={listTransport}
          stickyHeaderIndices={[0]}
          stickyHeaderHiddenOnScroll
          ListHeaderComponent={
            <Toolbar
              title={"Danh sách chuyến vận chuyển"}
            />
          }
          renderItem={({ item, index }) => <Transport key={index} item={item} />}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </SafeAreaView>
  )
};

interface TransportProps {
  item: ftr_Transport;
}

const Transport = memo((props: TransportProps) => {
  const { item } = props
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      activeOpacity={1}
      // @ts-ignore
      onPress={() => navigation.navigate(TRANSPORT_DISPLAY, { ID: item.TRANSPORT_ID })}
    >
      <View style={styles.cardHeaderContainer}>
        <View style={styles.statusContainer}>
          <Text style={styles.code}>{item.CODE}</Text>
        </View>
        <Text style={{ ...styles.value, color: colors.grey }}>{Utility.formatDateView(item.CREATED_TRANSPORT_DTG)}</Text>
      </View>
      <View style={styles.cardBodyContainer}>
        <View style={styles.cardLineContainer}>
          <Text style={styles.label}>Lái xe</Text>
          <Text style={styles.value}>{item.DRIVER_NAME}</Text>
        </View>
        <View style={styles.cardLineContainer}>
          <Text style={styles.label}>Loại xe</Text>
          <Text style={styles.value}>{item.CAR_TYPE}</Text>
        </View>
        <View style={styles.cardLineContainer}>
          <Text style={styles.label}>Biển số</Text>
          <Text style={styles.value}>{item.PLATE_NUMBER}</Text>
        </View>
        <View style={styles.cardLineContainer}>
          <BaseProcess
            label={"Số lệnh đã trả"}
            presentValue={Number(item.COMMAND_TRANSFERED)}
            totalValue={Number(item.COMMAND_SUM)}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors._F5F5F5,
  },
  listContainer: {
    rowGap: 10,
  },
  cardContainer: {
    height: 250,
    backgroundColor: colors.white,
  },
  cardHeaderContainer: {
    paddingHorizontal: 15,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: colors._E0E0E0,
  },
  statusContainer: {
    flex: 2,
    rowGap: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  cardBodyContainer: {
    paddingHorizontal: 15,
  },
  cardLineContainer: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: colors._E0E0E0,
  },
  code: {
    fontSize: 14,
    fontFamily: "semiBold",
    color: colors.primary,
  },
  label: {
    flex: 2,
    fontSize: 14,
    fontFamily: "regular",
    color: colors.grey,
  },
  value: {
    flex: 3,
    fontSize: 14,
    fontFamily: "regular",
    color: colors._242424,
    textAlign: "right",
  }
});

export { TransportDefault };
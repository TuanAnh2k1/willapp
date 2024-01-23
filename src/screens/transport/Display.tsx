import { FunctionCodes, SMX, Utility, colors, theme } from "@utils";
import { memo, useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BaseButton, BaseProcess, Toolbar } from "@components";
import { CommandTransportDTO, TransportDTO } from "@dto";
import { ApiUrl, GlobalService, HttpUtils } from "@services";
import { ftr_Command, ftr_Transport } from "@entities";
import { IconMoreOption, IconReceiveOrder, IconTransferOrder } from "@assets";

const TransportDisplay = (props: any) => {
  const ID = props.route.params.ID;
  const [functions, setFunctions] = useState<string[]>([]);
  const [transport, setTransport] = useState<ftr_Transport>(new ftr_Transport());
  const [listCommand, setListCommand] = useState<ftr_Command[]>([]);

  useEffect(() => {
    loadData();
  }, [])

  const loadData = async () => {
    GlobalService.showLoading();
    try {
      let request = new TransportDTO();
      request.TransportID = ID;

      await HttpUtils.post<TransportDTO>(
        ApiUrl.Transport,
        SMX.ApiActionCode.SetupDisplay,
        JSON.stringify(request)
      ).then((response) => {
        setFunctions(response.FunctionCodes ?? []);
        setTransport(response.Transport ?? new ftr_Transport());
        setListCommand(response.Commands ?? []);
      }).then(() => {
        GlobalService.hideLoading();
      });
    } catch (error) {
      GlobalService.hideLoading();
    }
  }

  interface CommandProps {
    item: ftr_Command;
  }

  const Command = memo((props: CommandProps) => {
    const { item } = props;
    const [commandFunctions, setCommandFunctions] = useState<string[]>([]);
    const [showAction, setShowAction] = useState<boolean>(false);

    useEffect(() => {
      if (showAction) {
        getActionPermission();
      }
    }, [showAction])

    const getActionPermission = async () => {
      GlobalService.showLoading();
      try {
        let request = new CommandTransportDTO();
        request.CommandID = item.COMMAND_ID;

        await HttpUtils.post<CommandTransportDTO>(
          ApiUrl.CommandTransport,
          SMX.ApiActionCode.GetActionPermission,
          JSON.stringify(request)
        ).then((response) => {
          setCommandFunctions(response.FunctionCodes ?? []);
        }).then(() => {
          GlobalService.hideLoading();
        });
      } catch (error) {
        GlobalService.hideLoading();
      }
    }

    const onReceiveOrder = async () => {
      GlobalService.showLoading();
      try {
        let request = new CommandTransportDTO();
        request.Command = item;

        await HttpUtils.post<CommandTransportDTO>(
          ApiUrl.CommandTransport,
          SMX.ApiActionCode.ReiceiveOrder,
          JSON.stringify(request)
        ).then(() => {
          loadData();
        }).then(() => {
          GlobalService.hideLoading();
        });
      } catch (error) {
        GlobalService.hideLoading();
      }
    }

    const onTransferOrder = async () => {
      GlobalService.showLoading();
      try {
        let request = new CommandTransportDTO();
        request.Command = item;

        await HttpUtils.post<CommandTransportDTO>(
          ApiUrl.CommandTransport,
          SMX.ApiActionCode.TransferOrder,
          JSON.stringify(request)
        ).then(() => {
          loadData();
        }).then(() => {
          GlobalService.hideLoading();
        });
      } catch (error) {
        GlobalService.hideLoading();
      }
    }

    return (
      <View style={[styles.cardContainer, theme.shadow]}>
        <View style={styles.cardHeaderContainer}>
          <View style={styles.statusContainer}>
            <Text style={styles.code}>{item.CODE}</Text>
          </View>
          <BaseButton
            containerStyle={styles.buttonMoreOptionStyle}
            iconComponent={<IconMoreOption />}
            onPress={() => setShowAction(!showAction)}
          />
        </View>
        <View style={styles.cardBodyContainer}>
          <View style={styles.cardLineContainer}>
            <Text style={styles.label}>Loại lệnh</Text>
            <Text style={styles.value}>{item.TYPE_NAME}</Text>
          </View>
          <View style={styles.cardLineContainer}>
            <Text style={styles.label}>Đơn vị đề nghị</Text>
            <Text style={styles.value}>{item.DELIVERY_UNIT_NAME}</Text>
          </View>
          <View style={styles.cardLineContainer}>
            <Text style={styles.label}>Ngày tạo</Text>
            <Text style={styles.value}>{Utility.formatDateView(item.CREATED_COMMAND_DTG)}</Text>
          </View>
        </View>
        {showAction &&
          <View style={[styles.actionContainer, theme.shadow]}>
            {Utility.CheckPermissionFunction(commandFunctions, FunctionCodes.ReceiveOrder) &&
              <BaseButton
                containerStyle={styles.actionButtonStyle}
                labelStyle={styles.actionLabelStyle}
                label={"Nhận lệnh"}
                iconComponent={<IconReceiveOrder />}
                iconPosition={"left"}
                onPress={() => onReceiveOrder()}
              />
            }
            {Utility.CheckPermissionFunction(commandFunctions, FunctionCodes.TransferOrder) &&
              <BaseButton
                containerStyle={styles.actionButtonStyle}
                labelStyle={styles.actionLabelStyle}
                label={"Trả lệnh"}
                iconComponent={<IconTransferOrder />}
                iconPosition={"left"}
                onPress={() => onTransferOrder()}
              />
            }
          </View>
        }
      </View>
    )
  });

  return (
    <SafeAreaView style={theme.container}>
      <View style={styles.container}>
        <ScrollView
          stickyHeaderIndices={[0]}
          stickyHeaderHiddenOnScroll
        >
          <Toolbar
            title={"Chi tiết chuyến vận chuyển"}
          />
          <View style={styles.infoContainer}>
            <View style={styles.lineInfoWhite}>
              <View style={styles.statusContainer}>
                <Text style={styles.code}>{transport.CODE}</Text>
              </View>
              <Text style={{ ...styles.value, color: colors.grey }}>{Utility.formatDateView(transport.CREATED_TRANSPORT_DTG)}</Text>
            </View>
            <View style={styles.lineInfoGrey}>
              <Text style={styles.label}>Lái xe</Text>
              <Text style={styles.value}>{transport.DRIVER_NAME}</Text>
            </View>
            <View style={styles.lineInfoWhite}>
              <Text style={styles.label}>Loại xe</Text>
              <Text style={styles.value}>{transport.CAR_TYPE}</Text>
            </View>
            <View style={styles.lineInfoGrey}>
              <Text style={styles.label}>Biển số</Text>
              <Text style={styles.value}>{transport.PLATE_NUMBER}</Text>
            </View>
            <View style={styles.lineInfoWhite}>
              <Text style={styles.label}>Cán bộ quỹ theo xe</Text>
              <Text style={styles.value}>{transport.ESCORT_NAME}</Text>
            </View>
            <View style={styles.lineInfoGrey}>
              <Text style={styles.label}>Điểm đi</Text>
              <Text style={styles.value}>{transport.ISSUED_UNIT_NAME}</Text>
            </View>
            <View style={styles.lineInfoWhite}>
              <Text style={styles.label}>Ngày khởi hành</Text>
              <Text style={styles.value}>{Utility.formatDateView(transport.START_DTG)}</Text>
            </View>
            <View style={styles.lineInfoGrey}>
              <Text style={styles.label}>Ngày hoàn thành</Text>
              <Text style={styles.value}>{Utility.formatDateView(transport.END_DTG)}</Text>
            </View>
            <View style={styles.lineInfoWhite}>
              <BaseProcess
                label={"Số lệnh đã trả"}
                presentValue={Number(transport.COMMAND_TRANSFERED)}
                totalValue={Number(transport.COMMAND_SUM)}
              />
            </View>
          </View>
          <View style={styles.cardView}>
            {listCommand.map((item, index) =>
              <Command key={index} item={item} />
            )}
          </View>
        </ScrollView>
        <View style={styles.buttonView}>
          {Utility.CheckPermissionFunction(functions, FunctionCodes.KhoiHanh) &&
            <BaseButton
              containerStyle={styles.buttonStyle}
              labelStyle={styles.buttonLabelStyle}
              label={"Khởi hành"}
              onPress={() => { }}
            />
          }
        </View>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors._F5F5F5,
  },
  infoContainer: {
    paddingTop: 5,
    paddingBottom: 15,
    backgroundColor: colors.white,
    borderBottomWidth: 0.5,
    borderBottomColor: colors._E0E0E0,
  },
  lineInfoWhite: {
    paddingHorizontal: 15,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  lineInfoGrey: {
    paddingHorizontal: 15,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors._FAFAFA,
  },
  cardView: {
    padding: 15,
    rowGap: 10,
  },
  cardContainer: {
    height: 200,
    backgroundColor: colors.white,
    borderRadius: 8,
  },
  cardHeaderContainer: {
    paddingHorizontal: 15,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    justifyContent: "space-between",
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
  },
  buttonView: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  buttonStyle: {
    marginVertical: 15,
    width: 150,
    height: 50,
    borderRadius: 8,
    backgroundColor: colors._EAA300,
  },
  buttonLabelStyle: {
    fontSize: 16,
    color: colors.white,
  },
  buttonMoreOptionStyle: {
    width: 20,
    height: 20,
  },
  actionContainer: {
    position: "absolute",
    top: 50,
    right: 15,
    borderRadius: 6,
    backgroundColor: colors.white,
  },
  actionButtonStyle: {
    width: 150,
    height: 40,
    alignItems: "flex-start",
  },
  actionLabelStyle: {
    marginLeft: 5,
    fontSize: 14,
    fontFamily: "regular",
    color: colors._424242,
  }
});

export { TransportDisplay };
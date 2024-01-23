import { EnvConfig } from "../EnvConfig";

class SMX {
  public static AppTitle = "Hệ thống FlexCash";
  public static AppName = EnvConfig.ExtraConfig.APP_NAME;
  public static AppVersion = EnvConfig.ExtraConfig.APP_VERSION;

  static ApiActionCode = class {
    static SearchData = "SearchData";
    static SetupDisplay = "SetupDisplay";
    static Approve = "Approve";
    static Reject = "Reject";
    static GetByContractCode = "GetByContractCode";
    static SetupAddNewVisit = "SetupAddNewVisit";
    static SaveActUrgeField = "SaveActUrgeField";
    static SetupAddViewThuGiu = "SetupAddViewThuGiu";
    static SaveActThuGiu = "SaveActThuGiu";
    static SetupAddBanGiao = "SetupAddBanGiao";
    static SaveActBanGiao = "SaveActBanGiao";
    static GetEmployeeInfomation = "GetEmployeeInfomation";
    static ViewNotification = "ViewNotification";
    static GetActionPermission = "GetActionPermission";
    static ReiceiveOrder = "ReiceiveOrder";
    static TransferOrder = "TransferOrder";
  };
}

export { SMX };
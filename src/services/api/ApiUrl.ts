import { EnvConfig } from "@utils";

class ApiUrl {
  // Service system
  static Global_GetVersion_Api = EnvConfig.getApiHost() + "/api/Global/GetAppInfomation";
  static Global_GetLanguage = EnvConfig.getApiHost() + "/api/Global/GetLanguage";
  static Global_GetListLanguage = EnvConfig.getApiHost() + "/api/Global/GetListLanguage";

  // Authentication
  static Authentication_Login = EnvConfig.getApiHost() + "/api/Authentication/Login";
  static Authentication_Logout = EnvConfig.getApiHost() + "/api/Authentication/Logout";
  static Authentication_GetListRight = EnvConfig.getApiHost() + "/api/Authentication/GetListRight";
  static Authentication_ChangePassword = EnvConfig.getApiHost() + "/api/Authentication/ChangePassword";
  static Authentication_CheckFirstLogin = EnvConfig.getApiHost() + "/api/Authentication/CheckFirstLogin";
  static Authentication_UserCloseApp = EnvConfig.getApiHost() + "/api/Authentication/UserCloseApp";
  static Authentication_LoginReason = EnvConfig.getApiHost() + "/api/Authentication/LoginReason";
  static Authentication_GetEmployeesField = EnvConfig.getApiHost() + "/api/Authentication/GetEmployeesField";

  //StorePriceStandardREResidential
  static StorePriceStandardREResidential_ExecuteStorePriceStandardREResidential =
    EnvConfig.getApiHost() + "/api/StorePriceStandardREResidential/ExecuteStorePriceStandardREResidential";

  // google api
  static GoogleApiKey = "AIzaSyBH9asRxO8HBTrQZfcc5iQHUAaxbCqLl3U";
  static GoogleApiKeyAndroid = "AIzaSyDTGz8M-Sci70UL8RpnUfrWpbbr6rZY_As";
  static GoogleApiKeyIos = "AIzaSyBLceFu9fgncT-AOiopiNDD0IKnFPguCms";
  static GoogleGeocodeApi = "https://maps.googleapis.com/maps/api/geocode/json";
  static GOOGLE_MAPS_APIKEY = "AIzaSyA4YRgt8JKBKt3wrCi2Mfmdhc85rpCW5zE";

  // SystemParameter
  static Global_GetSystemParamNameByID = EnvConfig.getApiHost() + "/api/Global/GetSystemParamNameByID";
  static Global_GetSystemParam = EnvConfig.getApiHost() + "/api/Global/GetSystemParam";
  static Global_GetByFeatureID = EnvConfig.getApiHost() + "/api/Global/GetByFeatureID";
  static Global_GetByFeatureIDAndExt1i = EnvConfig.getApiHost() + "/api/Global/GetByFeatureIDAndExt1i";
  static Global_LogError = EnvConfig.getApiHost() + "/api/Global/LogError";

  static Attachment_ImagePreview = EnvConfig.getApiHost() + "/AttachmentImageViewer.ashx";
  static Attachment_PDFView = EnvConfig.getApiHost() + "/PDFViewer.pdf";
  static Attachment_InsuranceDocument = EnvConfig.getApiHost() + "/DownloadFileInsuranceDocument.pdf";
  static Attachment_Download = EnvConfig.getApiHost() + "/Common/Download.aspx";

  static Common_ExecuteAttachment = EnvConfig.getApiHost() + "/api/AttachmentController/ExecuteAttachment";

  // chart
  static Home_Chart = EnvConfig.getApiHost() + "/Chart/Home.aspx";

  static PDFViewer = EnvConfig.getApiHost() + "/ProcessValuationDocumentPdfViewer.ashx";

  static PostExpoNotificationToken = EnvConfig.getApiHost() + "/api/devicetoken/ExecuteDeviceToken";

  static Notification_ExecuteNotification = EnvConfig.getApiHost() + "/api/notification/ExecuteNotification";

  static CollectionDocument_Execute = EnvConfig.getApiHost() + "/api/CollectionDocument/Execute";

  static CollectionDebtContract_Execute = EnvConfig.getApiHost() + "/api/CollectionDebtContract/Execute";

  static CollectionDocumentAll_Execute = EnvConfig.getApiHost() + "/api/CollectionDocumentAll/Execute";

  static Profile_Execute = EnvConfig.getApiHost() + "/api/Profiles/Execute";

  static Register_Execute = EnvConfig.getApiHost() + "/api/Register/Execute";

  static PaymentSchedule_Execute = EnvConfig.getApiHost() + "/api/PaymentSchedule/Execute";

  static DebtContractEntry_Execute = EnvConfig.getApiHost() + "/api/DebtContractEntry/Execute";

  static CollectionDocActHis_Execute = EnvConfig.getApiHost() + "/api/CollectionDocumentActionHistory/Execute";

  static CollectionDocAction_Execute = EnvConfig.getApiHost() + "/api/CollectionDocumentAction/Execute";

  static CollectionDocActionField_Execute = EnvConfig.getApiHost() + "/api/CollectionDocumentActionField/Execute";

  static Attachment_Execute = EnvConfig.getApiHost() + "/api/Attachment/Execute";

  static PromiseToPay_Execute = EnvConfig.getApiHost() + "/api/PromiseToPay/Execute";

  static Customer_Execute = EnvConfig.getApiHost() + "/api/mobile/Customer/Execute";

  static DebtContractAnnex_Execute = EnvConfig.getApiHost() + "/api/DebtContractAnnex/Execute";

  static Insurance_Execute = EnvConfig.getApiHost() + "/api/Insurance/Execute";

  static ActionCollection_Execute = EnvConfig.getApiHost() + "/api/ActionCollection/Execute";

  static Escalation_Execute = EnvConfig.getApiHost() + "/api/Escalation/Execute";

  static ActionCash_Execute = EnvConfig.getApiHost() + "/api/ActionCash/Execute";

  static CollectionDocumentException_Execute = EnvConfig.getApiHost() + "/api/CollectionDocumentException/Execute";

  static DeliquencyHistory_Execute = EnvConfig.getApiHost() + "/api/DeliquencyHistory/Execute";

  static CSTicket_Execute = EnvConfig.getApiHost() + "/api/csticket/Execute";

  static PostionTracking_Execute = EnvConfig.getApiHost() + "/api/Tracking/Execute";

  static MobileDevice_Execute = EnvConfig.getApiHost() + "/api/MobileDevice/Execute";

  static Home_Execute = EnvConfig.getApiHost() + "/api/home/Execute";

  static Foreclosure_Execute = EnvConfig.getApiHost() + "/api/foreclosure/Execute";

  static WorklistPriority_Execute = EnvConfig.getApiHost() + "/api/worklist_priority/Execute";

  static GetToaDoByAddress = EnvConfig.getApiHost() + "/Api/GetToaDoByAddress";

  static ReportActivityAttempt = EnvConfig.getApiHost() + "/api/reportActivityAttempt/Execute";

  static FCTracking_Execute = EnvConfig.getApiHost() + "/Common/FCTracking.aspx";
}

export default ApiUrl;

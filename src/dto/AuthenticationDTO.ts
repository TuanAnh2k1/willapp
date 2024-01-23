import { adm_Employee, adm_Feature } from "@entities";

class AuthenticationDTO {
  public UserName?: string;
  public Password?: string;
  public UserToken?: string;
  //public DeviceID?: string;
  public Employee?: adm_Employee;
  //public OldPassword?: string;
  //public NewPassword?: string;
  public Message?: string;
  public IsFirstLogin?: boolean;
  public Culture?: string;
  public ExpoToken?: string;
  public OtpCode?: string;
  public transId?: string;
  public IgnoreOtp?: string;
  public EnableOTP?: boolean;
  public NumberAllowTryOTP?: number;
  public Features?: adm_Feature[];
  //public ListNotifys?: flex_Notify[] = []; // so luong thong bao
  //public AppInformation?: AppInfomation;
}

export { AuthenticationDTO }

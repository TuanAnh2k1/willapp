import { GlobalDto } from "@dto";
import { SMXException } from "@entities";
import { HttpUtils } from "./api/HttpUtils";
import { ApiUrl } from "./api/ApiUrl";

class LogManager {
  public static async Log(ex: SMXException) {
    let request = new GlobalDto();
    request.DeviceInfo = `Mobile $`;
    request.ExceptionInfo = ex.Message;

    HttpUtils.post<GlobalDto>(
      ApiUrl.GlobalLogError,
      "",
      JSON.stringify(request),
      false
    );
  }
}

export { LogManager };
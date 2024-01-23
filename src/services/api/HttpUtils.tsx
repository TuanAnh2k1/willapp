import { ExceptionType, SMXException } from "@entities";
import { GlobalCache } from "@utils";
import axios from 'axios';

class HttpUtils {
  public static async post<T>(apiUrl: string, actionCode: string, bodyContent: string, includeToken: boolean = true) {
    return HttpUtils.fetch_api<T>(apiUrl, actionCode, bodyContent, includeToken);
  }

  public static async fetch_api<T>(
    apiUrl: string,
    actionCode: string,
    bodyContent: string,
    includeToken: boolean,
  ) {
    let header: any = {};
    if (includeToken) {
      header = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Flex_ActionCode": actionCode,
        "Authorization": "Bearer " + GlobalCache.UserToken,
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "Expires": 0,
      };
    } else {
      header = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Flex_ActionCode": actionCode,
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "Expires": 0,
      };
    }

    return await axios(apiUrl, {
      method: "POST",
      headers: header,
      data: bodyContent,
      timeout: 10000,
    })
      .then((response: any) => {
        if (response.status === 200) {
          return response.data as T;
        } else {
          let ex = new SMXException();
          if (response.StatusCode === 400) {
            // Lỗi nghiệp vụ, trả về trang đang hiển thị
            ex.Type = ExceptionType.BadRequest;
            ex.Message = response.Message;
          } else if (response.StatusCode === 401) {
            // Lỗi chưa đăng nhập
            //popToTop();
            ex.Type = ExceptionType.BadRequest;
            ex.Message = response.Message;
          } else if (response.StatusCode === 405) {
            // Lỗi không có quyền truy cập
            // JumToErrorPage(response.Message);
            ex.Type = ExceptionType.BadRequest;
            ex.Message = response.Message;
          } else {
            // 400: Các lỗi khác
            ex.Type = ExceptionType.NotAcceptable;
            ex.Message = response.Message;
          }

          throw ex;
        }
      })
      .catch((err) => {
        // Nếu kết nối thất bại thì báo message và show ở client
        console.log('err', err)
        let ex = new SMXException();
        ex.Type = ExceptionType.NotConnection;
        ex.Message = "Không có kết nối mạng. Vui lòng thử lại";

        throw ex;
      });
  }
}

export { HttpUtils }
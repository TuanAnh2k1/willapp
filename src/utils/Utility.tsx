import { Platform } from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import moment from "moment";
import "moment-lunar";
import { adm_Feature } from "@entities";

class Utility {
  static isIos = Platform.OS == "ios";

  static CheckPermissionFeature(allowedFeatures: adm_Feature[] | undefined, checkingFeature: number): boolean {
    if (allowedFeatures) {
      const result = allowedFeatures!.findIndex(
        (feature) => feature.FEATURE_ID === checkingFeature
      );
      return result >= 0;
    }
    else {
      return false;
    }
  }

  static CheckPermissionFunction(allowedFunctions: string[] | undefined, checkingFunction: string): boolean {
    if (allowedFunctions) {
      const bypass = allowedFunctions.findIndex((code) => code === "*");
      if (bypass >= 0) {
        return true;
      } else {
        const result = allowedFunctions!.findIndex(
          (code) => code.toUpperCase() === checkingFunction.toUpperCase()
        );
        return result >= 0;
      }
    } else {
      return false;
    }
  }

  static formatDateView = (date: Date | undefined) => {
    if (date) {
      return moment(date, "YYYY/MM/DD HH:mm:ss.SSS").format("DD/MM/YYYY, H:mm A");
    } else {
      return "";
    }
  }

  static formatDateData = (date: Date) => {
    return moment(date).format("DD-MM-YYYY");
  }

  static formatDateLunerData = (date: Date) => {
    return moment(date).lunar().format("DD-MM-YYYY");
  }

  static formatDateZodiac = (date: Date) => {
    const gregorianDate = new Date(date);

    const zodiacSigns = [
      'Bạch Dương', 'Kim Ngưu', 'Song Tử', 'Cự Giải', 'Sư Tử', 'Xử Nữ',
      'Thiên Bình', 'Bọ Cạp', 'Nhân Mã', 'Ma Kết', 'Bảo Bình', 'Song Ngư'
    ];
    const month = gregorianDate.getUTCMonth() + 1;
    const day = gregorianDate.getUTCDate();

    const startDate = [3, 21]; // Ngày bắt đầu của Bạch Dương
    const endDate = [4, 19];   // Ngày kết thúc của Bạch Dương

    const zodiacIndex = (month === endDate[0] && day >= endDate[1]) || (month === startDate[0] && day >= startDate[1])
      ? month
      : (month - 1 + 12) % 12;

    const zodiacSign = zodiacSigns[zodiacIndex];

    return zodiacSign;
  }

  static formatDateChineseZodiac = (date: Date) => {

    // const lunar = moment(date).lunar();
    const gregorianDate = new Date(date);
    const lunarDate = moment(gregorianDate).lunar();
    // Xác định Can Chi của năm dựa trên năm Dương lịch
    const year = lunarDate.year();
    const canChiYear = this.calculateCanChi(year);

    // Xác định con giáp dựa trên Can Chi của năm
    const chineseZodiacs = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tị', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];
    const zodiacIndex = (year - 4) % 12; // Bắt đầu từ năm Tý (năm 4)
    const chineseZodiac = chineseZodiacs[zodiacIndex];

    return `${canChiYear}`;
  }

  static calculateCanChi = (year: number) => {
    const canhs = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];
    const chis = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tị', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];

    const canIndex = (year - 4) % 10;
    const chiIndex = (year - 4) % 12;

    return `${canhs[canIndex]} ${chis[chiIndex]}`;
  };

  static sumDigitsFromDate(date: Date) {
    // Lấy ngày, tháng, năm từ đối tượng Date
    const dataDate = new Date(date);
    const day = dataDate.getDate().toString();
    const month = (dataDate.getMonth() + 1).toString(); // Tháng bắt đầu từ 0
    const year = dataDate.getFullYear().toString();

    // Kết hợp thành một chuỗi
    const combinedString = day + month + year;

    // Tính tổng chữ số
    let sum = 0;
    for (let i = 0; i < combinedString.length; i++) {
      sum += parseInt(combinedString[i]);
    }

    // Áp dụng quy tắc không cộng nếu kết quả là 10 hoặc 11
    while (sum >= 12) {
      // Tính tổng chữ số mới
      sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }

    return sum;
  }


  static takeImages = async () => {
    try {
      let { granted } = await Camera.requestCameraPermissionsAsync();
      if (!granted) {
        return;
      }

      // Chụp ảnh
      let result = await ImagePicker.launchCameraAsync({
        base64: true,
        quality: 0.8,
      });

      if (result.assets) {
        result.assets.forEach(asset => {
          const uriArray = asset.uri.toString().split("/");
          const filename = uriArray[uriArray.length - 1];
          const fileExternal = filename.split(".")[1];

        });

        //let imageObject = new ImageObject();
        //imageObject.FileName = filename;
        //imageObject.FileExtension = fileExternal;
        //imageObject.PhotoTime = new Date();
        //imageObject.Base64 = result.base64;

        //return imageObject;
      }

      return null;
    } catch (ex) {
      //LogManager.Log("LỖI CHỤP ẢNH: " + JSON.stringify(ex));
    }
  }

  static chooseImages = async () => {
    try {
      let { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!granted) {
        return;
      }

      // Chọn ảnh từ album
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsMultipleSelection: true,
        base64: true,
        orderedSelection: true,
        quality: 0.8,
      });

      if (result.assets) {
        result.assets.forEach(asset => {
          const uriArray = asset.uri.toString().split("/");
          const filename = uriArray[uriArray.length - 1];
          const fileExternal = filename.split(".")[1];

        });

        //let imageObject = new ImageObject();
        //imageObject.FileName = filename;
        //imageObject.FileExtension = fileExternal;
        //imageObject.PhotoTime = new Date();
        //imageObject.Base64 = result.base64;

        //return imageObject;
      }

      return null;
    } catch (ex) {
      //LogManager.Log("LỖI CHỌN ẢNH: " + JSON.stringify(ex));
    }
  }

  static pickAndReadDocument = async () => {

    // Pick a document
    const result = await DocumentPicker.getDocumentAsync({
      copyToCacheDirectory: false,
    });

    if (result.type !== "success") {

    }
    else {
      console.log('Document picked:', result.uri);
      const cacheFilePath = FileSystem.cacheDirectory + result.name;

      await FileSystem.copyAsync({ from: result.uri, to: cacheFilePath });

      const content = await FileSystem.readAsStringAsync(cacheFilePath, { encoding: FileSystem.EncodingType.Base64 });
      console.log(content);
    }

  }

}

export { Utility }
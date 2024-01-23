import { Platform } from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import moment from "moment";
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
    return moment(date).format("YYYY-MM-DD");
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
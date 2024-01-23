import Constants from "expo-constants";

class EnvConfig {
  static ExtraConfig = {
    APP_NAME: Constants.expoConfig?.name,
    APP_VERSION: Constants.expoConfig?.extra?.APP_VERSION,
    API_HOST_DEV: Constants.expoConfig?.extra?.API_HOST_DEV,
    API_HOST_PRO: Constants.expoConfig?.extra?.API_HOST_PRO,
  };

  static getApiHost() {
    if (__DEV__) {
      return EnvConfig.ExtraConfig.API_HOST_DEV;
    } else {
      return EnvConfig.ExtraConfig.API_HOST_PRO;
    }
  }
}

export { EnvConfig }
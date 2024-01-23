import { NavigationApp, NavigationUtils } from '@navigation';
import { persistor, store } from '@redux';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as Font from "expo-font";
import { bold, regular, semiBold } from '@assets';
import { useEffect, useState } from 'react';
import { GlobalService } from '@services';
import { GlobalUI, NetworkError, SMAlert } from '@components';

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  const fetchFonts = () => {
    return Font.loadAsync({
      "bold": bold,
      "regular": regular,
      "semiBold": semiBold,
    });
  };

  useEffect(() => {
    fetchFonts().then(() => {
      setFontLoaded(true);
    });
  }, [])

  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {fontLoaded &&
            <NavigationApp ref={(navigatorRef: any) => NavigationUtils.setTopLevelNavigator(navigatorRef)} />
          }
          <SMAlert />
        </PersistGate>
      </Provider >
      {/*<FlashMessage position="top" floating={true} hideStatusBar={false} />*/}
      <GlobalUI ref={GlobalService.globalUIRef} />
      <NetworkError />
    </>
  );
};

export default App;
import { forwardRef, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ApiUrl, HttpUtils } from '@services';
import { StackApp } from './stack';
import { Welcome } from '@screens';
import { GlobalDTO } from '@dto';
import { AppInformation } from '@entities';

const NavigationApp = forwardRef((props: any, ref: any) => {
  const [ready, setReady] = useState(false);

  // useEffect(() => {
  //   const load = async () => {
  //     try {
  //       let request = new GlobalDTO();

  //       await HttpUtils.post<AppInformation>(
  //         ApiUrl.GlobalGetAppInfomation,
  //         "",
  //         JSON.stringify(request),
  //         false,
  //       ).then((response) => {
  //         console.log(response);
  //       }).then(() => {
  //         setReady(true);
  //       });
  //     } catch (error) {

  //     }
  //   }

  //   load();
  // }, [])

  return (
    <NavigationContainer ref={ref}>
      <StackApp />
    </NavigationContainer>
  );
});

export { NavigationApp };
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BIRTHDAY_SCREEN, Birthday, HOME, Home, LOGIN, Login, TRANSPORT_STACK, } from '@screens';
import { TransportStack } from './TransportStack';
import { useAppSelector } from '@redux';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const StackApp = () => {
  const username = useAppSelector(state => state.app.Username);

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {username ?
        <Stack.Screen name={HOME} component={Home} />
        :
        <Stack.Screen name={LOGIN} component={Login} />
      }
      <Stack.Screen name={TRANSPORT_STACK} component={TransportStack} />
      <Stack.Screen name={BIRTHDAY_SCREEN} component={Birthday} />
    </Stack.Navigator>
  )
}

export { StackApp };
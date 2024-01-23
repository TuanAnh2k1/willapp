import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HOME, Home, LOGIN, Login, TRANSPORT_STACK, } from '@screens';
import { TransportStack } from './TransportStack';
import { useAppSelector } from '@redux';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const StackApp = () => {
  const employeeID = useAppSelector(state => state.user.EmployeeID);

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {employeeID ?
        <Stack.Screen name={HOME} component={Home} />
        :
        <Stack.Screen name={LOGIN} component={Login} />
      }
      <Stack.Screen name={TRANSPORT_STACK} component={TransportStack} />
    </Stack.Navigator>
  )
}

export { StackApp };
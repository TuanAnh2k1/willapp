import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TRANSPORT_DEFAULT, TRANSPORT_DISPLAY, TransportDefault, TransportDisplay } from "@screens";

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const TransportStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={TRANSPORT_DEFAULT} component={TransportDefault} />
      <Stack.Screen name={TRANSPORT_DISPLAY} component={TransportDisplay} />
    </Stack.Navigator>
  )
}

export { TransportStack };
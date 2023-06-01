import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrderScreen from "../screens/OrderScreen";
import OrderOverviewScreen from "../screens/OrderOverviewScreen";

const Stack = createNativeStackNavigator();

const OrderNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ gestureEnabled: false, headerShown: false }}
        name="OrderScreen"
        component={OrderScreen}
      />
      <Stack.Screen
        options={{ gestureEnabled: false, headerShown: false }}
        name="OrderOverview"
        component={OrderOverviewScreen}
      />
    </Stack.Navigator>
  );
};

export default OrderNavigator;

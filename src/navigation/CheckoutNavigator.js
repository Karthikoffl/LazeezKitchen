import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from "../screens/CartScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import CartItem from "../components/CartItem";
import EmptyCart from "../screens/EmptyCart";

const Stack = createNativeStackNavigator();

const CheckoutNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="EmptyCart"
        component={EmptyCart}
      />
      <Stack.Screen
        options={{ gestureEnabled: false, headerShown: false }}
        name="Cart"
        component={CartScreen}
      />
      <Stack.Screen
        options={{ gestureEnabled: false, headerShown: false }}
        name="CartItem"
        component={CartItem}
      />
      <Stack.Screen
        options={{ gestureEnabled: false, headerShown: false }}
        name="Checkout"
        component={CheckoutScreen}
      />
    </Stack.Navigator>
  );
};

export default CheckoutNavigator;

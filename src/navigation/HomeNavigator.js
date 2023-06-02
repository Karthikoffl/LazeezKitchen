import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductScreen from "../screens/ProductScreen";
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{ presentation: "modal", headerShown: false }}
        name="ProductScreen"
        component={ProductScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="MapScreen"
        component={MapScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;

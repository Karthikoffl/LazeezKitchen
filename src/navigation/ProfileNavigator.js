import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/ProfileScreen";
import CameraScreen from "../screens/CameraScreen";
import WishlistScreen from "../screens/WishlistScreen";
import CouponScreen from "../screens/CouponScreen";
import AddressScreen from "../screens/AddressScreen";
import PaymentScreen from "../screens/PaymentScreen";
import TermsConditionScreen from "../screens/TermsConditionScreen";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ gestureEnabled: false, headerShown: false }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
      <Stack.Screen
        options={{ gestureEnabled: false, headerShown: false }}
        name="Camera"
        component={CameraScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Wishlist"
        component={WishlistScreen}
      />
      <Stack.Screen name="Coupons" component={CouponScreen} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Address"
        component={AddressScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Payment"
        component={PaymentScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="TermsCondition"
        component={TermsConditionScreen}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;

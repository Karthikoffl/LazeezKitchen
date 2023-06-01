import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

function Available() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Available Coupons!</Text>
    </View>
  );
}

function Used() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Used Coupons!</Text>
    </View>
  );
}

const TopTab = createMaterialTopTabNavigator();

const CouponScreen = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Available" component={Available} />
      <TopTab.Screen name="Used" component={Used} />
    </TopTab.Navigator>
  );
};

export default CouponScreen;

import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const MultiStep2 = () => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <View>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: "600" }}>
          Choose Payment Method
        </Text>
        <TouchableOpacity
          onPress={() => setIsPressed((isPressed) => !isPressed)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderColor: "black",
            borderWidth: 1,
            paddingVertical: 10,
            justifyContent: "space-between",
            marginTop: 20,
            borderRadius: 10,
            paddingHorizontal: 24,
          }}
        >
          <Ionicons
            name={!isPressed ? "radio-button-on" : "radio-button-off"}
            size={24}
            color={!isPressed ? "#F49F1C" : "black"}
          />
          <Text>Pay Online</Text>
          <Image
            source={require("../assets/images/bank.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsPressed((isPressed) => !isPressed)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderColor: "black",
            borderWidth: 1,
            paddingVertical: 10,
            justifyContent: "space-between",
            marginTop: 20,
            borderRadius: 10,
            paddingHorizontal: 24,
          }}
        >
          <Ionicons
            name={!isPressed ? "radio-button-on" : "radio-button-off"}
            size={24}
            color={!isPressed ? "#F49F1C" : "black"}
          />
          <Text>Cash On Delivery</Text>
          <Image
            source={require("../assets/images/cod.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MultiStep2;

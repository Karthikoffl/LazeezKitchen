import { View, Text, Image } from "react-native";
import React from "react";

const MultiStep3 = () => {
  return (
    <View>
      <View style={{ alignItems: "center", marginTop: 60 }}>
        <Image
          source={require("../assets/images/success.png")}
          style={{ width: 300, height: 300 }}
        />
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ fontWeight: "600", fontSize: 16 }}>
          Order Placed Sucessfully!
        </Text>
        <Text
          style={{
            textAlign: "center",
            paddingHorizontal: 40,
            marginVertical: 10,
          }}
        >
          Congratulations your order has been placed you can track your number
          #00021
        </Text>
      </View>
    </View>
  );
};

export default MultiStep3;

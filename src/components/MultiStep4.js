import { View, Text, Image } from "react-native";
import React from "react";

const MultiStep4 = () => {
  return (
    <View>
      <View style={{ alignItems: "center", marginTop: 60 }}>
        <Image
          source={require("../assets/images/PaymentFailed.png")}
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
        <Text style={{ fontWeight: "600", fontSize: 16 }}>Payment Failed</Text>
        <Text
          style={{
            textAlign: "center",
            paddingHorizontal: 40,
            marginVertical: 10,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur
          posuere molestie fermentum.
        </Text>
      </View>
    </View>
  );
};

export default MultiStep4;

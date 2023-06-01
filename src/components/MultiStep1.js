import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";

const MultiStep1 = () => {
  return (
    <View>
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: "600" }}>
          Select Delivery Address
        </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 40,
          marginRight: 40,
          borderRadius: 10,
          borderColor: "#B0B3C2",
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {}}
        >
          <Ionicons
            name="add-circle-outline"
            size={24}
            color="black"
            style={{ paddingHorizontal: 5 }}
          />
          <Text style={{ fontSize: 16 }}>Select Delivery Address</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          padding: 10,
          marginTop: 40,
          marginLeft: 20,
          borderColor: "#B0B3C2",
          borderWidth: 1,
          marginRight: 20,
          height: 100,
          borderRadius: 10,
        }}
        onPress={() => {}}
      >
        <View style={{ padding: 3 }}>
          <Text style={{ fontSize: 14, fontWeight: "600" }}>
            Dhivakar Arunachalam
          </Text>
          <Text style={{ paddingTop: 5, marginRight: 30 }}>
            187 KK Nagar, Radha Street, Chennai 600027. Tamil Nadu
          </Text>
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 20,
              left: 290,
              padding: 5,
              borderRadius: 50,
              backgroundColor: "rgba(244, 159, 28, 0.2)",
            }}
            onPress={() => {}}
          >
            <Feather name="edit-3" size={22} color="#F49F1C" />
          </TouchableOpacity>
          <Text style={{ fontWeight: "600", paddingVertical: 8 }}>
            Phone : 9876543210
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 10,
          borderColor: "rgba(244, 159, 28, 1)",
          marginTop: 20,
          marginLeft: 20,
          borderWidth: 1,
          marginRight: 20,
          height: 100,
          borderRadius: 10,
          backgroundColor: "rgba(244, 159, 28, 0.2)",
        }}
        onPress={() => {}}
      >
        <View style={{ padding: 3 }}>
          <Text style={{ fontSize: 14, fontWeight: "600" }}>
            Dhivakar Arunachalam
          </Text>
          <Text style={{ paddingTop: 5, marginRight: 30 }}>
            187 KK Nagar, Radha Street, Chennai 600027. Tamil Nadu
          </Text>
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 20,
              left: 290,
              padding: 5,
              borderRadius: 50,
              backgroundColor: "rgba(244, 159, 28, 0.2)",
            }}
            onPress={() => {}}
          >
            <AntDesign name="check" size={22} color="#F49F1C" />
          </TouchableOpacity>
          <Text style={{ fontWeight: "600", paddingVertical: 8 }}>
            Phone : 9876543210
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MultiStep1;

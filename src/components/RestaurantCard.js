import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        height: 200,
        width: 170,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#171717",
        shadowOpacity: 0.3,
      }}
      onPress={() => {
        navigation.navigate("ProductScreen", {
          product_Image,
          title,
          price,
          delivery,
        });
      }}
    >
      <Image
        source={{ uri: item.attributes?.data?.attributes?.url }}
        style={{ height: 100, width: 170, borderRadius: 5 }}
      />
      <View style={{ paddingHorizontal: 10 }}>
        <View style={{ paddingTop: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 12 }}>
            {item?.attributes.title}
          </Text>
        </View>
        <View style={{ flexDirection: "row", paddingVertical: 7 }}>
          <FontAwesome
            style={{ padding: 1.5 }}
            name="star"
            size={15}
            color="#F49F1C"
          />
          <FontAwesome
            style={{ padding: 1.5 }}
            name="star"
            size={15}
            color="#F49F1C"
          />
          <FontAwesome
            style={{ padding: 1.5 }}
            name="star"
            size={15}
            color="#F49F1C"
          />
          <FontAwesome
            style={{ padding: 1.5 }}
            name="star"
            size={15}
            color="#F49F1C"
          />
          <FontAwesome
            style={{ padding: 1.5 }}
            name="star"
            size={15}
            color="#F49F1C"
          />
        </View>
        <View style={{ alignItems: "center", paddingTop: 7 }}>
          <Text style={{ fontSize: 12 }}>{item?.attributes.delivery}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

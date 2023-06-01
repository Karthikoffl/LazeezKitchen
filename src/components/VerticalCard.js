import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import RestaurantCardVertical from "./RestaurantCardVertical";

const VerticalCard = ({ id, title, button }) => {
  return (
    <View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 22,
            marginTop: 25,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: 600, fontSize: 18 }}>{title}</Text>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginRight: 22,
            }}
          >
            <Text
              style={{ color: "#F49F1C", fontSize: 14, textAlign: "center" }}
            >
              {button}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 10 }}
        showVerticalScrollIndicator={false}
        style={{ padding: 4, marginTop: 5 }}
      >
        <View style={{ paddingVertical: 5 }}>
          <RestaurantCardVertical
            id={0}
            image={require("../assets/images/food.png")}
            title="Tasty Pakistani Dish"
            price="₹ 350"
            delivery="Free Delivery"
          />
        </View>
        <View style={{ paddingVertical: 5 }}>
          <RestaurantCardVertical
            id={0}
            image={require("../assets/images/food.png")}
            title="Tasty Pakistani Dish"
            price="₹ 350"
            delivery="Free Delivery"
          />
        </View>
        <View style={{ paddingVertical: 5 }}>
          <RestaurantCardVertical
            id={0}
            image={require("../assets/images/food.png")}
            title="Tasty Pakistani Dish"
            price="₹ 350"
            delivery="Free Delivery"
          />
        </View>
        <View style={{ paddingVertical: 5 }}>
          <RestaurantCardVertical
            id={0}
            image={require("../assets/images/food.png")}
            title="Tasty Pakistani Dish"
            price="₹ 350"
            delivery="Free Delivery"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default VerticalCard;

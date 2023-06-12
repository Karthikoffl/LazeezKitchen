import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import RestaurantCardVertical from "./RestaurantCardVertical";
import axios from "axios";

// const API_URL = "http://localhost:1337/api/products";

const VerticalCard = ({ id, title, button, item, index }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/products");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

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
            id={item?.id}
            image={{ uri: item?.attributes.image }}
            title={item?.attributes.title}
            price={item?.attributes.price}
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

import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import axios from "axios";

const FoodCard = ({ item, index }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/products?populate=*",
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const data = [
    {
      id: 1,
      img: require("../assets/images/food.png"),
      title: "Green Curry With Egg",
      price: "₹ 150",
      delivery: "Free Delivery",
    },
    {
      id: 2,
      img: require("../assets/images/food.png"),
      title: "Green Curry With Egg",
      price: "₹ 160",
      delivery: "Free Delivery",
    },
    {
      id: 3,
      img: require("../assets/images/food.png"),
      title: "Green Curry With Egg",
      price: "₹ 170",
      delivery: "Free Delivery",
    },
    {
      id: 4,
      img: require("../assets/images/food.png"),
      title: "Green Curry With Egg",
      price: "₹ 180",
      delivery: "Free Delivery",
    },
  ];

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
          <Text style={{ fontWeight: 600, fontSize: 18 }}>Set Menu</Text>
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
              View All
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        style={{ paddingTop: 4, marginTop: 10 }}
      >
        {data.map((item) => (
          <View style={{ paddingHorizontal: 7 }}>
            <RestaurantCard item={item} key={item.id} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default FoodCard;

import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import RestaurantCard from "./RestaurantCard";
// import { getCategories } from '../api';

const FoodCard = ({ id, title, button }) => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   getCategories().then((data) =>{
  //     setCategories(data);
  //   });
  // }, []);

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
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        style={{ paddingTop: 4, marginTop: 10 }}
      >
        <View style={{ paddingHorizontal: 7 }}>
          <RestaurantCard
            id={0}
            image={require("../assets/images/food.png")}
            title="Green Curry With Eggs"
            rating={5}
            delivery="Free Delivery"
          />
        </View>
        <View style={{ paddingHorizontal: 7 }}>
          <RestaurantCard
            id={0}
            image={require("../assets/images/food.png")}
            title="Green Curry With Eggs"
            rating={5}
            delivery="Free Delivery"
          />
        </View>
        <View style={{ paddingHorizontal: 7 }}>
          <RestaurantCard
            id={0}
            image={require("../assets/images/food.png")}
            title="Green Curry With Eggs"
            rating={5}
            delivery="Free Delivery"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default FoodCard;

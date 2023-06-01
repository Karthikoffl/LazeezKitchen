import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Surface } from "react-native-paper";

const OrderScreen = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(true);
  const [dataSource, setDataSource] = useState([]);

  const onRefresh = () => {
    //Clear old data of the list
    setDataSource([]);
    //Call the Service to get the latest data
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    //Service to get the data from the server to render
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((responseJson) => {
        setRefreshing(false);
        setDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <SafeAreaView>
      <Surface style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={{ left: -110 }}
          >
            <Ionicons name="arrow-back" size={35} color="white" />
          </TouchableOpacity>
          <Text style={styles.HeaderText}>My Orders</Text>
        </View>
      </Surface>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Pressable
            style={{
              height: 140,
              width: "93%",
              backgroundColor: "#fff",
              borderRadius: 10,
              shadowColor: "#171717",
              shadowOpacity: 0.2,
              marginBottom: 10,
              marginTop: 20,
            }}
          >
            <TouchableOpacity onPress={() => {}}>
              <View style={{ position: "absolute", top: 5, left: 333 }}>
                <MaterialIcons name="cancel" size={24} color="#F49F1C" />
              </View>
            </TouchableOpacity>
            <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
              <Image
                style={{ height: 120, width: 140, borderRadius: 10 }}
                source={require("../assets/images/food.png")}
              />
              <View style={{ position: "absolute", top: 15, left: 160 }}>
                <Text style={{ fontSize: 16, fontWeight: "600" }}>
                  Tasty Pakistani Dish
                </Text>
              </View>
              <View style={{ top: -90, left: 150, flexDirection: "row" }}>
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
                  color="#B0B3C2"
                />
              </View>
              <View style={{ position: "absolute", top: 70, left: 165 }}>
                <Text
                  style={{ fontSize: 18, fontWeight: "600", color: "#4B4B4B" }}
                >
                  ₹ 350
                </Text>
              </View>
              <View style={{ top: -45, left: 150, flexDirection: "row" }}>
                <Text
                  style={{
                    paddingHorizontal: 5,
                    fontSize: 12,
                    color: "#F49F1C",
                  }}
                >
                  Preparing Order
                </Text>
              </View>
            </View>
          </Pressable>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Pressable
            style={{
              height: 140,
              width: "93%",
              backgroundColor: "#fff",
              borderRadius: 10,
              shadowColor: "#171717",
              shadowOpacity: 0.2,
            }}
            onPress={() => {}}
          >
            <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
              <Image
                style={{ height: 120, width: 140, borderRadius: 10 }}
                source={require("../assets/images/food.png")}
              />
              <View style={{ position: "absolute", top: 15, left: 160 }}>
                <Text style={{ fontSize: 16, fontWeight: "600" }}>
                  Tasty Pakistani Dish
                </Text>
              </View>
              <View style={{ top: -90, left: 150, flexDirection: "row" }}>
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
                  color="#B0B3C2"
                />
              </View>
              <View style={{ position: "absolute", top: 70, left: 165 }}>
                <Text
                  style={{ fontSize: 18, fontWeight: "600", color: "#4B4B4B" }}
                >
                  ₹ 600
                </Text>
              </View>
              <View style={{ top: -45, left: 150, flexDirection: "row" }}>
                <Text style={{ paddingHorizontal: 5, fontSize: 10 }}>
                  Delivered- 03 May 2022 at 9.08 PM
                </Text>
              </View>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  header: {
    height: 58,
    elevation: 4,
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
    backgroundColor: "#F49F1C",
  },
  HeaderText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 40,
  },
});

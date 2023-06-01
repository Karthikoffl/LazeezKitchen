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
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Surface } from "react-native-paper";
import DashedLine from "react-native-dashed-line";
import IncrementRadio from "../components/IncrementRadio";
import SwitchSelector from "react-native-switch-selector";

const CartScreen = () => {
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
    <SafeAreaView style={{ flex: 1 }}>
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
            style={{ left: -118 }}
          >
            <Ionicons name="arrow-back" size={35} color="white" />
          </TouchableOpacity>
          <Text style={styles.HeaderText}>My Cart</Text>
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
              marginTop: 20,
              marginBottom: 20,
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
              <View style={{ position: "absolute", top: 75, left: 245 }}>
                <IncrementRadio />
              </View>
            </View>
          </Pressable>
        </View>
        <View style={{ flexDirection: "row", paddingHorizontal: 20 }}>
          <TextInput
            style={{
              height: 50,
              width: "65%",
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              padding: 15,
              shadowColor: "#171717",
              shadowOpacity: 0.2,
            }}
            placeholder="Enter Promo Code"
            backgroundColor="white"
            maxLength={5}
          />
          <TouchableOpacity
            style={{
              height: 50,
              width: 125,
              backgroundColor: "#F49F1C",
              alignItems: "center",
              justifyContent: "center",
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              shadowColor: "#171717",
              shadowOpacity: 0.2,
            }}
            onPress={() => {}}
          >
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#fff" }}>
              Apply
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingVertical: 20, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            Delivery Options
          </Text>
          <View style={{ paddingVertical: 20 }}>
            <SwitchSelector
              initial={0}
              onPress={() => {}}
              textColor={"#F49F1C"}
              selectedColor={"#fff"}
              buttonColor={"#F49F1C"}
              borderColor={"#fff"}
              borderRadius={9}
              fontSize={15}
              bold={true}
              height={48}
              animationDuration={275}
              style={{ shadowColor: "#171717", shadowOpacity: 0.1 }}
              hasPadding
              options={[
                { label: "Home Delivery", value: "D" },
                { label: "Store Pickup", value: "S" },
              ]}
              testID="delivery-switch-selector"
              accessibilityLabel="delivery-switch-selector"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 5,
              paddingVertical: 10,
            }}
          >
            <Text>Item Price</Text>
            <Text>₹600</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 5,
              paddingVertical: 10,
            }}
          >
            <Text>GST 18%</Text>
            <Text>₹108</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 5,
              paddingVertical: 10,
            }}
          >
            <Text>Discount (5%)</Text>
            <Text style={{ color: "#F62A2A" }}>- ₹30</Text>
          </View>
          <View style={{ paddingVertical: 10 }}>
            <DashedLine dashLength={8} dashColor="#F49F1C" />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 5,
              paddingVertical: 10,
            }}
          >
            <Text style={{ color: "#F49F1C", fontWeight: "600" }}>
              Subtotal
            </Text>
            <Text style={{ color: "#F49F1C", fontWeight: "600" }}>₹678</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 5,
              paddingVertical: 10,
            }}
          >
            <Text style={{ color: "#F49F1C", fontWeight: "600" }}>Total</Text>
            <Text style={{ color: "#F49F1C", fontWeight: "600" }}>₹778</Text>
          </View>
          {/* <View style={{paddingVertical: 10}}>
                  <Text style={{fontSize: 16, fontWeight: '600'}}>Select Branch</Text>
                </View> */}
        </View>
        <View></View>
        <View
          style={{
            marginBottom: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: "90%",
              backgroundColor: "#F49F1C",
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 10,
              paddingVertical: 20,
              borderRadius: 10,
            }}
            onPress={() => navigation.navigate("Checkout")}
          >
            <Text style={{ color: "#fff", fontWeight: "600", fontSize: 16 }}>
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;

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
    marginRight: 45,
  },
});

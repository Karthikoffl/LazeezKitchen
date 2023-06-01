import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import RadioForm from "react-native-simple-radio-button";
import IncrementRadio from "../components/IncrementRadio";
import { useDispatch } from "react-redux";

const ProductScreen = () => {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);
  const [selected, setSelected] = useState(false);
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);

  const [value, setValue] = useState(0);
  const extras = [
    { label: "Extra Eggs", value: 0 },
    { label: "Spices", value: 1 },
    { label: "Mid Fries", value: 2 },
  ];

  const {
    params: { id, title, image, delivery, rating },
  } = useRoute();

  const dispatch = useDispatch();
  const selectItem = (item) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: item,
    });

  return (
    <ScrollView>
      <View style={{ position: "relative" }}>
        <Image
          source={image}
          style={{ width: "100%", height: 200, backgroundColor: "#fff" }}
        />
        {/* <TouchableOpacity 
          style={{position: 'absolute', top: 44, left: 10, padding: 2, backgroundColor: '#fff', borderRadius: 50}} 
          onPress={navigation.goBack}
          >
          <Ionicons name="arrow-back-outline" size={30} color="black" />
        </TouchableOpacity> */}
      </View>
      <View
        style={{ backgroundColor: "#fff", height: "100%", marginBottom: 30 }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 15,
            paddingTop: 30,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
          <TouchableOpacity
            style={{ paddingLeft: 118 }}
            onPress={() => setIsPressed((isPressed) => !isPressed)}
          >
            <MaterialIcons
              name={!isPressed ? "favorite-border" : "favorite"}
              size={30}
              color="#F49F1C"
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingLeft: 15,
            paddingBottom: 5,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
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

          <Text style={{ paddingLeft: 10 }}>{rating} Rating</Text>
        </View>
        <View
          style={{
            padding: 20,
            paddingTop: 5,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing. Nunc eleifend
            metus pulvinar mattis.Lorem ipsum dolor sit amet, consectetur
            adipiscing.
          </Text>
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ fontWeight: "600", fontSize: 22 }}>Extra</Text>
        </View>
        <View style={{ marginLeft: 18, marginTop: 10 }}>
          <RadioForm
            radio_props={extras}
            initial={value}
            selectedButtonColor={"#F49F1C"}
            buttonColor={"#CFD1DD"}
            buttonSize={10}
            onPress={() => {}}
          />
        </View>
        <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
          <Text style={{ fontWeight: "600", fontSize: 22 }}>Addons</Text>
        </View>
        <View style={{ flexDirection: "row", padding: 10 }}>
          <TouchableOpacity
            onPress={() => setSelected((selected) => !selected)}
            style={{ paddingHorizontal: 5 }}
          >
            {!selected ? (
              <View style={styles.inActiveAddon}>
                <Text style={styles.inActiveText}>Cheese</Text>
              </View>
            ) : (
              <View style={styles.activeAddon}>
                <Text style={styles.activeText}>Cheese</Text>
                <View style={{ position: "absolute", top: 35, left: -15 }}>
                  <IncrementRadio />
                </View>
              </View>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected1((selected1) => !selected1)}
            style={{ paddingHorizontal: 7 }}
          >
            {!selected1 ? (
              <View style={styles.inActiveAddon}>
                <Text style={styles.inActiveText}>Coke</Text>
              </View>
            ) : (
              <View style={styles.activeAddon}>
                <Text style={styles.activeText}>Coke</Text>
                <View style={{ position: "absolute", top: 35, left: -15 }}>
                  <IncrementRadio />
                </View>
              </View>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected2((selected2) => !selected2)}
            style={{ paddingHorizontal: 7 }}
          >
            {!selected2 ? (
              <View style={styles.inActiveAddon}>
                <Text style={styles.inActiveText}>Water</Text>
              </View>
            ) : (
              <View style={styles.activeAddon}>
                <Text style={styles.activeText}>Water</Text>
                <View style={{ position: "absolute", top: 35, left: -15 }}>
                  <IncrementRadio />
                </View>
              </View>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected3((selected3) => !selected3)}
            style={{ paddingHorizontal: 7 }}
          >
            {!selected3 ? (
              <View style={styles.inActiveAddon}>
                <Text style={styles.inActiveText}>Ketchup</Text>
              </View>
            ) : (
              <View style={styles.activeAddon}>
                <Text style={styles.activeText}>Ketchup</Text>
                <View style={{ position: "absolute", top: 35, left: -15 }}>
                  <IncrementRadio />
                </View>
              </View>
            )}
          </TouchableOpacity>
        </View>
        <View style={{ marginLeft: 20, marginTop: 20, flexDirection: "row" }}>
          <Text style={{ fontSize: 16, fontWeight: "800" }}>
            Total Amount:{" "}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "800", color: "#F49F1C" }}>
            ₹350
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <IncrementRadio />
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 12,
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#F49F1C",
                paddingHorizontal: 100,
                paddingVertical: 20,
                borderRadius: 10,
              }}
              onPress={() => {}}
            >
              <Text style={{ fontSize: 16, fontWeight: "600", color: "#fff" }}>
                Add Item
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  activeAddon: {
    height: 70,
    width: 80,
    backgroundColor: "#F49F1C",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  inActiveAddon: {
    height: 70,
    width: 80,
    backgroundColor: "rgba(244, 159, 28, 0.2)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  activeText: {
    color: "#FFF",
    fontWeight: "600",
  },
  inActiveText: {
    color: "#000",
    fontWeight: "600",
  },
});

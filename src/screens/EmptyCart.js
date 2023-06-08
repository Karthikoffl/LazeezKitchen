import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { Surface } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const EmptyCart = () => {
  const navigation = useNavigation();

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
            style={{ left: -110 }}
          >
            <Ionicons name="arrow-back" size={35} color="white" />
          </TouchableOpacity>
          <Text style={styles.HeaderText}>My Cart</Text>
        </View>
      </Surface>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image source={require("../assets/images/EmptyCart.png")} />
        <Text
          style={{
            textAlign: "center",
            fontWeight: 600,
            fontSize: 16,
            marginTop: 40,
          }}
        >
          Your Cart Is Empty
        </Text>
        <Text
          style={{
            textAlign: "center",
            marginLeft: 30,
            marginRight: 30,
            paddingTop: 10,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur
          posuere molestie fermentum.
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#F49F1C",
            height: 50,
            width: "80%",
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
            margin: 20,
            borderRadius: 10,
          }}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={{ color: "#fff", fontWeight: 600 }}>Back To Menu</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EmptyCart;

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

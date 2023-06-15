import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/reducers/cartReducer";
import { useDispatch } from "react-redux";

const IncrementRadio = () => {
  const dispatch = useDispatch();
  let [count, setCount] = useState(0);
  function increment() {
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }

  const increaseQuantity = (item) => {
    dispatch(incrementQuantity(item));
  };
  const decreaseQuantity = (item) => {
    if (item.quantity == 1) {
      dispatch(removeFromCart(item));
    } else {
      dispatch(decrementQuantity(item));
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fcddac",
        borderRadius: 10,
        marginLeft: 15,
        marginTop: 20,
        paddingHorizontal: 10,
        maxWidth: 80,
      }}
    >
      <Pressable
        style={{ paddingHorizontal: 6 }}
        onPress={() => decreaseQuantity(item)}
      >
        <Text style={{ padding: 5, fontSize: 20 }} onPress={decrement}>
          -
        </Text>
      </Pressable>
      <Text>{count}</Text>
      <Pressable
        style={{ paddingHorizontal: 6 }}
        onPress={() => increaseQuantity(item)}
      >
        <Text style={{ padding: 5, fontSize: 20 }} onPress={increment}>
          +
        </Text>
      </Pressable>
    </View>
  );
};

export default IncrementRadio;

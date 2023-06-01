import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";

const IncrementRadio = () => {
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
      <Pressable style={{ paddingHorizontal: 6 }}>
        <Text style={{ padding: 5, fontSize: 20 }} onPress={decrement}>
          -
        </Text>
      </Pressable>
      <Text>{count}</Text>
      <Pressable style={{ paddingHorizontal: 6 }}>
        <Text style={{ padding: 5, fontSize: 20 }} onPress={increment}>
          +
        </Text>
      </Pressable>
    </View>
  );
};

export default IncrementRadio;

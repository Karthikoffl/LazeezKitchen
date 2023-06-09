import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React, { useState } from "react";
import { filterData } from "../global/Data";
const Categories = () => {
  const [indexCheck, setIndexCheck] = useState("0");

  return (
    <View>
      <View style={{ marginLeft: 22, marginTop: 10 }}>
        <Text style={{ fontWeight: 600, fontSize: 18 }}>All Categories</Text>
      </View>
      <View style={{ marginTop: 15 }}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={filterData}
          keyExtractor={(item) => item.id}
          extraData={indexCheck}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                setIndexCheck(index.id);
              }}
            >
              <View style={styles.smallCard}>
                <Image
                  style={{ height: 60, width: 60, borderRadius: 30 }}
                  source={item.image}
                />
              </View>
              <View>
                <Text style={styles.smallCardText}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  smallCard: {
    borderRadius: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: 80,
    marginHorizontal: 10,
  },
  smallCardText: {
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
});

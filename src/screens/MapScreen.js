import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import MapView from "react-native-maps";

const MapScreen = () => {
  const onRegionChange = (region) => {
    console.log(region);
  };

  return (
    <View style={{ flex: 1, alignSelf: "center", justifyContent: "center" }}>
      <MapView style={styles.map} onRegionChange={onRegionChange}></MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});

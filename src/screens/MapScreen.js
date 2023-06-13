import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 13.08268,
    longitude: 80.270721,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={mapRegion}>
        <Marker coordinate={mapRegion} title="Marker" />
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

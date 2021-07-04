import React, { useContext } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";

import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  return currentLocation?.coords ? (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(255, 150,150, 1.0)"
        fillColor="rgba(255, 150, 150, 0.3)"
      />
      <Polyline
        coordinates={locations.map((loc: { coords: {} }) => loc.coords)}
      />
    </MapView>
  ) : (
    <ActivityIndicator size="large" color="#0000ff" style={styles.activator} />
  );
};

export default Map;

const styles = StyleSheet.create({
  map: { height: 300 },
  activator: {
    marginTop: 150,
  },
});

import React, { useContext } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";

import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);

  return currentLocation?.coords ? (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      {/* <Polyline
        coordinates={[
          { latitude: 37.78825, longitude: -122.4324 },
          { latitude: 37, longitude: -122 },
        ]}
      /> */}
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

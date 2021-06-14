import React from "react";
import { StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Polyline
        coordinates={[
          { latitude: 37.78825, longitude: -122.4324 },
          { latitude: 37, longitude: -122 },
        ]}
      />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({ map: { height: 300 } });

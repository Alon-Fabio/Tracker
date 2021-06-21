//For testing.
import "../_mokLocation";
//------------------------------------

import React, { useEffect, useState, useContext } from "react";
import { Text } from "react-native-elements";
import { StyleSheet } from "react-native";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";

import { Context as LocationContext } from "../context/LocationContext";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../screens/Map";

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [err, setErr] = useState(null);

  useEffect(() => {
    startTracking();
  }, []);

  const startTracking = async () => {
    try {
      const { status } = await requestForegroundPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          addLocation(location);
        }
      );
      if (status === "denied")
        throw new Error("Location permission not granted");
    } catch (error) {
      setErr(error);
    }
  };
  return (
    <SafeAreaView>
      <Text h2>Create a track</Text>
      <Map />
    </SafeAreaView>
  );
};

export default TrackCreateScreen;

const styles = StyleSheet.create({
  fontSize: {
    fontSize: 48,
  },
});

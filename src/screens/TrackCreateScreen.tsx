import React from "react";
import { Text } from "react-native-elements";
import { StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../screens/Map";

const TrackCreateScreen = () => {
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

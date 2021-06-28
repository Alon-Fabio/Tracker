//For testing.
import "../_mokLocation";
//------------------------------------

import React, { useCallback, useContext } from "react";
import { Text } from "react-native-elements";
import { StyleSheet } from "react-native";

import { Context as LocationContext } from "../context/LocationContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { withNavigationFocus } from "react-navigation";
import Map from "../screens/Map";
import useLocation from "../hooks/useLocation";

import TrackForm from "../components/TrackForm";
import Spacer from "../components/Spacer";

const TrackCreateScreen: React.FC<{ isFocused: boolean }> = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext);
  const callback = useCallback(
    (location) => addLocation(location, state.recording),
    [state.recording]
  );
  const [err] = useLocation(isFocused, callback);

  return (
    <SafeAreaView>
      <Text h2>Create a track</Text>
      <Map />
      <Spacer />
      <TrackForm />
    </SafeAreaView>
  );
};

export default withNavigationFocus(TrackCreateScreen);

const styles = StyleSheet.create({});

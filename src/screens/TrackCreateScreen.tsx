//For testing.
import "../_mokLocation";
//------------------------------------

import React, { useCallback, useContext } from "react";
import { Text } from "react-native-elements";
import { StyleSheet } from "react-native";

import { FontAwesome as PlusIcon } from "@expo/vector-icons";

import { Context as LocationContext } from "../context/LocationContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { withNavigationFocus } from "react-navigation";
import Map from "../screens/Map";
import useLocation from "../hooks/useLocation";

import TrackForm from "../components/TrackForm";
import Spacer from "../components/Spacer";

// Prop for type script
import { NavigationStackProp } from "react-navigation-stack";
interface INav {
  navigation: NavigationStackProp<{
    TrackDetail: {}; //Props passed in the nav obj, can be omitted if not used
  }>;
  isFocused: boolean;
}

const TrackCreateScreen = ({ isFocused }: INav) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  const callback = useCallback(
    (location) => addLocation(location, recording),
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView>
      <Text h2>Create a track</Text>
      <Map />
      <Spacer />
      <TrackForm />
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: "Add track",
  tabBarIcon: <PlusIcon name="plus" size={24} color="green" />,
};

export default withNavigationFocus(TrackCreateScreen);

const styles = StyleSheet.create({});

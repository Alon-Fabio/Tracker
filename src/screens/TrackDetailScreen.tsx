import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";

import { NavigationScreenProp } from "react-navigation";

import { ILocation } from "../typeScript/interfaces";

import { Context as TrackContext } from "../context/TrackContext";

interface NAV {
  navigation: NavigationScreenProp<{
    otherId: string;
    otherName: string;
    otherPic: string;
    id: string;
  }>;
}

const TrackDetailScreen = ({ navigation }: NAV) => {
  const _id = navigation.getParam("_id");
  const { state } = useContext(TrackContext);
  const track = state.find((track: ILocation) => track._id === _id);
  return (
    <View>
      <Text style={styles.fontSize}>{track.name}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...track.locations[0].coords, //Initial location
        }}
      >
        <Polyline
          coordinates={track?.locations.map(
            (location: ILocation) => location.coords
          )}
        />
      </MapView>
    </View>
  );
};

export default TrackDetailScreen;

const styles = StyleSheet.create({
  fontSize: {
    fontSize: 48,
  },
  map: { height: 300 },
});

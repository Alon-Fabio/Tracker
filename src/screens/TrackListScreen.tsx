import React, { useContext } from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
// Prop for type script
import { NavigationStackProp } from "react-navigation-stack";

import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../context/TrackContext";

interface INav {
  navigation: NavigationStackProp;
}

const TrackListScreen = ({ navigation }: INav) => {
  const { state, fetchTrack } = useContext(TrackContext);
  return (
    <>
      <NavigationEvents onWillFocus={fetchTrack} />
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("TrackDetail", { _id: item._id });
              }}
            >
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

TrackListScreen.navigationOptions = {
  title: "Tracks",
  headerTitleStyle: {
    textAlign: "center" as "center",
    flex: 1,
  },
};

export default TrackListScreen;

const styles = StyleSheet.create({});

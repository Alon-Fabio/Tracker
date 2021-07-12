import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ListItem } from "react-native-elements";
// Prop for type script
import { StackNavigationProp } from "@react-navigation/stack";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../context/TrackContext";

interface INav {
  navigation: StackNavigationProp<{ TrackDetail: { _id: string } }>;
}

const TrackListScreen = ({ navigation }: INav) => {
  const { state, fetchTrack } = useContext(TrackContext);

  console.log(state);
  return (
    <>
      <NavigationEvents onWillFocus={fetchTrack} />
      <Text style={styles.fontSize}>Track List</Text>
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

export default TrackListScreen;

const styles = StyleSheet.create({
  fontSize: {
    fontSize: 48,
  },
});

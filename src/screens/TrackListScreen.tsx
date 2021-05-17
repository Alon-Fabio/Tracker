import React from "react";
// Prop for type script
import { StackNavigationProp } from "@react-navigation/stack";

import { StyleSheet, Text, Button } from "react-native";

interface INav {
  navigation: StackNavigationProp<{ TrackDetail: undefined }>;
}

const TrackListScreen = ({ navigation }: INav) => {
  return (
    <>
      <Text style={styles.fontSize}>Track List Screen</Text>
      <Button
        title={"Go to Track Detail"}
        onPress={() => navigation.navigate("TrackDetail")}
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

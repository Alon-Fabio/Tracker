import React, { useContext } from "react";
import { Text, Button, Input } from "react-native-elements";
import { StyleSheet } from "react-native";

import { Context as LocationContext } from "../context/LocationContext";

import Spacer from "../components/Spacer";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  console.log(locations);
  return (
    <>
      <Spacer>
        <Input
          placeholder={name || "Enter your track name"}
          onChangeText={changeName}
          value={name}
        />
        {recording ? (
          <Button onPress={stopRecording} title="Start tracking" />
        ) : (
          <Button
            buttonStyle={styles.stop}
            onPress={startRecording}
            title="Stop"
          />
        )}
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  stop: {
    backgroundColor: "red",
  },
});
export default TrackForm;

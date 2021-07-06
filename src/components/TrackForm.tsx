import React, { useContext } from "react";
import { Text, Button, Input } from "react-native-elements";
import { StyleSheet } from "react-native";

import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";
import Spacer from "../components/Spacer";

const TrackForm = () => {
  const [saveTrack] = useSaveTrack();
  const {
    state: { trackName, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  return (
    <>
      <Spacer>
        <Input
          placeholder={trackName || "Enter your track name"}
          onChangeText={changeName}
          value={trackName}
        />
        {!recording ? (
          <Button onPress={startRecording} title="Start tracking" />
        ) : (
          <Button
            buttonStyle={styles.stop}
            onPress={stopRecording}
            title="Stop"
          />
        )}
      </Spacer>
      {!recording && locations.length > 2 ? (
        <Spacer>
          <Button
            title="Save track"
            buttonStyle={styles.save}
            onPress={() => {
              saveTrack();
            }}
          />
        </Spacer>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  stop: {
    backgroundColor: "red",
  },
  save: { backgroundColor: "green" },
});
export default TrackForm;

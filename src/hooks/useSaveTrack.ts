import { useContext } from "react";

import { Context as LocationContext } from "../context/LocationContext";
import { Context as TrackContext } from "../context/TrackContext";
import { navigate } from "../navigationRef";

export default () => {
  const {
    state: { locations, trackName },
    reset,
  } = useContext(LocationContext);
  const { createTrack } = useContext(TrackContext);

  const saveTrack = async () => {
    await createTrack(locations, trackName);
    reset();
    navigate("TrackList");
  };
  return [saveTrack];
};

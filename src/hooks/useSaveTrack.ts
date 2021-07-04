import { useContext } from "react";

import { Context as LocationContext } from "../context/LocationContext";
import { Context as TrackContext } from "../context/TrackContext";

export default () => {
  const {
    state: { locations, trackName },
  } = useContext(LocationContext);
  const { createTrack } = useContext(TrackContext);

  const saveTrack = () => {
    console.log(trackName);
    createTrack(locations, trackName);
  };
  return [saveTrack];
};

import CreateDataContext from "./CreateDataContext";
import { ITrackAction, ITrackState } from "../typeScript/interfaces";

import { ILocationAction } from "../typeScript/interfaces";
const trackReducer = (
  state: string[],
  action: { type: string; payload: string }
): string[] => {
  switch (action.type) {
    default:
      return state;
  }
};

const createTrack =
  (dispatch: React.Dispatch<ITrackAction>) =>
  (locations: Object[], name: string) => {
    console.log("Locations:", locations.length, "Name:", name);
  };

export const { Provider, Context } = CreateDataContext(
  trackReducer,
  { createTrack },
  []
);

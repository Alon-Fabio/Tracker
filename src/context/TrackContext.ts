import CreateDataContext from "./CreateDataContext";
import { ITrackAction, ITrackState } from "../typeScript/interfaces";

import trackerAPI from "../api/tracker";

const trackReducer = (state: ITrackState, action: ITrackAction): string[] => {
  switch (action.type) {
    default:
      return state;
  }
};

const createTrack =
  (dispatch: React.Dispatch<ITrackAction>) =>
  async (locations: Object[], name: string) => {
    await trackerAPI.post("/tracks", { name, locations });
  };

export const { Provider, Context } = CreateDataContext(
  trackReducer,
  { createTrack },
  []
);

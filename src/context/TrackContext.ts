import CreateDataContext from "./CreateDataContext";
import { ITrackAction, ITrackState } from "../typeScript/interfaces";

import trackerAPI from "../api/tracker";
import React from "react";

const trackReducer = (state: ITrackState, action: ITrackAction): string[] => {
  switch (action.type) {
    case "GET_TRACKS":
      return [...action.payload];
    default:
      return state;
  }
};

const fetchTrack = (dispatch: React.Dispatch<ITrackAction>) => async () => {
  const response = await trackerAPI.get("/tracks");
  // console.log("API data: ", response.data);
  dispatch({ type: "GET_TRACKS", payload: response.data });
};

const createTrack =
  (dispatch: React.Dispatch<ITrackAction>) =>
  async (locations: Object[], name: string) => {
    await trackerAPI.post("/tracks", { name, locations });
  };

export const { Provider, Context } = CreateDataContext(
  trackReducer,
  { createTrack, fetchTrack },
  []
);

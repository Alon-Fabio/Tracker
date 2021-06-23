import CreateDataContext from "./CreateDataContext";
import { ILocationAction, ILocationState } from "../typeScript/interfaces";
import React from "react";

const locationReducer = (
  state: ILocationState,
  action: ILocationAction
): ILocationState => {
  switch (action.type) {
    case "ADD_CURRENT_LOCATION":
      return { ...state, currentLocation: action.payload };
    default:
      return state;
  }
};

const startRecording = (dispatch: React.Dispatch<ILocationAction>) => () => {};
const stopRecording = (dispatch: React.Dispatch<ILocationAction>) => () => {};
const addLocation =
  (dispatch: React.Dispatch<ILocationAction>) => (location: {}) => {
    dispatch({ type: "ADD_CURRENT_LOCATION", payload: location });
  };

export const { Context, Provider } = CreateDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  { recording: false, locations: [], currentLocation: {} }
);

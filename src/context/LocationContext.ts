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
    case "START_RECORDING":
      if (typeof action.payload === "boolean") {
        return { ...state, recording: action.payload };
      } else {
        return state;
      }
    case "STOP_RECORDING":
      if (typeof action.payload === "boolean") {
        return { ...state, recording: action.payload };
      } else {
        return state;
      }
    case "ADD_LOCATION":
      if (typeof action.payload === "number") {
        return { ...state, locations: [...state.locations, action.payload] };
      } else {
        return state;
      }
    case "ADD_NAME":
      if (typeof action.payload === "string") {
        return { ...state, trackName: action.payload };
      } else {
        return state;
      }
    default:
      return state;
  }
};

const changeName =
  (dispatch: React.Dispatch<ILocationAction>) => (name: string) => {
    dispatch({ type: "ADD_NAME", payload: name });
  };
const startRecording = (dispatch: React.Dispatch<ILocationAction>) => () => {
  dispatch({ type: "START_RECORDING", payload: true });
};
const stopRecording = (dispatch: React.Dispatch<ILocationAction>) => () => {
  dispatch({ type: "STOP_RECORDING", payload: false });
};
const addLocation =
  (dispatch: React.Dispatch<ILocationAction>) =>
  (location: {}, recording: boolean) => {
    dispatch({ type: "ADD_CURRENT_LOCATION", payload: location });
    if (recording) {
      dispatch({ type: "ADD_LOCATION", payload: location });
    }
  };

export const { Context, Provider } = CreateDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation, changeName },
  { recording: false, locations: [], currentLocation: {}, trackName: "" }
);

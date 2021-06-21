import CreateDataContext from "./CreateDataContext";
import { IAction, ILocationState } from "../typeScript/interfaces";
import React from "react";

const locationReducer = (
  state: ILocationState,
  action: IAction
): ILocationState => {
  switch (action.type) {
    default:
      return state;
  }
};

const startRecording = (dispatch: React.Dispatch<IAction>) => () => {};
const stopRecording = (dispatch: React.Dispatch<IAction>) => () => {};
const addLocation = (dispatch: React.Dispatch<IAction>) => () => {};

export const { Context, Provider } = CreateDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  { recording: false, locations: [], currentLocation: {} }
);

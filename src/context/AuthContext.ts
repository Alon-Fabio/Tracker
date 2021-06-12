import React from "react";
import { navigate } from "../navigationRef";

// If this import fails, try the one beneath it or try to reinstall it with expo.
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { AsyncStorage } from "react-native";

import CreateDataContext from "./CreateDataContext";

//TypeScript interfaces
import { IState, IAction } from "../typeScript/interfaces";

import { somethingWrong } from "../messages/errMessages";

import fetchTracker from "../api/tracker";

const authReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case "add_err":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { token: action.payload, errorMessage: "" };
    default:
      return state;
  }
};

const signin =
  (dispatch: React.Dispatch<any>) =>
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const signinCall = await fetchTracker.post("/signin", {
        email,
        password,
      });
      await AsyncStorage.setItem("token", signinCall.data.token);
      dispatch({ type: "signin", payload: signinCall.data.token });
      navigate("TrackList");
    } catch (error) {
      console.log(error);
      dispatch({ type: "add_err", payload: somethingWrong });
    }
  };
const signup =
  (dispatch: React.Dispatch<IAction>): {} =>
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const signupCall = await fetchTracker.post("/signup", {
        email,
        password,
      });
      await AsyncStorage.setItem("token", signupCall.data.token);
      dispatch({ type: "signin", payload: signupCall.data.token });
      navigate("TrackList");
    } catch (error) {
      console.log(error);
      dispatch({ type: "add_err", payload: somethingWrong });
    }
  };

const signout = (dispatch: React.Dispatch<any>) => {
  return () => {};
};

export const { Provider, Context } = CreateDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: "" }
);

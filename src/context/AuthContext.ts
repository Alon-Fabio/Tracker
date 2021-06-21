import React from "react";
import { navigate } from "../navigationRef";

// If this import fails, try the one beneath it or try to reinstall it with expo.
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { AsyncStorage } from "react-native";

import CreateDataContext from "./CreateDataContext";

//TypeScript interfaces
import { IAuthState, IAction } from "../typeScript/interfaces";

import {
  somethingWrongSignUp,
  somethingWrongSignIn,
  somethingWrong,
} from "../messages/errMessages";

import fetchTracker from "../api/tracker";

const authReducer = (state: IAuthState, action: IAction): IAuthState => {
  switch (action.type) {
    case "ADD_ERROR":
      return { ...state, errorMessage: action.payload };
    case "AUTHENTICATION":
      return { token: action.payload, errorMessage: "" };
    case "SIGN_OUT":
      return { ...state, token: action.payload, errorMessage: "" };
    case "CLEAR_ERROR_MESSAGE":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSignIn = (dispatch: React.Dispatch<IAction>) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "AUTHENTICATION", payload: token });
    navigate("TrackList");
  } else {
    navigate("logFlow");
  }
};
const clearErrMessage = (dispatch: React.Dispatch<any>) => () => {
  dispatch({ type: "CLEAR_ERROR_MESSAGE", payload: "" });
};

const signin =
  (dispatch: React.Dispatch<IAction>) =>
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const signinCall = await fetchTracker.post("/signin", {
        email,
        password,
      });
      await AsyncStorage.setItem("token", signinCall.data.token);
      dispatch({ type: "AUTHENTICATION", payload: signinCall.data.token });
      navigate("TrackList");
    } catch (error) {
      console.log(error);
      dispatch({ type: "ADD_ERROR", payload: somethingWrongSignIn });
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
      dispatch({ type: "AUTHENTICATION", payload: signupCall.data.token });
      navigate("TrackList");
    } catch (error) {
      console.log(error);
      dispatch({ type: "ADD_ERROR", payload: somethingWrongSignUp });
    }
  };

const signout = (dispatch: React.Dispatch<any>) => async () => {
  try {
    await AsyncStorage.removeItem("token");
    dispatch({ type: "SIGN_OUT", payload: null });
    navigate("logFlow");
  } catch (error) {
    dispatch({ type: "ADD_ERROR", payload: somethingWrong });
  }
};

export const { Provider, Context } = CreateDataContext(
  authReducer,
  { signin, signout, signup, clearErrMessage, tryLocalSignIn },
  { token: null, errorMessage: "" }
);

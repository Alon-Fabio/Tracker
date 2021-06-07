import React from "react";
import AsyncStorage from "@react-native-community/async-storage";
import CreateDataContext from "./CreateDataContext";

//TypeScript interfaces
import { IState, IAction } from "../typeScript/interfaces";

import { somethingWrong } from "../messages/errMessages";

import fetchTracker from "../api/tracker";

const authReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case "add_err":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { token: action.payload, errorMessage: "" };
    default:
      return state;
  }
};

const signin = (dispatch: React.Dispatch<any>) => {
  return () => {};
};
const signup =
  (dispatch: React.Dispatch<any>) =>
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const signupCall = await fetchTracker.post("/signup", {
        email,
        password,
      });
      await AsyncStorage.setItem("token", signupCall.data.token);
      dispatch({ type: "signup", payload: signupCall.data.token });
    } catch (error) {
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

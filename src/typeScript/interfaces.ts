export interface IAuthState {
  token: string | null;
  errorMessage: string;
}
export interface ILocationState {
  recording: boolean;
  locations: Array<Number>;
  currentLocation: {};
}

export interface IAuthAction {
  type: "SIGN_OUT" | "CLEAR_ERROR_MESSAGE" | "AUTHENTICATION" | "ADD_ERROR";
  payload: string;
}
export interface ILocationAction {
  type: string;
  payload: {} | [] | boolean;
}

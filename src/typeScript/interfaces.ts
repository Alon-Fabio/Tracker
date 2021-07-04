export interface IAuthState {
  token: string | null;
  errorMessage: string;
}
export interface ILocationState {
  recording: boolean;
  locations: Array<Object>;
  currentLocation: {};
  trackName: string;
}

export interface IAuthAction {
  type: "SIGN_OUT" | "CLEAR_ERROR_MESSAGE" | "AUTHENTICATION" | "ADD_ERROR";
  payload: string;
}
export interface ILocationAction {
  type:
    | "ADD_LOCATION"
    | "ADD_CURRENT_LOCATION"
    | "STOP_RECORDING"
    | "START_RECORDING"
    | "ADD_NAME";
  payload: {} | [] | boolean | string;
}
export interface ITrackAction {
  type: string;
  payload: string;
}
export type ITrackState = string[];

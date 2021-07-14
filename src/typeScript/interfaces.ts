export interface IAuthState {
  token: string | null;
  errorMessage: string | null;
}
export interface ILocationState {
  recording: boolean;
  locations: Array<Object>;
  currentLocation: {};
  trackName: string;
}

export interface IAuthAction {
  type: "SIGN_OUT" | "CLEAR_ERROR_MESSAGE" | "AUTHENTICATION" | "ADD_ERROR";
  payload: string | null;
}
export interface ILocationAction {
  type:
    | "ADD_LOCATION"
    | "ADD_CURRENT_LOCATION"
    | "STOP_RECORDING"
    | "START_RECORDING"
    | "ADD_NAME"
    | "RESET";
  payload: {} | [] | boolean | string;
}
export interface ITrackAction {
  type: string;
  payload: ITrackState;
}

interface IUsersLocations {
  __v: Number;
  _id: String;
  locations: Array<ILocation>;
  home: String;
  userId: String;
}
export type ITrackState = Array<IUsersLocations>;

export interface ILocation {
  _id: Number;
  coords: {
    accuracy: Number;
    altitude: Number;
    heading: Number;
    latitude: Number;
    longitude: Number;
    speed: Number;
  };
  timestamp: Number;
}

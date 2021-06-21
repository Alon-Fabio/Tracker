export interface IAuthState {
  token: string | null;
  errorMessage: string;
}
export interface ILocationState {
  recording: boolean;
  locations: Array<Number>;
  currentLocation: {};
}

export interface IAction {
  type: string;
  payload: string;
}

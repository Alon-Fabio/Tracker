export interface IState {
  token: string | null;
  errorMessage: string;
}
export interface IAction {
  type: string;
  payload: string;
}

import React, { useReducer } from "react";

//TypeScript interfaces
import {
  IAuthState,
  IAuthAction,
  ILocationAction,
  ILocationState,
} from "../typeScript/interfaces";

interface IBundObj {
  [key: string]: Function;
}
type IState = IAuthState | ILocationState;
type reducer =
  | React.Reducer<IAuthState, IAuthAction>
  | React.Reducer<ILocationState, ILocationAction>;
interface IContext {
  [key: string]: any;
  state: any; //If i use IState it will not read the Location state for some reason
}

export default (reducer: reducer, actions: IBundObj, initialState: IState) => {
  const Context = React.createContext<IContext>({
    state: initialState,
  });

  const Provider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // BoundActions === {list of actions from the Context file }
    const boundActions: IBundObj = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};

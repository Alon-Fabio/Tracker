import React, { useReducer } from "react";

//TypeScript interfaces
import { IState, IAction } from "../typeScript/interfaces";

interface IBundObj {
  [key: string]: Function;
}

interface IContext {
  state: IState;
  [key: string]: any;
}

export default (
  reducer: React.Reducer<IState, IAction>,
  actions: IBundObj,
  initialState: IState
) => {
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

import React, { useReducer } from "react";

interface IBundObj {
  [key: string]: Function;
}

export default (
  reducer: React.ReducerWithoutAction<any>,
  actions: IBundObj,
  initialState: {}
) => {
  const Context = React.createContext(initialState);

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

import React, { createContext, useReducer, useContext } from "react";
import { object, func } from "prop-types";

const initState: any[] = [];

const Context = createContext(initState);

export function AppStateProvider({ reducer, initialState = {}, children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

AppStateProvider.propTypes = {
  reducer: func,
  initialState: object,
};

export function useAppState() {
  return useContext(Context);
}

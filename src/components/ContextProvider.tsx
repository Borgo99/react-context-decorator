import React, { useCallback, useMemo, useState } from "react";
import { Context, initialState, MyContext, State } from "../app-context";

interface ContextProviderProps {
  children?: React.ReactNode;
}

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [state, setState]: [
    state: State,
    setState: React.Dispatch<React.SetStateAction<State>>
  ] = useState(initialState);
  const updateState = useCallback(
    (newField: object) => {
      setState((oldState) => ({ ...oldState, ...newField }));
    },
    [state]
  );
  const context: Context = useMemo(() => {
    return { state, updateState };
  }, [state]);

  return <MyContext.Provider value={context}>{children}</MyContext.Provider>;
};

export default ContextProvider;

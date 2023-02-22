import React, { useContext, useMemo } from "react";

interface State {
  A: number[];
  B: number;
  C: number;
  D: number;
}
const initialState: State = {
  A: [0],
  B: 0,
  C: 0,
  D: 0,
};
interface Context {
  state: State;
  updateState: (newField: object) => void;
}

//@ts-ignore
const MyContext = React.createContext<Context>({ state: initialState });

const getFieldFromContext = (field: string, context: any): any => {
  return context[field] || context.state[field];
};

const contextDecorator = (
  contextProvider: React.Context<Context>,
  stateFields: string[] | Record<string, string>,
  functionalComponent: React.FC
) => {
  return function (..._args: any) {
    // extract values from context state
    const values: Record<string, any> = {};
    if (Array.isArray(stateFields)) {
      stateFields.forEach((field: string) => {
        values[field] = getFieldFromContext(field, useContext(contextProvider));
      });
    } else if (typeof stateFields === "object") {
      Object.entries(stateFields).forEach(([propName, stateField]) => {
        values[propName] = getFieldFromContext(
          stateField,
          useContext(contextProvider)
        );
      });
    } else {
      throw new Error(
        "stateField must be an array of field present in the context state or an object of the type {propsName: contextStateFieldName}"
      );
    }
    // console.log(Object.values(values));
    // re-render components if values have changed
    const content = useMemo(() => {
      if (arguments[0].bgColor)
        console.log("Function re-rendered", arguments[0].bgColor);
      // update functional component arguments values
      arguments[0] = { ...arguments[0], ...values };
      // @ts-ignore
      return functionalComponent.apply(this, arguments);
    }, Object.values(values));
    return <>{content}</>;
  };
};

export { initialState, MyContext, contextDecorator };
export type { State, Context };

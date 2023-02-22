import React from "react";
import { contextDecorator, MyContext, State } from "../app-context";
import styles from "./Background.module.css";

interface BackgroundProps {
  children?: any;
  state?: State;
  updateState?: any;
}

const Background = ({ children, state, updateState }: BackgroundProps) => {
  if (!state) return <></>;
  console.log("Background rerendered");

  return (
    <div className={styles.background}>
      <div className={styles.buttonsDiv}>
        <p
          className={styles.button}
          onClick={() => updateState({ A: [state.A[0] + 1] })}
        >
          A
        </p>
        <p
          className={styles.button}
          onClick={() => updateState({ B: state.B + 1 })}
        >
          B
        </p>
        <p
          className={styles.button}
          onClick={() => updateState({ C: state.C + 1 })}
        >
          C
        </p>
        <p
          className={styles.button}
          onClick={() => updateState({ D: state.D + 1 })}
        >
          D
        </p>
      </div>
      {children}
    </div>
  );
};
export default contextDecorator(
  MyContext,
  ["state", "updateState"],
  Background
);

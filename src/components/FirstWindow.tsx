import { useMemo } from "react";
import TestComponent from "./TestComponent";

const FirstWindow = () => {
  console.log("FW RERENDERED");
  const content = useMemo(() => {
    return (
      <TestComponent bgColor={"green"} value={"A"}>
        <TestComponent bgColor={"yellow"} value={"B"} />
      </TestComponent>
    );
  }, []);

  return <div>{content}</div>;
};

export default FirstWindow;

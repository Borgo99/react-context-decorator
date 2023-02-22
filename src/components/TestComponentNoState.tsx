import { contextDecorator, MyContext } from "../app-context";

interface TestComponentNoStateProps {
  children?: React.ReactNode;
  bgColor?: string;
  currValue?: string;
}

const TestComponentNoState = ({
  children,
  bgColor,
  currValue,
}: TestComponentNoStateProps) => {
  return (
    <div style={{ backgroundColor: bgColor }}>
      <h1>Value: {currValue}</h1>
      <div>{children}</div>
    </div>
  );
};

export default contextDecorator(
  MyContext,
  { currValue: "D" },
  TestComponentNoState
);

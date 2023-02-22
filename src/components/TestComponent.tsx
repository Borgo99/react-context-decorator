import { contextDecorator, MyContext } from "../app-context";

interface TestComponentProps {
  children?: React.ReactNode;
  bgColor?: string;
  currValue?: string;
}

const TestComponent = ({
  children,
  bgColor,
  currValue,
}: TestComponentProps) => {
  return (
    <div style={{ backgroundColor: bgColor }}>
      <h1>Value: {currValue}</h1>
      <div>{children}</div>
    </div>
  );
};

export default contextDecorator(MyContext, { currValue: "A" }, TestComponent);

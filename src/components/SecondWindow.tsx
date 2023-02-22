import TestComponent from "./TestComponent";
import TestComponentNoState from "./TestComponentNoState";

const SecondWindow = () => {
  return (
    <div>
      <TestComponent bgColor={"orange"} value={"C"}>
        <TestComponentNoState bgColor={"purple"} value={"D"} />
      </TestComponent>
    </div>
  );
};

export default SecondWindow;

// import "./App.css";
import Background from "./components/Background";
import FirstWindow from "./components/FirstWindow";
import SecondWindow from "./components/SecondWindow";

function App() {
  return (
    <Background>
      <FirstWindow />
      <SecondWindow />
    </Background>
  );
}

export default App;

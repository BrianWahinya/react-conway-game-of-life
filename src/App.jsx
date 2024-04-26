import icon_conway from "./assets/icon_conway.svg";
import "./App.css";
import { Main } from "./layout";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <>
      Currently in development:{" "}
      <a
        href="https://github.com/BrianWahinya/react-conway-game-of-life"
        rel="noopener noreferrer"
      >
        Github-Link
      </a>
      <AppProvider>
        <Main />
      </AppProvider>
    </>
  );
}

export default App;

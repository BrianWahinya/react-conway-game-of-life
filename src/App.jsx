import icon_conway from "./assets/icon_conway.svg";
import "./App.css";
import { Main } from "./layout";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <>
      <AppProvider>
        <Main />
      </AppProvider>
    </>
  );
}

export default App;

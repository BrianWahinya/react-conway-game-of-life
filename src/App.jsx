import { Main } from "./layout";
import { AppProvider } from "./context/AppContext";
import { Footer, Nav } from "./components";

function App() {
  return (
    <>
      <Nav />
      <AppProvider>
        <Main />
      </AppProvider>
      <Footer />
    </>
  );
}

export default App;

import { createContext, useContext, useReducer } from "react";
import { deepCopy } from "../helpers/utils";

const AppContext = createContext();

const defaultState = {
  pattern: "random",
  speed: 800,
  cellSize: 30,
  mode: "paused",
  playing: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "changePattern":
      return { ...deepCopy(state), pattern: action.payload, mode: "restart" };
    case "adjustSpeed":
      return { ...deepCopy(state), speed: action.payload };
    case "changeCellSize":
      return { ...deepCopy(state), cellSize: action.payload, mode: "restart" };
    case "changeMode":
      return { ...deepCopy(state), mode: action.payload };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const adjustSpeed = (speed) => {
    dispatch({ type: "adjustSpeed", payload: parseInt(speed) });
  };

  const changeCellSize = (size) => {
    dispatch({ type: "changeCellSize", payload: parseInt(size) });
  };

  const changeMode = (status) => {
    dispatch({ type: "changeMode", payload: status });
  };

  const changePattern = (pattern) => {
    dispatch({ type: "changePattern", payload: pattern });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        adjustSpeed,
        changeCellSize,
        changePattern,
        changeMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};

export { AppProvider, useAppContext };

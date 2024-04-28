import { createContext, useContext, useReducer } from "react";
import { deepCopy } from "../helpers/utils";

const AppContext = createContext();

const defaultState = {
  pattern: "random",
  speed: 800,
  cellSize: 30,
  playing: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "changePattern":
      return { ...deepCopy(state), pattern: action.payload };
    case "adjustSpeed":
      return { ...deepCopy(state), speed: action.payload };
    case "changeCellSize":
      return { ...deepCopy(state), cellSize: action.payload };
    case "playMode":
      return { ...deepCopy(state), playing: action.payload };
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

  const playMode = (status) => {
    dispatch({ type: "playMode", payload: status });
  };

  const changePattern = (pattern) => {
    dispatch({ type: "changePattern", payload: pattern });
  };

  return (
    <AppContext.Provider
      value={{ ...state, adjustSpeed, changeCellSize, playMode, changePattern }}
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

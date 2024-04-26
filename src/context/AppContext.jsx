import { createContext, useContext, useReducer } from "react";
import { deepCopy } from "../helpers/utils";

const AppContext = createContext();

const defaultState = {
  cellSize: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "changeCellSize":
      return { ...deepCopy(state), cellSize: action.payload };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const changeCellSize = (size) => {
    dispatch({ type: "changeCellSize", payload: parseInt(size) });
  };

  return (
    <AppContext.Provider value={{ ...state, changeCellSize }}>
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

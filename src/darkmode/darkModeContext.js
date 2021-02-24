// Imports from react
import React, { createContext } from "react";

// Imports from other files
import useLocalStorage from "./useLocalStorage";

export const DarkModeContext = createContext();

export const DarkModeProvider = (props) => {
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode", "");

  return (
    <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
      {props.children}
    </DarkModeContext.Provider>
  );
};
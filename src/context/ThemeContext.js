import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export const useTheme = () => {
  return useContext(ThemeContext);
};
//! display name
ThemeContext.displayName = "ThemeContext";

export const ThemeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

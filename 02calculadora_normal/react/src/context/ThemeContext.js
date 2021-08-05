import { createContext, useState } from "react";

const ThemeContext = createContext();

const initialTheme = "1";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (value) => {
    setTheme(value);
    localStorage.setItem("theme", value);
  };

  const data = { theme, handleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;

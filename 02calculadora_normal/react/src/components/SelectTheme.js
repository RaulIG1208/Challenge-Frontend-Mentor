import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import SelectThemeLabel from "./SelectThemeLabel";

const SelectTheme = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <nav>
      <SelectThemeLabel />
      <input
        type="range"
        name="theme"
        id="theme"
        min="1"
        max="3"
        step="1"
        value={theme}
        className={
          theme === "1"
            ? undefined
            : theme === "2"
            ? "theme-light "
            : "theme-dark"
        }
        onChange={(e) => handleTheme(e.target.value)}
      />
    </nav>
  );
};

export default SelectTheme;

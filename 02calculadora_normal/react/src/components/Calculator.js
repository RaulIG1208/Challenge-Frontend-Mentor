import React, { useContext, useEffect } from "react";
import { OptionProvider } from "../context/OptionContext";
import ThemeContext from "../context/ThemeContext";
import FormCalculator from "./FormCalculator";
import HeaderCalculator from "./HeaderCalculator";

const Calculator = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  useEffect(() => {
    if (
      localStorage.getItem("theme") === null ||
      localStorage.getItem("theme") === "1"
    ) {
      handleTheme("1");
    } else {
      localStorage.getItem("theme") === "2"
        ? handleTheme("2")
        : handleTheme("3");
    }
  }, [handleTheme]);
  return (
    <div
      className={`${
        theme === "1"
          ? undefined
          : theme === "2"
          ? "theme-light "
          : "theme-dark"
      } body`}
    >
      <main>
        <HeaderCalculator />
        <OptionProvider>
          <FormCalculator />
        </OptionProvider>
      </main>
    </div>
  );
};

export default Calculator;

import { useContext } from "react";
import OptionContext from "../context/OptionContext";
import ThemeContext from "../context/ThemeContext";

const FormDisplay = () => {
  const { theme } = useContext(ThemeContext);
  const { state } = useContext(OptionContext);
  return (
    <section
      className={`${
        theme === "1"
          ? undefined
          : theme === "2"
          ? "theme-light "
          : "theme-dark"
      } display`}
    >
      <input
        type="text"
        name="display"
        id="display"
        value={state.display.join("")}
        readOnly
        placeholder="0"
        className={
          theme === "1"
            ? undefined
            : theme === "2"
            ? "theme-light "
            : "theme-dark"
        }
      />
    </section>
  );
};

export default FormDisplay;

import { useContext } from "react";
import OptionContext from "../context/OptionContext";
import ThemeContext from "../context/ThemeContext";
import FormOptionButton from "./FormOptionButton";

const FormOptions = () => {
  const { theme } = useContext(ThemeContext);
  const { handleOption, options } = useContext(OptionContext);
  return (
    <section
      className={`${
        theme === "1"
          ? undefined
          : theme === "2"
          ? "theme-light "
          : "theme-dark"
      } options`}
    >
      {options.map((el) => (
        <FormOptionButton key={el} value={el} handleOption={handleOption} />
      ))}
    </section>
  );
};

export default FormOptions;

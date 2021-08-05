import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const labels = [
  { for: "theme", value: 1 },
  { for: "theme", value: 2 },
  { for: "theme", value: 3 },
];

const SelectThemeLabel = () => {
  const { handleTheme } = useContext(ThemeContext);

  return (
    <div className="select-theme">
      {labels.map((label, index) => (
        <label
          key={index}
          htmlFor={label.for}
          onClick={(e) => handleTheme(e.target.textContent)}
        >{`${label.value}`}</label>
      ))}
    </div>
  );
};

export default SelectThemeLabel;

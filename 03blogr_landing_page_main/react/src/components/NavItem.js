import { useContext } from "react";
import HeaderContext from "../context/HeaderContext";

const NavItem = ({ title, dropdawnItems }) => {
  const { dropdownToggle, handleDropdown } = useContext(HeaderContext);
  return (
    <li className="dropdown">
      <a
        className={`${
          dropdownToggle.enable && dropdownToggle.title === title
            ? "dropdown-title is-active"
            : "dropdown-title"
        }`}
        href="/"
        onClick={(e) => {
          e.preventDefault();
          handleDropdown(e);
        }}
      >
        {title}
      </a>
      {dropdownToggle.enable && dropdownToggle.title === title && (
        <ul className="dropdown-list">
          {dropdawnItems.map((li, index) => (
            <li key={index}>
              <a href="/">{li}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
export default NavItem;

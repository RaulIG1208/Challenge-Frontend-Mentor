import { createContext, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

const HeaderContext = createContext();

const HeaderProvider = ({ children }) => {
  const responsiveAdd = useMediaQuery("(min-width: 975px)");
  const [navbarActive, setNavbarActive] = useState(false);
  const [dropdownToggle, setDropdownToggle] = useState({
    enable: false,
    title: "",
  });
  const handleNavbar = () =>
    navbarActive ? setNavbarActive(false) : setNavbarActive(true);

  const handleDropdown = (e) => {
    dropdownToggle.enable && e.target.textContent === dropdownToggle.title
      ? setDropdownToggle({
          ...dropdownToggle,
          enable: false,
          title: e.target.textContent,
        })
      : setDropdownToggle({
          ...dropdownToggle,
          enable: true,
          title: e.target.textContent,
        });
  };

  const data = {
    responsiveAdd,
    navbarActive,
    dropdownToggle,
    handleNavbar,
    handleDropdown,
  };
  return (
    <HeaderContext.Provider value={data}>{children}</HeaderContext.Provider>
  );
};

export { HeaderProvider };
export default HeaderContext;

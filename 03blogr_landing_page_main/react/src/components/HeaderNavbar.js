import { useContext } from "react";
import HeaderContext from "../context/HeaderContext";
import Logo from "./Logo";
import NavbarButton from "./NavbarButton";
import NavbarCollapse from "./NavbarCollapse";

const HeaderNavbar = () => {
  const { responsiveAdd, navbarActive, handleNavbar } =
    useContext(HeaderContext);
  return (
    <nav className="navbar">
      <Logo />
      {!responsiveAdd && (
        <NavbarButton handleNavbar={handleNavbar} navbarActive={navbarActive} />
      )}
      {(responsiveAdd || navbarActive) && <NavbarCollapse />}
    </nav>
  );
};

export default HeaderNavbar;

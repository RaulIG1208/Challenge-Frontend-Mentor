import hamburguer from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close-menu.svg";

const NavbarButton = ({ navbarActive, handleNavbar }) => {
  return (
    <button
      style={{
        width: "2.5rem",
        height: "2.5rem",
        border: "none",
        borderRadius: "initial",
        backgroundColor: "transparent",
      }}
    >
      <img
        src={navbarActive ? close : hamburguer}
        alt="Navbar Toggler"
        onClick={handleNavbar}
      />
    </button>
  );
};

export default NavbarButton;

import "../styles/header.scss";
import HeaderInfo from "./HeaderInfo";
import HeaderNavbar from "./HeaderNavbar";

const Header = () => {
  return (
    <header className="body-header">
      <HeaderNavbar />
      <HeaderInfo />
    </header>
  );
};
export default Header;

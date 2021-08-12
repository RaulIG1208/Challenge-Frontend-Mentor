import "../styles/footer.scss";
import Logo from "./Logo";
import NavbarNav from "./NavbarNav";

const Footer = () => {
  return (
    <footer>
      <nav>
        <Logo />
        <NavbarNav header={false} />
      </nav>
    </footer>
  );
};

export default Footer;

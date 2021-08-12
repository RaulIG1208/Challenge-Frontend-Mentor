import NavbarNav from "./NavbarNav";
import NavbarUser from "./NavbarUser";

const NavbarCollapse = () => {
  return (
    <div className="navbar-collapse">
      <NavbarNav />
      <NavbarUser header={true} />
    </div>
  );
};

export default NavbarCollapse;

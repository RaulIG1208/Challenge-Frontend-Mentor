import FooterNavbar from "./FooterNavbar";
import NavItem from "./NavItem";

const dropdawn = [
  {
    title: "Product",
    dropdawnItem: [
      "Overview",
      "Pricing",
      "Marketplace",
      "Feacture",
      "Integrations",
    ],
  },
  { title: "Company", dropdawnItem: ["About", "Team", "Blog", "Careers"] },
  { title: "Connect", dropdawnItem: ["Contact", "Newsletter", "LinkedIn"] },
];

const NavbarNav = ({ header }) => {
  return (
    <ul>
      {dropdawn.map((el, index) =>
        header ? (
          <NavItem
            key={index}
            title={el.title}
            dropdawnItems={el.dropdawnItem}
          />
        ) : (
          <FooterNavbar
            key={index}
            title={el.title}
            dropdawnItems={el.dropdawnItem}
          />
        )
      )}
    </ul>
  );
};

export default NavbarNav;

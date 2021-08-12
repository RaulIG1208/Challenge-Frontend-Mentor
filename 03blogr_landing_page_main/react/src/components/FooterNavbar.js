const FooterNavbar = ({ title, dropdawnItems }) => {
  return (
    <li>
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        {title}
      </a>
      <ul>
        {dropdawnItems.map((li, index) => (
          <li key={index}>
            <a href="/">{li}</a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default FooterNavbar;

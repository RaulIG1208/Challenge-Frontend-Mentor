const d = document;

const navbarToggler = (button, navbar, hamburgerBox) => {
  const $navbarToggleBtn = d.querySelector(button),
    $navbar = d.querySelector(navbar),
    $hamburgerBox = d.querySelector(hamburgerBox);

  d.addEventListener("click", (e) => {
    if (!(e.target === $navbarToggleBtn || e.target.matches(`${button} *`)))
      return;
    $navbar.classList.toggle("is-active");
    $hamburgerBox.classList.toggle("is-active");
  });
};

export default navbarToggler;

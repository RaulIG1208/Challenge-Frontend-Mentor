const d = document;

const dropdawnMenu = (dropdawnMenu) => {
  const $dropdawnMenus = Array.from(d.querySelectorAll(dropdawnMenu));

  d.addEventListener("click", (e) => {
    if (
      !(e.target.matches(dropdawnMenu) || e.target.matches(`${dropdawnMenu}>a`))
    )
      return;
    $dropdawnMenus.map((el) =>
      e.target.parentElement === el
        ? el.classList.toggle("is-active")
        : el.classList.remove("is-active")
    );
  });
};

export default dropdawnMenu;

const d = document;

const Theme = () => {
  const $labels = Array.from(d.querySelectorAll(".select-theme label")),
    $range = d.querySelector(".theme [type='range']");

  const setValueRange = (value) => {
    $range.value = value;
    console.log($range.value);
    if (value === "1") {
      initialTheme();
    } else {
      value === "2" ? setThemeLight() : setThemeDark();
    }
  };

  const initialTheme = () => {
    localStorage.setItem("theme", "1");
    const $elements = d.querySelectorAll("[data-theme]");
    $elements.forEach((el) => {
      el.classList.remove("theme-dark", "theme-light");
    });
  };

  const setThemeLight = () => {
    localStorage.setItem("theme", "2");
    const $elements = d.querySelectorAll("[data-theme]");
    $elements.forEach((el) => {
      el.classList.remove("theme-dark");
      el.classList.add("theme-light");
    });
  };

  const setThemeDark = () => {
    localStorage.setItem("theme", "3");
    const $elements = d.querySelectorAll("[data-theme]");
    $elements.forEach((el) => {
      el.classList.remove("theme-light");
      el.classList.add("theme-dark");
    });
  };

  d.addEventListener("click", (e) => {
    if ($labels.includes(e.target)) {
      const label = $labels.find((el) => e.target === el);
      setValueRange(label.dataset.value);
    }
  });

  d.addEventListener("change", (e) => {
    if (!e.target === $range) return;
    setValueRange(e.target.value);
  });

  if (
    localStorage.getItem("theme") === null ||
    localStorage.getItem("theme") === "1"
  ) {
    setValueRange("1");
  } else {
    localStorage.getItem("theme") === "2"
      ? setValueRange("2")
      : setValueRange("3");
  }
};

export default Theme;

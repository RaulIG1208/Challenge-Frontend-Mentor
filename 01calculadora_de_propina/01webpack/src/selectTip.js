const d = document;

let tip = null;

export function selectTip(e) {
  const $buttons = Array.from(
    d.querySelectorAll(".select-porcent input[type='button']")
  );
  const $submit = d.querySelector(".select-porcent input[type='submit']");

  if ($buttons.includes(e.target)) {
    tip = e.target.value.slice(0, -1);
    $buttons.forEach((button) =>
      button === e.target
        ? button.classList.add("select-is-active")
        : button.classList.remove("select-is-active")
    );
  } else if (e.target === $submit && tip) {
  } else {
    tip = null;
    $buttons.forEach((button) => button.classList.remove("select-is-active"));
  }
  return tip;
}

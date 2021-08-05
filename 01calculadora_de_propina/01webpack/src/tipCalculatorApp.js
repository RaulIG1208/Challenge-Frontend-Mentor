import { result } from "./result";
import { selectTip } from "./selectTip";

const d = document;

export default function tipCalculatorApp() {
  const $form = d.querySelector(".form-calculator"),
    $inputs = d.querySelectorAll(".form-calculator input[required]");
  let tip;
  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.classList.add(input.name);
    $span.textContent = input.title;
    $span.classList.add("number-err", "none");
    input.insertAdjacentElement("beforebegin", $span);
    console.log($span);
  });

  d.addEventListener("click", (e) => {
    tip = parseInt(selectTip(e));
  });

  d.addEventListener("reset", (e) => {
    console.log(e);
    d.querySelector(".reset").setAttribute("disabled", "true");
  });

  d.addEventListener("submit", (e) => {
    e.preventDefault();

    if ($inputs[0].type === "number" && $inputs[1].type === "number") {
      let patternBill = /^(\d{1,10})(\.\d{1,10})?$/;
      let patternPeople = /^(\d{1,10})$/;
      let amount = 0,
        people = 0;
      if (
        !patternBill.exec($inputs[0].value) ||
        !patternPeople.exec($inputs[1].value)
      ) {
        if (!patternBill.exec($inputs[0].value)) {
          d.querySelector("." + $inputs[0].name).classList.add("is-active");
          d.querySelector("." + $inputs[1].name).classList.remove("is-active");
          console.log("numero");
          return;
        } else {
          d.querySelector("." + $inputs[1].name).classList.add("is-active");
          d.querySelector("." + $inputs[0].name).classList.remove("is-active");
        }
      } else if (tip) {
        amount = parseFloat($inputs[0].value);
        people = parseInt($inputs[1].value);

        result(amount, people, tip);
      }
    }
  });
}

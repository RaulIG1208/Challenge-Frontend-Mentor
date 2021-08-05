import style from "./style.css";
import dollar from "./assets/icon-dollar.svg";
import people from "./assets/icon-person.svg";
import tipCalculatorApp from "./tipCalculatorApp";

const d = document,
  $inputAmount = d.getElementById("amount"),
  $inputPeople = d.getElementById("people");

$inputAmount.style.backgroundImage = `url(${dollar})`;
$inputPeople.style.backgroundImage = `url(${people})`;

d.addEventListener("DOMContentLoaded", () => {
  tipCalculatorApp();
});

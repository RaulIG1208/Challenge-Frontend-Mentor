const d = document;

export function result(amount, people, tip) {
  console.log("result");
  const $tipPeople = d.getElementById("tip-people"),
    $totalPeople = d.getElementById("total-people");

  $tipPeople.value = `$${Math.round((amount * tip) / people) / 100}`;
  $totalPeople.value = `$${
    Math.round(((amount * (1 + tip / 100)) / people) * 100) / 100
  }`;

  d.querySelector("input[type='reset']").removeAttribute("disabled");
  console.log(amount, people, tip);
}

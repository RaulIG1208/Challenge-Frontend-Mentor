import { TYPES } from "./calculatorActions";
import { calculatorInitialState, calculatorReducer } from "./calculatorReducer";
import useReducerCalculator from "./useReducerCalculator";

const d = document;

export default function Calculator() {
  const [dispatch] = useReducerCalculator(
    calculatorReducer,
    calculatorInitialState
  );

  const $display = d.querySelector(".display [type='text']");

  let state;

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".options [type='button']")) return;
    const numRegex = /^(\d{1,10})$/;
    if (numRegex.test(e.target.value)) {
      state = dispatch({
        type: TYPES.INSERTANDO_VALOR,
        payload: e.target.value,
      });
    } else if (e.target.value === ".") {
      state = dispatch({ type: TYPES.COLOCANDDO_PUNTO });
    } else if (e.target.value === "DEL") {
      state = dispatch({ type: TYPES.DELET_NUMBER });
    } else if (e.target.value === "RESET") {
      state = dispatch({ type: TYPES.RESET });
    } else if (e.target.value === "=") {
      state = dispatch({ type: TYPES.EQUAL });
    } else {
      state = dispatch({ type: TYPES.OPERATION, payload: e.target.value });
    }
    console.log(state);
    $display.value = state.display.join("");
  });
}

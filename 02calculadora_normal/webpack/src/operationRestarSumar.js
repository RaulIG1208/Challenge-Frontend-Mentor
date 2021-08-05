import reducerOperation from "./reducerOperation";

const d = document;

export default function operationRestarSumar(state, action) {
  const { display, accumulator, beforeOperation, result, operation } = state;

  console.log("Restando", display);
  if (!result && (display.length === 0 || operation)) {
    console.log("Actualizo signo");
    return {
      ...state,
      accumulator: accumulator.length === 0 ? ["0"] : [accumulator.join("")],
      operation: true,
      beforeOperation: action,
    };
  } else if (
    !operation &&
    ((display.length === 0 && result) || display.length > 0)
  ) {
    console.log("primera vez");
    return {
      ...state,
      display: result
        ? [...display]
        : [
            reducerOperation(
              [...accumulator, display.join("")],
              beforeOperation
            ),
          ],
      accumulator: result
        ? [...accumulator]
        : accumulator.length === 0
        ? [...accumulator, display.join("")]
        : [
            reducerOperation(
              [...accumulator, display.join("")],
              beforeOperation
            ),
          ],
      operation: true,
      beforeOperation: action,
    };
  }
}

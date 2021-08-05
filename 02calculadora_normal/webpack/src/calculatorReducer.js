import { TYPES } from "./calculatorActions";
import operationRestarSumar from "./operationRestarSumar";
import reducerOperation from "./reducerOperation";

export const calculatorInitialState = {
  display: [],
  accumulator: [],
  beforeOperation: "",
  result: false,
  factorResult: "",
  operation: false,
};

export function calculatorReducer(state, action) {
  switch (action.type) {
    case TYPES.INSERTANDO_VALOR: {
      //console.log(state.display);
      return state.result || state.operation
        ? {
            ...state,
            display: [action.payload],
            accumulator: state.operation ? [...state.accumulator] : [],
            result: false,
            operation: false,
          }
        : {
            ...state,
            display: [...state.display, action.payload],
          };
    }
    case TYPES.COLOCANDDO_PUNTO: {
      console.log("colocando punto");
      return state.result || state.operation
        ? {
            ...state,
            display: ["."],
            result: false,
            operation: false,
          }
        : {
            ...state,
            display: state.display.includes(".")
              ? [...state.display]
              : [...state.display, "."],
          };
    }
    case TYPES.DELET_NUMBER: {
      console.log("eliminando numero");
      return state.result
        ? calculatorInitialState
        : state.display.length > 1
        ? {
            ...state,
            display: state.display.slice(0, -1),
          }
        : { ...state, display: [] };
    }
    case TYPES.RESET: {
      console.log("reseteando");
      return calculatorInitialState;
    }
    case TYPES.OPERATION: {
      console.log("operacion");
      return operationRestarSumar(state, action.payload);
    }
    case TYPES.EQUAL: {
      console.log("resultado");
      return {
        ...state,
        display:
          state.beforeOperation === ""
            ? [...accumulator]
            : !state.result
            ? [
                reducerOperation(
                  [...state.accumulator, state.display.join("")],
                  state.beforeOperation
                ),
              ]
            : [
                reducerOperation(
                  [...state.accumulator, state.factorResult],
                  state.beforeOperation
                ),
              ],
        accumulator: !state.result
          ? [
              reducerOperation(
                [...state.accumulator, state.display.join("")],
                state.beforeOperation
              ),
            ]
          : [
              reducerOperation(
                [...state.accumulator, state.factorResult],
                state.beforeOperation
              ),
            ],
        result: true,
        factorResult: !state.result
          ? state.display.join("")
          : state.factorResult,
      };
    }
    default:
      return state;
  }
}

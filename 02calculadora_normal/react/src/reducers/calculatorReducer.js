import { TYPES } from "../actions/calculatorActions";
import calculatorOperation from "../helpers/calculatorOperation";
import selectOperation from "../helpers/selectOperation";

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
      console.log("incertando", state);
      return state.result || state.operation
        ? {
            ...state,
            display: [action.payload],
            accumulator: state.operation ? [...state.accumulator] : [],
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
      return selectOperation(state, action.payload);
    }
    case TYPES.EQUAL: {
      console.log("resultado", state);
      return {
        ...state,
        display:
          state.beforeOperation === ""
            ? [...state.accumulator]
            : !state.result
            ? [
                calculatorOperation(
                  [...state.accumulator, state.display.join("")],
                  state.beforeOperation
                ),
              ]
            : [
                calculatorOperation(
                  [...state.display, state.factorResult],
                  state.beforeOperation
                ),
              ],
        accumulator: !state.result
          ? [
              calculatorOperation(
                [...state.accumulator, state.display.join("")],
                state.beforeOperation
              ),
            ]
          : [
              calculatorOperation(
                [...state.accumulator, state.factorResult],
                state.beforeOperation
              ),
            ],
        result: true,
        factorResult: state.result
          ? state.factorResult
          : state.display.join(""),
      };
    }
    default:
      return state;
  }
}

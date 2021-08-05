import { createContext, useReducer } from "react";
import { TYPES } from "../actions/calculatorActions";
import {
  calculatorInitialState,
  calculatorReducer,
} from "../reducers/calculatorReducer";

const OptionContext = createContext();

const options = [
  "7",
  "8",
  "9",
  "DEL",
  "4",
  "5",
  "6",
  "+",
  "1",
  "2",
  "3",
  "-",
  ".",
  "0",
  "/",
  "x",
  "RESET",
  "=",
];

const OptionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    calculatorReducer,
    calculatorInitialState
  );

  const handleOption = (value) => {
    const numRegex = /^(\d{1,10})$/;
    if (numRegex.test(value)) {
      dispatch({
        type: TYPES.INSERTANDO_VALOR,
        payload: value,
      });
    } else if (value === ".") {
      dispatch({ type: TYPES.COLOCANDDO_PUNTO });
    } else if (value === "DEL") {
      dispatch({ type: TYPES.DELET_NUMBER });
    } else if (value === "RESET") {
      dispatch({ type: TYPES.RESET });
    } else if (value === "=") {
      dispatch({ type: TYPES.EQUAL });
    } else {
      dispatch({ type: TYPES.OPERATION, payload: value });
    }
  };

  const data = { state, handleOption, options };

  return (
    <OptionContext.Provider value={data}>{children}</OptionContext.Provider>
  );
};

export { OptionProvider };
export default OptionContext;

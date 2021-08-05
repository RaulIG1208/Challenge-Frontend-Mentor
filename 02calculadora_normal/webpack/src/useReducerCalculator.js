export default function (calculatorReducer, calculatorInitialState) {
  let state = calculatorInitialState,
    copyState = { ...state };

  const dispatch = (action) => {
    copyState = calculatorReducer(copyState, action);
    return (state = { ...state, ...copyState });
  };

  return [dispatch];
}

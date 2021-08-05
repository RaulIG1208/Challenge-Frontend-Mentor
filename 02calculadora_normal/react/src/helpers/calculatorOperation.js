const calculatorOperation = (array, beforeOperation) => {
  return array.reduce((vAnterior, vActual) =>
    beforeOperation === "-"
      ? parseFloat(vAnterior) - parseFloat(vActual)
      : beforeOperation === "+"
      ? parseFloat(vAnterior) + parseFloat(vActual)
      : beforeOperation === "x"
      ? parseFloat(vAnterior) * parseFloat(vActual)
      : vAnterior === vActual && vAnterior === "0"
      ? "Resultado indefinido"
      : vActual === "0"
      ? "No se puede dividir entre cero"
      : parseFloat(vAnterior) / parseFloat(vActual)
  );
};

export default calculatorOperation;

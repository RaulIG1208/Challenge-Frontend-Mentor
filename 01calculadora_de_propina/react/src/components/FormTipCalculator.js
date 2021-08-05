import useForm from "../hooks/useForm";
import FormCalculatorInputs from "./FormCalculatorInputs";
import FormCalculatorResults from "./FormCalculatorResults";

let initialForm = {
  amount: "",
  people: "",
  porcent: "",
};

let initialResults = {
  resultTip: 0,
  resultAll: 0,
};

const validateForm = (form) => {
  let errors = {};

  let patternAmount = /^(\d{1,10})(\.\d{1,10})?$/,
    patternPeople = /^(\d{1,10})$/;

  if (!patternAmount.exec(form.amount)) {
    errors.amount = "Don`t be zero";
  }

  if (!patternPeople.test(form.people)) {
    errors.people = "Don`t be zero";
  }

  if (!form.porcent) {
    errors.porcent = "Slect an Tip";
  }

  return errors;
};

const FormTipCalculator = () => {
  const {
    form,
    error,
    results,
    reset,
    handleChange,
    handleSubmit,
    handleClick,
    handleReset,
  } = useForm(initialForm, initialResults, validateForm);

  return (
    <form
      className="form-calculator"
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <FormCalculatorInputs
        form={form}
        error={error}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      <FormCalculatorResults results={results} reset={reset} />
    </form>
  );
};

export default FormTipCalculator;

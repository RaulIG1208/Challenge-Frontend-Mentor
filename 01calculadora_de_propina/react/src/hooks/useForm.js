import { useState } from "react";

const useForm = (initialForm, initialResults, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState({});
  const [results, setResults] = useState(initialResults);
  const [reset, setReset] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleClick = (e) => {
    setForm({
      ...form,
      porcent: e.target.value,
    });
  };

  const handleReset = (e) => {
    e.preventDefault();
    setForm(initialForm);
    setError({});
    setResults(initialResults);
    setReset(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validateForm(form));
    if (Object.keys(error).length === 0) {
      const amount = parseFloat(form.amount),
        people = parseInt(form.people),
        porcent = form.porcent.slice(0, -1),
        resultTip = Math.round((amount * porcent) / people) / 100,
        resultAll =
          Math.round(((amount * (1 + porcent / 100)) / people) * 100) / 100;

      setResults({
        ...results,
        resultTip,
        resultAll,
      });
      setReset(true);
    } else return;
  };

  return {
    form,
    error,
    results,
    reset,
    handleChange,
    handleSubmit,
    handleReset,
    handleClick,
  };
};

export default useForm;

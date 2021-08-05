import InputNumber from "./InputNumber";
import SelectTip from "./SelectTip";

const FormCalculatorInputs = ({ form, error, handleChange, handleClick }) => {
  let { amount, people, porcent } = form;

  return (
    <div className="section-option">
      <InputNumber
        name="amount"
        title="Don`t be zero"
        subtitle="bill"
        error={error.amount}
        handleChange={handleChange}
        value={amount}
      />
      <SelectTip porcent={porcent} handleClick={handleClick} />
      <InputNumber
        name="people"
        title="Don`t be zero"
        subtitle="Number of People"
        error={error.people}
        handleChange={handleChange}
        value={people}
      />
    </div>
  );
};

export default FormCalculatorInputs;

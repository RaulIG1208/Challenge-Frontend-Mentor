const FormOptionButton = ({ value, handleOption }) => {
  return (
    <input
      className="grid-fluid"
      type="button"
      defaultValue={value}
      onClick={(e) => handleOption(e.target.value)}
    />
  );
};
export default FormOptionButton;

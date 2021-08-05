const InputNumber = ({ name, title, subtitle, error, handleChange, value }) => {
  return (
    <div className={`section section-${name}`}>
      <label htmlFor={name}>{subtitle}</label>
      {error && <span className="number-err is-active">{title}</span>}
      <input
        type="number"
        name={name}
        required
        title={title}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputNumber;

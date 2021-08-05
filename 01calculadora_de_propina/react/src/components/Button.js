const Button = ({ el, porcent, handleClick }) => {
  let { type, value } = el;

  return (
    <input
      type={type}
      defaultValue={value}
      className={porcent === value ? "select-is-active" : undefined}
      onClick={type === "button" ? handleClick : undefined}
    />
  );
};

export default Button;

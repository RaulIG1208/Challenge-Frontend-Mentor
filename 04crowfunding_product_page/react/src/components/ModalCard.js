import ButtonCard from "./ButtonCard";

const ModalCard = ({
  title,
  subtitle,
  parraf,
  amount,
  enable,
  price,
  handleCheck,
  check,
}) => {
  return (
    <div
      className={`modal-card ${
        !enable ? "disable" : check === price ? "is-active" : ""
      }`}
    >
      <div>
        <input
          type="radio"
          name="choice"
          id={price}
          onClick={(e) => handleCheck(e)}
        />
        <div>
          <h4>{title}</h4>
          {subtitle && <h5>{subtitle}</h5>}
        </div>
      </div>
      <p>{parraf}</p>
      {amount && (
        <p>
          <strong>{amount}</strong>
          <small>left</small>
        </p>
      )}
      {check === price && (
        <div className="pledge">
          <h4>Enter your pledge</h4>
          {price !== "NAN" && (
            <input type="text" name="price" id="price" value={price} readOnly />
          )}
          <ButtonCard
            title={enable ? "Continue" : "Out of Stock"}
            enable={enable}
          />
        </div>
      )}
    </div>
  );
};

export default ModalCard;

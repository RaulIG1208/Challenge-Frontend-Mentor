import Button from "./Button";

let arrOptions = [
  { type: "button", value: "5%" },
  { type: "button", value: "10%" },
  { type: "button", value: "15%" },
  { type: "button", value: "25%" },
  { type: "button", value: "50%" },
  { type: "Submit", value: "Custom" },
];

const SelectTip = ({ porcent, handleClick }) => {
  return (
    <div className="section section-select-tip">
      <h4>Select Tip %</h4>
      <div className="select-porcent">
        {arrOptions.map((el, index) => (
          <Button
            key={index}
            el={el}
            porcent={porcent}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectTip;

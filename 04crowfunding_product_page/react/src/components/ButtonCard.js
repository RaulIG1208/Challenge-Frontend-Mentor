const ButtonCard = ({ title, enable, handleClick }) => {
  return (
    <button disabled={!enable} onClick={handleClick}>
      {title}
    </button>
  );
};

export default ButtonCard;

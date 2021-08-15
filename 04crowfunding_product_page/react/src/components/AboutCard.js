import ButtonCard from "./ButtonCard"


const AboutCard = ({title, subtitle, parraf, amount, enable}) => {
  return (
    <div className={enable?"about-card":"about-card disable"}>
      <h4>{title}</h4>
      <h5>{subtitle }</h5>
      <p>{parraf}</p>
      <p><strong>{amount}</strong>
      <small>left</small></p>
      <ButtonCard title={enable?"Select Reward":"Out of Stock"} enable={enable} />
    </div>
  );
};

export default AboutCard;
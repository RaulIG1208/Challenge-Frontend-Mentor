import AboutCard from "./AboutCard"
import AboutText from "./AboutText"

const cardContent = [
  {
    title:"Bamboo Stand",
    subtitle:"Pledge $25 or more",
    parraf:"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    amount:"101",
    enable:true,

  },
  {
    title:"Black Edition Stand",
    subtitle:"Pledge $75 or more",
    parraf:"You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    amount:"64",
    enable:true,

  },
  {
    title:"Mahogany Special Edition",
    subtitle:"Pledge $200 or more",
    parraf:"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    amount:"0",
    enable:false,

  },
]
const SectionAbaout = () => {
  return (
    <section className="container-about">
      <AboutText />
      {
      cardContent.map((el,index)=><AboutCard key={index} title={el.title} subtitle={el.subtitle} parraf={el.parraf} amount={el.amount} enable={el.enable} />
      ) 
      }
    </section>
  );
};

export default SectionAbaout;
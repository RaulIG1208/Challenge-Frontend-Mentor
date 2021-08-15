import SectionMastercraft from "./SectionMastercraft";
import logoMastercraft from "../assets/logo-mastercraft.svg";
import SectionQuantity from "./SectionQuantity";
import SectionAbaout from "./SectionAbaout";


const MainContainer = () => {
  return (
    <div className="container">
      <img src={logoMastercraft} alt="Logo" />
      <SectionMastercraft />
      <SectionQuantity />
      <SectionAbaout />
    </div>
  );
};

export default MainContainer;
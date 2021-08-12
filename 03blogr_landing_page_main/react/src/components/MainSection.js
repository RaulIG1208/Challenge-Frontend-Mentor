import SectionFigure from "./SectionFigure";
import MainContext from "../context/MainContext";
import { useContext } from "react";
import SectionArticle from "./SectionArticle";

const MainSection = ({ articleData, mobile, desktop, alt, className }) => {
  const { responsiveAdd } = useContext(MainContext);
  return (
    <section className={className}>
      <SectionFigure src={responsiveAdd ? desktop : mobile} alt={alt} />
      <SectionArticle articleData={articleData} />
    </section>
  );
};

export default MainSection;

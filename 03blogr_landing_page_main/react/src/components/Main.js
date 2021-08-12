import "../styles/sections.scss";
import editorMobile from "../assets/illustration-editor-mobile.svg";
import editorDesktop from "../assets/illustration-editor-desktop.svg";
import laptopMobile from "../assets/illustration-laptop-mobile.svg";
import laptopDesktop from "../assets/illustration-laptop-desktop.svg";
import phones from "../assets/illustration-phones.svg";
import { useContext } from "react";
import MainContext from "../context/MainContext";
import MainSection from "./MainSection";

const Main = () => {
  const { articleText } = useContext(MainContext);
  return (
    <main>
      <h2
        style={{
          color: "rgb(31,63,91)",
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
        Designed for the future
      </h2>
      <MainSection
        articleData={articleText.introducer}
        desktop={editorDesktop}
        mobile={editorMobile}
        alt="
        Introducer"
        className="article"
      />
      <MainSection
        articleData={articleText.infrastructure}
        desktop={phones}
        mobile={phones}
        alt="
        Infrastructure"
        className="article-infrastructure"
      />
      <MainSection
        articleData={articleText.final}
        desktop={laptopDesktop}
        mobile={laptopMobile}
        alt="Final"
        className="article article-final"
      />
    </main>
  );
};

export default Main;

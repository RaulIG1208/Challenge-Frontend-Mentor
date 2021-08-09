import style from "./style.css";
import section from "./section.css";
import introducerImgMobile from "./assets/illustration-editor-mobile.svg";
import introducerImgDesktop from "./assets/illustration-editor-desktop.svg";
import infraestructureImg from "./assets/illustration-phones.svg";
import laptopImgMobile from "./assets/illustration-laptop-mobile.svg";
import laptopImgDesktop from "./assets/illustration-laptop-desktop.svg";
import logo from "./assets/logo.svg";
import responsiveImg from "./module/responsiveImg";
import navbarToggler from "./module/navbarToggler";
import dropdawnMenu from "./module/dropdawnMenu";

const d = document,
  $infracestructureImg = d.getElementById("infrastructure-img"),
  $logoAll = Array.from(d.querySelectorAll(".logo img"));

$infracestructureImg.src = `${infraestructureImg}`;
$logoAll.map((el) => (el.src = `${logo}`));

d.addEventListener("DOMContentLoaded", (e) => {
  responsiveImg(
    "introduc-img",
    "(min-width: 975px)",
    introducerImgDesktop,
    introducerImgMobile
  );
  responsiveImg(
    "final-img",
    "(min-width: 975px)",
    laptopImgDesktop,
    laptopImgMobile
  );

  navbarToggler(".panel-btn", ".navbar", ".hamburger-box");
  dropdawnMenu(".dropdawn-menu");
});

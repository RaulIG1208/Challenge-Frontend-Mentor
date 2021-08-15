import { useState } from "react";
import "../styles/Modal.css";
import "../styles/modalCard.scss";
import ModalCard from "./ModalCard";

const modalCardContent = [
  {
    title: "Pledge with no reward ",
    subtitle: false,
    parraf:
      "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
    amount: false,
    price: "NAN",
    enable: true,
  },
  {
    title: "Bamboo Stand",
    subtitle: "Pledge $25 or more",
    parraf:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    amount: "101",
    price: "25",
    enable: true,
  },
  {
    title: "Black Edition Stand",
    subtitle: "Pledge $75 or more",
    parraf:
      "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    amount: "64",
    price: "75",
    enable: true,
  },
  {
    title: "Mahogany Special Edition",
    subtitle: "Pledge $200 or more",
    parraf:
      "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    amount: "0",
    price: "200",
    enable: false,
  },
];

function Modal({ closeModal }) {
  const handleClose = (e) => e.stopPropagation();
  const [check, setCheck] = useState("");

  const handleCheck = (e) => setCheck(e.target.id);
  return (
    <article className={`modal is-open`} onClick={closeModal}>
      <div className="modal-container" onClick={handleClose}>
        <h3>Back this project</h3>
        <button className="modal-close" onClick={closeModal}></button>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        {modalCardContent.map((el, index) => (
          <ModalCard
            key={index}
            title={el.title}
            subtitle={el.subtitle}
            parraf={el.parraf}
            amount={el.amount}
            enable={el.enable}
            price={el.price}
            handleCheck={handleCheck}
            check={check}
          />
        ))}
      </div>
    </article>
  );
}

export default Modal;

import { UseModal } from "../hooks/useModal";
import ButtonCard from "./ButtonCard";
import ChoiceBookmark from "./ChoiceBookmark";
import Modal from "./Modal";

const MastercraftChoice = () => {
  const [isOpenFirstModal, openFirstModal, closeFirstModal] = UseModal(false);
  return (
    <div className="container-mastercraft-choice">
      <ButtonCard
        title="Back this project"
        enable={true}
        handleClick={openFirstModal}
      />
      {isOpenFirstModal && <Modal closeModal={closeFirstModal} />}
      <ChoiceBookmark bookmarked={false} />
    </div>
  );
};

export default MastercraftChoice;

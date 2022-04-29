import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import { Container } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const TransactionModal = function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        className="react-modal-close"
        type="button"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="close modal" />
      </button>
      <Container>
        <h2>Register transaction</h2>

        <input placeholder="Title" />
        <input placeholder="Value" />

        <input type="number" placeholder="Category" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

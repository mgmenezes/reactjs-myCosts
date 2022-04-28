import Modal from "react-modal";
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
      <Container>
        <h2>Register transaction</h2>

        <input placeholder="Title" />

        <input type="number" placeholder="Category" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

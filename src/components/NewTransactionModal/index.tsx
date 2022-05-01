import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { Container, TransactionTypeContainer } from "./styles";
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

        <TransactionTypeContainer>
          <button type="button">
            <img src={incomeImg} alt="income" />
            <span>Outcome</span>
          </button>
          <button type="button">
            <img src={outcomeImg} alt="outcome" />
            <span>Income</span>
          </button>
        </TransactionTypeContainer>

        <input type="number" placeholder="Category" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export const AppHeader = function Header({
  onOpenNewTransactionModal,
}: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="mycosts" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          New Transaction
        </button>
      </Content>
    </Container>
  );
};

export default AppHeader;

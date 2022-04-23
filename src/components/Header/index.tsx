import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

export const AppHeader = function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="mycosts" />
        <button type="button">New Transaction</button>
      </Content>
    </Container>
  );
};

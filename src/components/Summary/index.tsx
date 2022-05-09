import { useContext } from "react";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { TransactionContext } from "../../TransactionsContext";
import { Container } from "./styles";

export function Summary() {
  const transactions = useContext(TransactionContext);

  console.log(transactions);

  return (
    <Container>
      <div>
        <header>
          <p>Inputs</p>
          <img src={incomeImg} alt="Inputs" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>

      <div>
        <header>
          <p>Outputs</p>
          <img src={outcomeImg} alt="Outputs" />
        </header>
        <strong>R$ -500,00</strong>
      </div>

      <div className="hightlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  );
}

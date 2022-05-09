import React, { useContext } from "react";
import { TransactionContext } from "../../TransactionsContext";
import { Container } from "./styles";

export function TransactionTable() {
  const transactions = useContext(TransactionContext);

  return (
    <Container>
      <table>
        <thead>
          <th>Title</th>
          <th>Value</th>
          <th>Category</th>
        </thead>
        <tbody>
          {transactions.map((transactions) => (
            <tr key={transactions.id}>
              <td>{transactions.title}</td>
              <td className={transactions.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transactions.amount)}
              </td>
              <td>{transactions.category}</td>
              <td>
                {" "}
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(transactions.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

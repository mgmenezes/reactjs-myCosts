import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
  id: number;
  title: string;
  category: string;
  type: string;
  amount: number;
  createdAt: string;
}
export function TransactionTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

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
              <td className={transactions.type}>{transactions.amount}</td>
              <td>{transactions.category}</td>
              <td>{transactions.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

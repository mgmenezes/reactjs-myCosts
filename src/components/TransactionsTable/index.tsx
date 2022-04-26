import React, { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
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
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$7000</td>
            <td>Develop</td>
            <td>12/04/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">R$700</td>
            <td>Moradia</td>
            <td>20/04/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

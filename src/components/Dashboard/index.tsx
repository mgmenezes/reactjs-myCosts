import React from "react";
import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionsTable";
import { Container } from "./styles";

export const AppDashboard = function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  );
};

export default AppDashboard;

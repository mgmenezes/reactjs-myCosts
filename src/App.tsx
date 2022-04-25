import React from "react";
import Dashboard from "./components/Dashboard";
import { AppHeader } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <AppHeader />
      <Dashboard></Dashboard>
      <GlobalStyle />
    </>
  );
}
export default App;

import { createServer, Model } from "miragejs";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelancer de Website",
          type: "deposit",
          category: "Dev",
          amount: 5000,
          createdAt: new Date("2022-02-13 09:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "moradia",
          amount: 1000,
          createdAt: new Date("2022-02-20 12:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });
  },
});
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface Transaction {
  id: number;
  title: string;
  category: string;
  type: string;
  amount: number;
  createdAt: string;
}
// interface TransactionInput {
//   title: string;
//   category: string;
//   type: string;
//   amount: number;
// }
type TransactionInput = Omit<Transaction, "id" | "createdAt">;

// type TransactionInput = Pick<
//   Transaction,
//   "title" | "category" | "amount" | "type"
// >;
export const TransactionContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);
interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    }); //access the transactions when we register a new transactions on the modal
    const { transaction } = response.data;
    setTransactions([...transactions, transaction]); // create a new vector of transactions
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}

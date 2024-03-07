import Header from "./components/header/Header";
import ListTransactions from "./components/list_transactions/ListTransactions";
import Transactions from "./components/transactions/Transactions";

export default function App() {
  return (
    <div>
      <Header />
      <Transactions/>
      <ListTransactions />
    </div>
  )
}

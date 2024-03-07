import Header from "./components/header/Header";
import Transactions from "./components/transactions/Transactions";
import ListTransactions from "./components/list_transactions/ListTransactions";

export default function App() {
  return (
    <div>
      <div className="backgroundHeader">
        <Header />
        <Transactions/>
      </div>
      <div className="filterContainer">
        <ListTransactions />
      </div>
    </div>
  )
}

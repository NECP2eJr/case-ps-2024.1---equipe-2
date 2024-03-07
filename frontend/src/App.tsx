import Header from './components/header/Header'
import Transactions from './components/transactions/Transactions'
import ListTransactions from './components/list_transactions/ListTransactions'

export default function App() {
  return (
    <div>
      <div className="HeaderContainer">
        <Header />
        <div className="backgroundHeader">
          <Transactions />
        </div>
      </div>
      <div className="filterContainer">
        <ListTransactions />
      </div>
    </div>
  )
}

import '../../styles/transactions.css'
import Data from "../../utils/data.json"

const Transactions = () => {

  let stringData: string | null = localStorage.getItem("data");
  let parsedData: Array<{ price: number, type: string }> = stringData ? JSON.parse(stringData) : [];

  const entradas = parsedData.reduce((accumulator, object) => {
    if (object.type == "Entrada") {
      return accumulator + object.price;
    }
    else {
      return accumulator + 0
    }
  }, 0);

  const saidas = parsedData.reduce((accumulator, object) => {
    if (object.type == "Saida") {
      return accumulator - object.price;
    }
    else {
      return accumulator + 0
    }
  }, 0);

  const total = entradas + saidas;
  ;

  return (
    <div className="containerTransactionsPrincipal">
      <div className="containerTransactions">
        <div className="containerMoney entradas">
          <div className="topTextContainerMoney">
            <div>Entradas</div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M16 12L12 8M12 8L8 12M12 8V16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  stroke="#33FF6D"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="value">R$ {entradas},00</div>
        </div>

        <div className="containerMoney saidas">
          <div className="topTextContainerMoney">
            <div>Saidas</div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 8V16M12 16L8 12M12 16L16 12M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  stroke="#FE8670"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="value">R$ {saidas},00</div>
        </div>

        <div className="containerMoney total">
          <div className="topTextContainerMoney">
            <div>Total</div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
                  stroke="#D0D4D8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="value">R$ {total},00</div>
        </div>
      </div>
    </div>
  )
}

export default Transactions

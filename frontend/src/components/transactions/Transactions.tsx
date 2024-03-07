const Transactions = () => {

    let entradas = 12.000
    let saidas = 3.450

  return (
    <div className="containerTransactions">

      <div className="containerEntradas">
        <p>
            R$ {entradas},00
        </p>
      </div>

      <div className="containerSaidas">
            R$ {saidas},00
      </div>

      <div className="containerTotal">
            R$ {entradas - saidas},00
      </div>
    </div>
  );
};

export default Transactions;

import LineItems from "./LineItem"

const ListTransactions = () => {

    return (
        <div className="listTransactions">
            <table className="transactionsList">
                <tr>
                    <td>Descrição</td>
                    <td>Preço</td>
                    <td>Categoria</td>
                    <td>Data</td>
                </tr>
                <LineItems 
                    name={"Desenvolvimento de site"}
                    price={12.000}
                    type={"Venda"}
                    date={"10/02/2024"}
                />
            </table>
        </div>
    )
}

export default ListTransactions;
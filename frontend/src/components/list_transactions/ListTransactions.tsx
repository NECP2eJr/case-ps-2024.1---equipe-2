import LineItems from "./LineItem";
import React, { useState, useEffect } from 'react';
import Data from '../../utils/data.json';
import '../../styles/filtercomponent.css'

const ListTransactions = () => {

    const [data, setData] = useState(null);
    const [searchParams, setSearchParams] = useState(null);

    

    async function GetData() {
        setData(Data);
    }

    const handleClickSearch = () =>{
        let filteredData = Data.filter((i:any) => i.description.toLowerCase().includes(searchParams.toLowerCase()) )

        setData(filteredData)

        console.log(filteredData)
    }

    useEffect(() => {
        GetData()
    }, [])

    return (
        <div className="listTransactions">
            <section className="searchParams">
                <input
                    placeholder="Busque por uma transação"
                    value={null}
                    onChange={(e) => { setSearchParams(e.target.value); }}
                />
                <button className="btnSearch" onClick={()=>handleClickSearch()}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.0625 3.4375C5.9559 3.4375 3.4375 5.9559 3.4375 9.0625C3.4375 12.1691 5.9559 14.6875 9.0625 14.6875C12.1691 14.6875 14.6875 12.1691 14.6875 9.0625C14.6875 5.9559 12.1691 3.4375 9.0625 3.4375ZM1.5625 9.0625C1.5625 4.92036 4.92036 1.5625 9.0625 1.5625C13.2046 1.5625 16.5625 4.92036 16.5625 9.0625C16.5625 13.2046 13.2046 16.5625 9.0625 16.5625C4.92036 16.5625 1.5625 13.2046 1.5625 9.0625Z" fill="#FFB933" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0402 13.0402C13.4063 12.6741 13.9999 12.6741 14.366 13.0402L18.1629 16.8371C18.529 17.2032 18.529 17.7968 18.1629 18.1629C17.7968 18.529 17.2032 18.529 16.8371 18.1629L13.0402 14.366C12.6741 13.9999 12.6741 13.4063 13.0402 13.0402Z" fill="#FFB933" />
                    </svg>
                    <span>
                        Buscar
                    </span>

                </button>
            </section>
            <table className="transactionsList">
                <thead>
                    <tr className="headerTransactions">
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
            </table>
            <table className="transactionsList">
                <tbody>
                    {data.length > 0 ? (data.map((item:{
                        "description":string,
                        "price":string,
                        "type":string,
                        "date":string
                    }) => {
                        return (
                            <LineItems
                                description={item.description}
                                price={item.price}
                                type={item.type}
                                date={item.date}
                            />
                        )
                    }
                    )
                    ) : (<div>Não existem transações</div>)
                    }

                    
                </tbody>
            </table>
        </div>
    )
}

export default ListTransactions;
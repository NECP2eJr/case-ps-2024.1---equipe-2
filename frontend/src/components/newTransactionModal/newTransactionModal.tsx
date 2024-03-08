import "../../styles/modal.css";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NewTransactionModal({ handleChangeModal }: any) {
  const [activeButton, setActiveButton] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [type, setType] = useState<string>("");

  const handleSendData = () => {
    console.log(description, price, type);
    toast.success('Transação inserida com sucesso!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };

  return (
    <React.Fragment>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="backgroundModal" onClick={handleChangeModal}></div>
      <div className="transactionModal">
        <div className="newTransactionModal">
          <div className="closeBtn">
            <button onClick={handleChangeModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.2803 4.71967C19.5732 5.01256 19.5732 5.48744 19.2803 5.78033L5.78033 19.2803C5.48744 19.5732 5.01256 19.5732 4.71967 19.2803C4.42678 18.9874 4.42678 18.5126 4.71967 18.2197L18.2197 4.71967C18.5126 4.42678 18.9874 4.42678 19.2803 4.71967Z"
                  fill="#7C7C8A"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.71967 4.71967C5.01256 4.42678 5.48744 4.42678 5.78033 4.71967L19.2803 18.2197C19.5732 18.5126 19.5732 18.9874 19.2803 19.2803C18.9874 19.5732 18.5126 19.5732 18.2197 19.2803L4.71967 5.78033C4.42678 5.48744 4.42678 5.01256 4.71967 4.71967Z"
                  fill="#7C7C8A"
                />
              </svg>
            </button>
          </div>
          <div className="formModal">
            <div className="headerModal">
              <h1>Nova transação</h1>
            </div>
            <div className="itemModalForm">
              <input
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                placeholder="Descrição"
              />
            </div>
            <div className="itemModalForm">
              <input
                onChange={(e) => {
                  setPrice(parseFloat(e.target.value));
                }}
                placeholder="Preço"
              />
            </div>
            <div className="itemModalForm">
              <input
                onChange={(e) => {
                  setType(e.target.value);
                }}
                placeholder="Categoria"
              />
            </div>
            <div className="itemModalBtns">
              <button
                id={activeButton === "Entrada" ? "selected" : undefined}
                onClick={() => {
                  setActiveButton("Entrada");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M16.25 12L12.25 8M12.25 8L8.25 12M12.25 8V16M22.25 12C22.25 17.5228 17.7728 22 12.25 22C6.72715 22 2.25 17.5228 2.25 12C2.25 6.47715 6.72715 2 12.25 2C17.7728 2 22.25 6.47715 22.25 12Z"
                    stroke="#00FF48"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Entrada
              </button>
              <button
                id={activeButton === "Saida" ? "selected" : undefined}
                onClick={() => {
                  setActiveButton("Saida");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M12.25 8V16M12.25 16L8.25 12M12.25 16L16.25 12M22.25 12C22.25 17.5228 17.7728 22 12.25 22C6.72715 22 2.25 17.5228 2.25 12C2.25 6.47715 6.72715 2 12.25 2C17.7728 2 22.25 6.47715 22.25 12Z"
                    stroke="#FE8670"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Saída
              </button>
            </div>
            <div className="btnFinalize">
              <button onClick={() => handleSendData()}>Cadastrar</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

import React from "react";

import { baseUrl } from "../../constants/constants";
import useRequestData from "../../hooks/useRequestData";

const CardOrder = () => {
  

  const order = useRequestData(`${baseUrl}/orders/history`, {
    headers: {
      auth: localStorage.getItem("token")
    }
  } )


  return order ? (
    <div>
      <p>Você não realizou nenhum pedido.</p>
    </div>
  ) : (
    <div>
      <div>
        <p>Nome do Restaurante</p>
        <p>09 de dezembro de 2020</p>
        <p>Subtotal: R$ 00,00 </p>
      </div>
      <div>
        <h4>Método de pagamento</h4>
        <select>
          <order>Dinheiro</order>
          <order>Cartão de Crédito</order>
          <order>Cartão de Débito</order>
        </select>
      </div>
    </div>
  );
}

export default CardOrder;

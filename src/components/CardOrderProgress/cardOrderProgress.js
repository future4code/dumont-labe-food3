import React from "react"
import {
  ProgressContainer,
  OrderProgress,
  RestaurantName,
  TotalPrice,
} from "./styles";


const CardOrderProgress = (props) =>{
      return (
        <ProgressContainer open={props.open}>
          <OrderProgress>Pedido em Andamento</OrderProgress>
          <RestaurantName>{props.restaurant}</RestaurantName>
          <TotalPrice>SUBTOTAL: R${props.totalPrice}</TotalPrice>
        </ProgressContainer>
      );
}

export default CardOrderProgress;
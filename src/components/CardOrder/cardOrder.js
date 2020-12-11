import React, { useState, useEffect } from "react";
import { HistoryOrderDate, HistoryOrderDiv, HistoryOrderRestaurant, HistoryOrderTotal } from "./styles";


const CardOrder = (props) => {
  const date = new Date(props.date);
  let options = { day: "numeric", month: "long", year: "numeric" };
  const newDate = date.toLocaleDateString("pt-PT", options);
  const formatDate = newDate.split("de ");
  

  return (
    
      <HistoryOrderDiv>
      <HistoryOrderRestaurant>{props.restaurantName}</HistoryOrderRestaurant>
      <HistoryOrderDate>{formatDate}</HistoryOrderDate>
      <HistoryOrderTotal>SUBTOTAL R${props.totalPrice}</HistoryOrderTotal>
      </HistoryOrderDiv>
  );
};

export default CardOrder;

import React, { useState, useEffect } from "react";


const CardOrder = (props) => {
  const date = new Date(props.date);
  let options = { day: "numeric", month: "long", year: "numeric" };
  const newDate = date.toLocaleDateString("pt-PT", options);
  const formatDate = newDate.split("de ");
  

  return (
    <div>
      <p>{props.restaurantName}</p>
      <p>{formatDate}</p>
      <h4>SUBTOTAL R${props.totalPrice}</h4>
    </div>
  );
};

export default CardOrder;

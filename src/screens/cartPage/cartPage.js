import React, { useContext, useEffect, useState } from "react"
import GlobalStateContext from "../../global/globalStateContext"
import axios from "axios"
import useProtectedPage from "../../hooks/useProtectedPage"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import CardProduct from "../../components/CardProduct/CardProduct"


   const CartContainer = styled.div `
    display: flex;
    align-items: center;
    margin: auto;
    width: 360px;
    height: 640px;
    border: 1px black solid;
    flex-direction:column;
    overflow:auto;
`
const Button = styled.button`
cursor: pointer;
margin-top:5px; 
`
const P = styled.p`
margin:0px;
`


const CartPage = () =>{
     useProtectedPage()
     const {states,setters} = useContext(GlobalStateContext)
     const [adress,setAdress] = useState({})
     const [payment,setPayment] = useState()
     const params = useParams()
     
     useEffect(()=>{
         axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile/address`,
         {headers:{
             auth:localStorage.getItem("token")
            }}).then(response =>{
                setAdress(response.data.address)
              
            })
     },[])

     const placeOrder = () =>{
    axios.post(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants/${params.id}/order`,
    {headers:{
        auth:localStorage.getItem("token")}},{
            products:states.cart.id,
            paymentMethod:payment
        })
     }

       const handleOption = (event) =>{
           setPayment(event.target.value)
       }

       console.log(states.cart)

      
      return(
        <CartContainer>
        {states.cart.length === 0 ? 
        <p>carrinho vazio</p>:
        states.cart.map(item =>{
        return(
            <CardProduct 
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
            />
          )}
           )}
           <P>Bairro:{adress.neighbourhood} / Numero:{adress.number}</P>
           <P>Cidade:{adress.city} / Estado:{adress.state}</P>
           <P>Rua:{adress.street}</P>
           <P>Preço:R${(states.cart.reduce((a,v) =>  a = a + v.price , 0 ))}</P>
           <select onChange={handleOption}>
            <option>Selecione forma de pagamento</option>
            <option value="cartão">cartão</option>
            <option value="dinheiro">dinheiro</option>
           </select>
        <Button onClick={placeOrder}>finalizar compra</Button>
        </CartContainer>
      )          
}
export default CartPage
import Axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import GlobalStateContext from "../../global/globalStateContext"
import axios from "axios"
import useProtectedPage from "../../hooks/useProtectedPage"
import shape from "@material-ui/core/styles/shape"


const CartPage = () =>{
     useProtectedPage()
     const {states,setters} = useContext(GlobalStateContext)
     const [adress,setAdress] = useState({})
     
     useEffect(()=>{
         axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureEats/profile/address`,
         {headers:{
             auth:localStorage.getItem("token")
            }}).then(response =>{
                console.log(response)
                setAdress(response)
            })
     })

      
      return(
          <div>
        {!states.cart ? 
        <p>carrinho vazio</p>:
        states.cart.map(item =>{
        return(
         <p>{item.quantity}x{item.name}</p>
          )}
           )}
        </div>
      )          
}
export default CartPage

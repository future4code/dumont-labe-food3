import React, { useContext, useEffect, useState } from "react"
import GlobalStateContext from "../../global/globalStateContext"
import axios from "axios"
import useProtectedPage from "../../hooks/useProtectedPage"



const CartPage = () =>{
     useProtectedPage()
     const {states,setters} = useContext(GlobalStateContext)
     const [adress,setAdress] = useState({})
     
     useEffect(()=>{
         axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile/address`,
         {headers:{
             auth:localStorage.getItem("token")
            }}).then(response =>{
                setAdress(response)
            })
     },[])

      
      return(
          <div>
        {states.cart.length === 0 ? 
        <p>carrinho vazio</p>:
        states.cart.map(item =>{
        return(
         <p>x{item}</p>
          )}
           )}
        </div>
      )          
}
export default CartPage
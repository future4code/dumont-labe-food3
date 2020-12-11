import React, { useState } from "react"
import GlobalStateContex from "./globalStateContext"

const GlobalState = (props) =>{
    const [restaurante,setRestaurante] = useState({})
    const [cart,setCart] = useState([])
    const [profile, setProfile] = useState([])
    const [idProduct, setIdProduct] = useState("")

    const states = {restaurante,cart,profile,idProduct}
    const setters = {setRestaurante,setCart,setProfile,setIdProduct}

  
    const data = {states,setters}

    return(
       <GlobalStateContex.Provider value={data}>
           {props.children}
       </GlobalStateContex.Provider>
    )
}
export default GlobalState
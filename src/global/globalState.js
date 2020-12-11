import React, { useState } from "react"
import GlobalStateContex from "./globalStateContext"

const GlobalState = (props) =>{
    const [restaurante,setRestaurante] = useState({})
    const [cart,setCart] = useState([])
    const [profile, setProfile] = useState([])
    

    const states = {restaurante,cart,profile, }
    const setters = {setRestaurante,setCart,setProfile, 
    }
  
    const data = {states,setters}

    return(
       <GlobalStateContex.Provider value={data}>
           {props.children}
       </GlobalStateContex.Provider>
    )
}
export default GlobalState
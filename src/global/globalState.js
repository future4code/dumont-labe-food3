import React, { useState } from "react"
import GlobalStateContex from "./globalStateContext"

const GlobalState = (props) =>{


    const states = {}
    const setters = {}

    const data = {states,setters}

    return(
       <GlobalStateContex.Provider value={data}>
           {props.children}
       </GlobalStateContex.Provider>

    )
}
export default GlobalState
import React, { useState } from "react"
import GlobalStateContex from "./globalStateContext"

const GlobalState = (props) =>{

    const [profile, setProfile] = useState([])


    const states = {profile}
    const setters = {setProfile}

    const data = {states,setters}

    return(
       <GlobalStateContex.Provider value={data}>
           {props.children}
       </GlobalStateContex.Provider>

    )
}
export default GlobalState
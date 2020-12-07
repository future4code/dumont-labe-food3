import axios from "axios"
import {baseUrl} from "./constants"


export const login = (body, history) =>{
axios.post(`${baseUrl}/login`, body)
.then ((response)=>{
    localStorage.setItem("token", response.data.token)
    // goToFeed(history)
}).catch ((error) =>{
    alert ("Deu ruim rapá!")
    console.log (error.message)
})

}

export const signUp = (body, history) => {
  axios
    .post(`${baseUrl}/signup`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      // goToFeed(history)
    })
    .catch((error) => {
      alert("Deu ruim rapá!");
      console.log(error.message);
    });
};
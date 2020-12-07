import axios from "axios"
import {baseUrl} from "./constants"
import { goToFeedPage } from "../router/coordinator"


export const login = (body, history) =>{
axios.post(`${baseUrl}/login`, body)
.then ((response)=>{
    localStorage.setItem("token", response.data.token)
    goToFeedPage(history);
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
      goToFeedPage(history);
    })
    .catch((error) => {
      alert("Deu ruim rapá!");
      console.log(error.message);
    });
};
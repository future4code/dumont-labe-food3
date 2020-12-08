import axios from "axios"
import {baseUrl} from "./constants"
import { goToFeedPage, goToSignUpPage } from "../router/coordinator"


export const login = (body, history) =>{
axios.post(`${baseUrl}/login`, body)
.then ((response)=>{
      localStorage.setItem('user', response.data.user)
      localStorage.setItem('token', response.data.token)

      if(response.data.user.hasAddress){
        goToFeedPage(history)
      }else{
        goToSignUpPage(history)
      }

    }).catch(error=>{
      alert ("Deu ruim rapá!")
      console.log(error.message)
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
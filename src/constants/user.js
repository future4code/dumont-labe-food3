import axios from "axios"
import {baseUrl} from "./constants"
import { goToFeedPage, goToAdressPage, goToSignUpPage, goToProfilePage } from "../router/coordinator"


const axiosConfig = {
  headers: {
    auth: localStorage.getItem('token')
  }
}

export const login = (body, history) =>{
axios.post(`${baseUrl}/login`, body)
.then ((response)=>{
      localStorage.setItem('user', response.data.user)
      

      if(response.data.user.hasAddress){
        localStorage.setItem("token", response.data.token);
        goToFeedPage(history)

      }else{
         localStorage.setItem("token", response.data.token);
        goToAdressPage(history);
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
      goToAdressPage(history);
    })
    .catch((error) => {
      alert("Deu ruim rapá!");
      console.log(error.message);
    });
};

export const Address = (body, history) => {

  axios
  .put(`${baseUrl}/address`, body, axiosConfig)

  .then ((response)=>{
    localStorage.setItem('token', response.data.token)
    alert("Endereço cadastrado com sucesso!")
    goToFeedPage(history)

  })

  .catch((error)=>{
    alert("Deu ruim rapá!")
    console.log(error)
  })


}

export const UpdateProfile = (body, history) => {

  axios
  .put(`${baseUrl}/profile`, body, axiosConfig)

  .then (()=>{
    alert('Perfil alterado com sucesso!')
    goToProfilePage(history)

  })
  .catch((error)=>{
    alert('Deu ruim rapá!')
    console.log(error.message)
  })
}
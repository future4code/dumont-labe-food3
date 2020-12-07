import React from "react"
import { useHistory } from "react-router-dom"
import { login } from "../constants/user"
import { useForm } from "../hooks/useForm"
import { useUnProtectedPage } from "../hooks/useUnprotectedPage";

function LoginPage(){
useUnProtectedPage();
const history = useHistory()
const {form, onChange} = useForm({email: "", password: ""})

const handleInputChange = (event) =>{
    const {value, name} = event.target
    onChange(value, name)
}

const handleSubmit = (event)=>{
    event.preventDefault()
    login(form, history)
}

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="E-mail"
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
          />

          <input
            placeholder="Senha"
            type="password"
            name="password"
            value={form.password}
            onChange={handleInputChange}
          />
          <button> Entrar </button>
        </form>

        <span>Não possui cadastro? Clique aqui!</span>
      </div>
    );


}

export default LoginPage
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { signUp } from '../../constants/user'
import { goToAdressPage } from '../../router/coordinator'
import useUnProtectedPage from '../../hooks/useUnprotectedPage'

const SignupPage = () => {

    useUnProtectedPage()

    const history = useHistory()


    const { form, onChange } = useForm({ name: "", email: "", cpf: "", password: "", confirmPassword: "" })

    const handleInput = (event) => {
        const { value, name } = event.target

        onChange(value, name)
    }

    const handleSubmit = (event) => {
        signUp(form, history)
    }

    const validate = (event) => {

        const passwordOne = form.password
        const passwordTwo = form.confirmPassword
        event.preventDefault()

        if(passwordOne === passwordTwo) {
          handleSubmit()
          alert("Tudo certo!")
          
        } else {
          alert("As senhas digitadas não são iguais!")
        }
      }

    return (

        <div>

            <form onSubmit={validate}>

                <input
                    placeholder="Escreva seu nome completo"
                    name="name"
                    value={form.name}
                    onChange={handleInput}
                    required

                />

                <input
                    placeholder="Digite seu email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInput}
                    required

                />

                <input
                    placeholder="Digite seu CPF"
                    pattern="([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"
                    name="cpf"
                    value={form.cpf}
                    onChange={handleInput}
                    required

                />

                <input
                    placeholder="Crie uma senha"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleInput}
                    required

                />

                <input
                placeholder="Confirme sua senha"
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleInput}
                required

                />

                <button type="submit">Salvar</button>

            </form>





        </div>
    )

}

export default SignupPage
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { signUp } from '../../constants/user'
import { goToAdressPage } from '../../router/coordinator'
import useUnProtectedPage from '../../hooks/useUnprotectedPage'
import { Bar, InputButton, InputSignUp, InputSignUpDiv, Logo_SignUp, SignUp, Title, TitleSignUp } from './styles'
import SignUpLogo from '../../assets/img/logo-future-eats-invert.png'

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

        if (passwordOne === passwordTwo) {
            handleSubmit()

        } else {
            alert("As senhas digitadas não são iguais!")
        }
    }

    return (

        <SignUp>
            <Bar>

            </Bar>

            <Logo_SignUp src={SignUpLogo} alt="logo da future eats" />
            <TitleSignUp>
                <Title>Cadastrar</Title>
            </TitleSignUp>

            <form onSubmit={validate}>

                <InputSignUpDiv>
                    <InputSignUp
                        placeholder="Escreva seu nome completo"
                        name="name"
                        value={form.name}
                        onChange={handleInput}
                        required

                    />

                </InputSignUpDiv>

                <InputSignUpDiv>
                    <InputSignUp
                        placeholder="Digite seu email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleInput}
                        required

                    />
                </InputSignUpDiv>
                <InputSignUpDiv>
                    <InputSignUp
                        placeholder="Ex: 000.000.000-00"
                        pattern="([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"
                        name="cpf"
                        value={form.cpf}
                        onChange={handleInput}
                        required

                    />
                </InputSignUpDiv>

                <InputSignUpDiv>
                    <InputSignUp
                        placeholder="Crie uma senha com no mínimo 6 caracteres"
                        type="password"
                        name="password"
                        pattern={"[A-Za-z0-9 ]{6,}"}
                        value={form.password}
                        onChange={handleInput}
                        required

                    />
                </InputSignUpDiv>

                <InputSignUpDiv>
                    <InputSignUp
                        placeholder="Confirme sua senha"
                        type="password"
                        name="confirmPassword"
                        pattern={"[A-Za-z0-9 ]{6,}"}
                        value={form.confirmPassword}
                        onChange={handleInput}
                        required

                    />
                </InputSignUpDiv>
                <InputButton type="submit">Criar</InputButton>
            </form>







        </SignUp>
    )

}

export default SignupPage
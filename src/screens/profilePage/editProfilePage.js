import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { UpdateProfile } from '../../constants/user'
import { useForm } from '../../hooks/useForm'
import { EditProfileButton, EditProfileDiv, EditProfileInput, EditProfileInputDiv } from './styles'
import {ButtonStyled} from '../../components/Header/styles'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import {goToProfilePage} from '../../router/coordinator'
import Footer from '../../components/Footer/Footer'


const EditProfilePage = () => {

    const history = useHistory()
    const { form, onChange } = useForm({ name: '', email: '', cpf: '' })

    const handleInput = (event) => {
        const { value, name } = event.target
        onChange(value, name)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        UpdateProfile(form, history)
    }

    return (

        <EditProfileDiv>

            <Header />

            <form onSubmit={handleSubmit}>

                <EditProfileInputDiv>
                <EditProfileInput
                    placeholder="Escreva seu nome completo"
                    name="name"
                    value={form.name}
                    onChange={handleInput}
                />
                </EditProfileInputDiv>

                <EditProfileInputDiv>
                <EditProfileInput
                    placeholder="Digite seu novo email"
                    name="email"
                    value={form.email}
                    onChange={handleInput}

                />
                </EditProfileInputDiv>

                <EditProfileInputDiv>
                <EditProfileInput
                    placeholder="Ex: 000.000.000-00"
                    pattern="([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"
                    name="cpf"
                    value={form.cpf}
                    onChange={handleInput}
                />
                </EditProfileInputDiv>

                <EditProfileButton type='submit'>Salvar</EditProfileButton>
            </form>
            <Footer />
        </EditProfileDiv>
    )
}

export default EditProfilePage
import React from 'react'
import { useHistory } from 'react-router-dom'
import { UpdateProfile } from '../../constants/user'
import { useForm } from '../../hooks/useForm'

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
        <div>

            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Escreva seu nome completo"
                    name="name"
                    value={form.name}
                    onChange={handleInput}
                />

                <input
                    placeholder="Digite seu novo email"
                    name="email"
                    value={form.email}
                    onChange={handleInput}

                />

                <input
                    placeholder="Ex: 000.000.000-00"
                    pattern="([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"
                    name="cpf"
                    value={form.cpf}
                    onChange={handleInput}
                />

                <button type='submit'>Salvar</button>
            </form>

        </div>
    )
}

export default EditProfilePage
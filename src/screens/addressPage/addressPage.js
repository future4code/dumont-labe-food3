import React from 'react'
import { Address } from '../../constants/user'
import {useForm} from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import useProtectedPage from '../../hooks/useProtectedPage'



const AddressPage = () => {

    useProtectedPage()
    
    const history = useHistory()
    const { form, onChange } = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: "" })

    const handleInput = (event) => {
        const { value, name } = event.target
        onChange(value, name)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        Address(form, history)
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input 
                placeholder="Digite sua rua"
                name="street"
                value={form.street}
                onChange={handleInput}
                required
                />

                <input
                placeholder="Digite o número da sua residência"
                name="number"
                type="number"
                value={form.number}
                onChange={handleInput}
                required
                />

                <input
                placeholder="Digite seu bairro"
                name="neighbourhood"
                value={form.neighbourhood}
                onChange={handleInput}
                required
                />

                <input
                placeholder="Digite sua cidade"
                name="city"
                value={form.city}
                onChange={handleInput}
                required
                />

                <input
                placeholder="Digite seu estado"
                name="state"
                value={form.state}
                onChange={handleInput}
                required
                />

                <input
                placeholder="Se necessário, digite seu complemento"
                name="complement"
                value={form.complement}
                onChange={handleInput}

                />

                <button type="submit">Cadastrar</button>
            </form>
            
        </div>
    )
}

export default AddressPage
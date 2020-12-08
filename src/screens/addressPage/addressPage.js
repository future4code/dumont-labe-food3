import React from 'react'
import { Address } from '../../constants/user'
import { useForm } from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import useProtectedPage from '../../hooks/useProtectedPage'
import { StyledAddress, Bar, TitleAddress, InputAddressDiv, InputAddress } from './styles'
import { InputButton, Title } from '../signupPage/styles'



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
        <StyledAddress>

            <Bar>

            </Bar>

            <TitleAddress>
                <Title>Meu endereço</Title>
            </TitleAddress>

            <form onSubmit={handleSubmit}>

                <InputAddressDiv>
                    <InputAddress
                        placeholder="Digite sua rua"
                        name="street"
                        value={form.street}
                        onChange={handleInput}
                        required
                    />
                </InputAddressDiv>

                <InputAddressDiv>
                    <InputAddress
                        placeholder="Digite o número da sua residência"
                        name="number"
                        type="number"
                        value={form.number}
                        onChange={handleInput}
                        required
                    />

                </InputAddressDiv>

                <InputAddressDiv>
                    <InputAddress
                        placeholder="Digite seu bairro"
                        name="neighbourhood"
                        value={form.neighbourhood}
                        onChange={handleInput}
                        required
                    />

                </InputAddressDiv>

                <InputAddressDiv>
                    <InputAddress
                        placeholder="Digite sua cidade"
                        name="city"
                        value={form.city}
                        onChange={handleInput}
                        required
                    />
                </InputAddressDiv>

                <InputAddressDiv>

                    <InputAddress
                        placeholder="Digite seu estado"
                        name="state"
                        value={form.state}
                        onChange={handleInput}
                        required
                    />

                </InputAddressDiv>

                <InputAddressDiv>
                    <InputAddress
                        placeholder="Se necessário, digite seu complemento"
                        name="complement"
                        value={form.complement}
                        onChange={handleInput}

                    />

                </InputAddressDiv>

                <InputButton type="submit">Salvar</InputButton>
            </form>

        </StyledAddress>
    )
}

export default AddressPage
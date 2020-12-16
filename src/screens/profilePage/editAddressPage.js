import React from 'react'
import { EditAddress } from '../../constants/user'
import { useForm } from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import useProtectedPage from '../../hooks/useProtectedPage'
import { StyledAddress, InputAddressDiv, InputAddress } from '../addressPage/styles'
import { InputButton } from '../signupPage/styles'
import Header from '../../components/Header/Header'
import {goToProfilePage} from '../../router/coordinator'
import {ButtonStyled} from '../../components/Header/styles'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import Footer from '../../components/Footer/Footer'



const EditAddressPage = () => {

    useProtectedPage()

    const history = useHistory()
    const { form, onChange } = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: "" })

    const handleInput = (event) => {
        const { value, name } = event.target
        onChange(value, name)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        EditAddress(form, history)
    }

    return (
        <StyledAddress>

           <Header />
           {/* <ButtonStyled onClick={() => goToProfilePage(history)}><ArrowBackIosIcon/></ButtonStyled> */}

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

export default EditAddressPage
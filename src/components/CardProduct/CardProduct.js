import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { InfoContainer, ImageRestaurant, CardStyled, InfoText, InfoName, ImageContainer, TextContainer, PriceText, DescriptionContainer, AddButton, QuantityContainer, NameContainer, RemoveButton } from './styles'
import GlobalStateContext from "../../global/globalStateContext"


const CardProduct = (props) => {
    const history = useHistory()
    const {states,setters} =useContext(GlobalStateContext)

    const saveOrder =(props) =>{
            let newCart = [...states.cart]
            newCart.push(props)
            setters.setCart(newCart)
            props.showModal()
            setters.setRestaurante(props.restaurant)
            setters.setIdProduct(props.id)
    }

    return (
            <CardStyled>
                <ImageContainer>
                    <ImageRestaurant src={props.image} alt={props.name}/>
                </ImageContainer>
                <TextContainer>
                    <DescriptionContainer>
                        <NameContainer>
                            <InfoName>{props.name}</InfoName>
                            <QuantityContainer>2</QuantityContainer>
                        </NameContainer>
                        <InfoText>{props.description}</InfoText>
                    </DescriptionContainer>
                    <InfoContainer>
                            <PriceText>{props.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </PriceText>
                            {/* {states.cart.map(product =>{
                                if (props.id === product.id) {
                                    return (
                                        <RemoveButton id="removeButton">remover</RemoveButton>
                                    )
                                } else {
                                    return (
                                        <AddButton id="addButton" onClick={()=>saveOrder(props)}>adicionar</AddButton>
                                    )   
                                }
                            })} */}
                            <AddButton id="addButton" onClick={()=>saveOrder(props)}>adicionar</AddButton>
                    </InfoContainer>
                </TextContainer>
            </CardStyled>
    )
}

export default CardProduct
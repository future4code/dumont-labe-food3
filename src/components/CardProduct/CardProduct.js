import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { InfoContainer, ImageRestaurant, CardStyled, InfoText, InfoName, ImageContainer, TextContainer, PriceText, DescriptionContainer, AddButton, QuantityContainer, NameContainer } from './styles'
import GlobalStateContex from "../../global/globalStateContext"


const CardProduct = (props) => {
    const history = useHistory()
    const {states,setters} =useContext(GlobalStateContex)

    const saveOrder =(props) =>{
            let newCart = [...states.cart]
            newCart.push(props.name)
            setters.setCart(newCart)
            console.log(states.cart)
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
                            <AddButton onClick={()=>saveOrder(props)}>adicionar</AddButton>
                    </InfoContainer>
                </TextContainer>
            </CardStyled>
    )
}

export default CardProduct
import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { InfoContainer, ImageRestaurant, CardStyled, InfoText, InfoName, ImageContainer, TextContainer, PriceText, DescriptionContainer } from './styles'
import GlobalStateContex from "../../global/globalStateContext"


const CardProduct = (props) => {
    const history = useHistory()
    const {states,setters} =useContext(GlobalStateContex)

    const saveOrder =(props) =>{
            let newCart = [...states.cart]
            newCart.push(props.name)
            setters.setCart(newCart)
            console.log(states.cart)
            history.push("/cart")
    }
    console.log(states.cart)
    return (
            <CardStyled>
                <ImageContainer>
                    <ImageRestaurant src={props.image} alt={props.name}/>
                </ImageContainer>
                <TextContainer>
                    <DescriptionContainer>
                        <InfoName>{props.name}</InfoName>
                        <InfoText>{props.description}</InfoText>
                    </DescriptionContainer>
                    <InfoContainer>
                            <PriceText>{props.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </PriceText>
                            <button onClick={()=>saveOrder(props)}>adicionar</button>
                    </InfoContainer>
                </TextContainer>
            </CardStyled>
    )
}

export default CardProduct
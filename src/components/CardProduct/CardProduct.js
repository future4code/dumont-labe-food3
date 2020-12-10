import React from 'react'
import { useHistory } from 'react-router-dom'
import { InfoContainer, ImageRestaurant, CardStyled, InfoText, InfoName, ImageContainer, TextContainer, PriceText, DescriptionContainer, AddRemoveButton, QuantityContainer, NameContainer } from './styles'

const CardProduct = (props) => {
    const history = useHistory()

    const ChangeCart = () => {
        alert("mudou carrinho")
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
                            <AddRemoveButton onClick={ChangeCart}>adicionar</AddRemoveButton>
                    </InfoContainer>
                </TextContainer>
            </CardStyled>
    )
}

export default CardProduct
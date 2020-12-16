import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToRestaurantPage } from '../../router/coordinator'
import { InfoContainer, ImageRestaurant, CardStyled, InfoText, InfoName, ImageContainer } from './styles'

const CardFeed = (props) => {
    const history = useHistory()

    return (
            <CardStyled onClick={()=> goToRestaurantPage(history,props.id)}>
                <ImageContainer>
                    <ImageRestaurant src={props.image} alt={props.name}/>
                </ImageContainer>
                <InfoName>{props.name}</InfoName>
                <InfoContainer>
                        <InfoText>{props.deliveryTime} min</InfoText>
                        <InfoText>Frete R${props.shipping}</InfoText>
                </InfoContainer>
            </CardStyled>
    )
}

export default CardFeed
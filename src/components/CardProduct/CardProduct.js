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

    const replaceButton = () => {
        const index = states.orderBody.findIndex((i) => i.id === props.id)
        if (index === -1) {
          return (
            <AddButton onClick={()=>saveOrder(props)}>adicionar</AddButton>
          )
          
        } else {
          return (
            <RemoveButton>remover</RemoveButton>
          )
        }
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
                            {states.orderBody.map(product =>{
                                if (props.id === product.id) {
                                    return (
                                        <QuantityContainer>
                                            {product.quantity}
                                        </QuantityContainer>
                                    )
                                } else {
                                    return (
                                        ""
                                    )   
                                }
                            })}
                        </NameContainer>
                        <InfoText>{props.description}</InfoText>
                    </DescriptionContainer>
                    <InfoContainer>
                            <PriceText>{props.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </PriceText>
                            {states.orderBody.length===0
                                ?
                                <AddButton onClick={()=>saveOrder(props)}>adicionar</AddButton>
                                :
                                replaceButton()            
                            }
                    </InfoContainer>
                </TextContainer>
            </CardStyled>
    )
}

export default CardProduct
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import CardProduct from '../../components/CardProduct/CardProduct'
import Header from '../../components/Header/Header'
import { baseUrl } from '../../constants/constants'
import { RestaurantPageContainer, ImageRestaurant, RestaurantContainer, InfoContainer, InfoName, InfoText, ImageContainer, LoadingContainer, CardsContainer, ModalContainer, ModalButton, ModalButtonContainer, SelectStyled, ModalBackground } from './styles'
import LoadingInvert from '../../components/LoadingInvert/LoadingInvert'

const RestaurantPage = () => {
    const history = useHistory()
    const params = useParams()
    const [restaurantDetails, setRestaurantDetails] = useState([])

    useEffect(()=> {
        axios.get(`${baseUrl}/restaurants/${params.id}`,
        {
            headers:{
                auth: localStorage.getItem("token")
            }
        })
        .then((res)=>{
            setRestaurantDetails(res.data.restaurant)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    function goBack() {
        window.history.back()
    }
    
    let modalBack = document.getElementById("modalBack")
    let modalContent = document.getElementById("modalContent")

    function showModal() {
        modalBack.style.display = "block";
        modalContent.style.display = "flex";
    }

    function hideModal() {
        modalBack.style.display = "none";
        modalContent.style.display = "none";
    }

    const goToCartPage =() =>{
       history.push(`/carrinho/${params.id}`)
    }

    return (
        <RestaurantPageContainer>
            <Header goBack={goBack}/>
            {restaurantDetails.length===0
                ?
                <LoadingContainer>
                    <LoadingInvert />
                </LoadingContainer>
                :
                <CardsContainer>
                    <RestaurantContainer>
                        <ImageContainer>
                            <ImageRestaurant src={restaurantDetails.logoUrl}/>
                        </ImageContainer>
                        <InfoName>{restaurantDetails.name}</InfoName>
                        <InfoContainer>
                            <InfoText>{restaurantDetails.deliveryTime} min</InfoText>
                            <InfoText>Frete R${restaurantDetails.shipping}</InfoText>
                        </InfoContainer>
                        <InfoText>{restaurantDetails.address}</InfoText>
                    </RestaurantContainer>
                    {restaurantDetails.products.map(product => {
                        return (
                            <CardProduct 
                                key={product.id}
                                id={product.id}
                                image={product.photoUrl}
                                name={product.name}
                                description={product.description}
                                price={product.price}
                                showModal={showModal}
                            />
                        )
                        })
                    }<button onClick={goToCartPage}>ir para o carrinho</button>
                </CardsContainer>
            }
            <ModalBackground id="modalBack">
            </ModalBackground>
                <ModalContainer id="modalContent">
                    <p>Selecione a quantidade desejada</p>
                    <SelectStyled name="quantity" id="quantity">
                        <option value="0" selected="selected">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </SelectStyled>
                    <ModalButtonContainer>
                        <ModalButton onClick={hideModal}>ADICIONAR AO CARRINHO</ModalButton>
                    </ModalButtonContainer>
                </ModalContainer>
        </RestaurantPageContainer>
    )
}

export default RestaurantPage
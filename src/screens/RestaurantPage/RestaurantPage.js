import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import CardProduct from '../../components/CardProduct/CardProduct'
import Header from '../../components/Header/Header'
import { baseUrl } from '../../constants/constants'
import { RestaurantPageContainer, ImageRestaurant, RestaurantContainer, InfoContainer, InfoName, InfoText, ImageContainer, LoadingContainer, CardsContainer } from './styles'
import LoadingInvert from '../../components/LoadingInvert/LoadingInvert'
import Footer from '../../components/Footer/Footer'

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
                            />
                        )
                        })
                    }<button onClick={goToCartPage}>ir para o carrinho</button>
                </CardsContainer>
            }
        </RestaurantPageContainer>
    )
}

export default RestaurantPage
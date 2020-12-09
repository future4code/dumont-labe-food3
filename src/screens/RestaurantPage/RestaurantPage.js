import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { baseUrl } from '../../constants/constants'
import { RestaurantPageContainer, ImageRestaurant } from './styles'

const RestaurantPage = () => {
    const history = useHistory()
    const params = useParams()
    const [restaurantDetails, setRestaurantDetails] = useState([])

    useEffect(()=> {
        Axios.get(`${baseUrl}/restaurants/${params.id}`,
        {
            headers:{
                auth: localStorage.getItem("token")
            }
        })
        .then((res)=>{
            console.log(res.data.restaurant)
            setRestaurantDetails(res.data.restaurant)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    function goBack() {
        window.history.back()
    }

    return (
        <RestaurantPageContainer>
            <Header goBack={goBack}/>
            <div>
                <ImageRestaurant src={restaurantDetails.logoUrl}/>
                <p>{restaurantDetails.name}</p>
                <p>{restaurantDetails.deliveryTime}</p>
                <p>{restaurantDetails.shipping}</p>
                <p>{restaurantDetails.address}</p>
            </div>
        </RestaurantPageContainer>
    )
}

export default RestaurantPage
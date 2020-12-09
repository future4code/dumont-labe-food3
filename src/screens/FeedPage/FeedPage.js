import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { CardsContainer, FeedPageContainer } from './styles'
import { baseUrl } from '../../constants/constants'
import CardFeed from '../../components/CardFeed/CardFeed'
import { InputLabel, InputAdornment, OutlinedInput } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'


const FeedPage = () => {

    const [restaurants,setRestaurants] = useState([])


    useEffect(()=> {
        Axios.get(`${baseUrl}/restaurants`,
        {
            headers:{
                auth: localStorage.getItem("token")
            }
        })
        .then((res)=>{
            console.log(res.data.restaurants)
            setRestaurants(res.data.restaurants)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])


    return (
        <FeedPageContainer>
            <Header />
            <div>
            <InputLabel htmlFor="input-with-icon-adornment"></InputLabel>
                <OutlinedInput variant="outlined" placeholder="Restaurante" id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    }
                />
                <CardsContainer>
                    {restaurants.map(restaurant =>{
                        return (
                                <CardFeed
                                    key={restaurant.id}
                                    id={restaurant.id}
                                    image={restaurant.logoUrl}
                                    name={restaurant.name}
                                    deliveryTime={restaurant.deliveryTime}
                                    shipping={restaurant.shipping}
                                />
                        )
                    }
                    )}
                </CardsContainer>
            </div>
        </FeedPageContainer>
    )
}

export default FeedPage
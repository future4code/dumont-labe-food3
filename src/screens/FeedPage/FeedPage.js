import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { CardsContainer, FeedPageContainer, Filter, FilterContainer, InputContainer, InputStyled, LoadingContainer } from './styles'
import { baseUrl } from '../../constants/constants'
import CardFeed from '../../components/CardFeed/CardFeed'
import LoadingInvert from '../../components/LoadingInvert/LoadingInvert'
import { useHistory } from 'react-router-dom'


const FeedPage = () => {
    const history = useHistory()
    const [restaurants,setRestaurants] = useState([])
    const [filteredRestaurants,setFilteredRestaurants] = useState([])
    const [searchContent,setSearchContent] = useState("")

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

    const SearchFilter = (e) => {
        const searchArray = restaurants.filter((restaurant) => {
            const name = restaurant.name.toLowerCase()
            return (
                name.includes(e.target.value.toLowerCase())
                )
             })
        setFilteredRestaurants(searchArray)
        setSearchContent(e.target.value)
    }

    function goBack() {
        window.history.back()
    }

    return (
        <FeedPageContainer>
            <Header goBack={goBack}/>
            <div>
                <InputContainer>
                    <InputStyled onChange={SearchFilter} placeholder="Restaurante"/>
                </InputContainer>
                <FilterContainer>
                    <Filter>Todos</Filter>
                    <Filter>Árabe</Filter>
                    <Filter>Asiática</Filter>
                    <Filter>Baiana</Filter>
                    <Filter>Carnes</Filter>
                    <Filter>Hamburguer</Filter>
                    <Filter>Italiana</Filter>
                    <Filter>Mexicana</Filter>
                    <Filter>Sorvetes</Filter>
                    <Filter>Petiscos</Filter>
                </FilterContainer>
                <CardsContainer>
                    {restaurants.length===0
                        ?
                        <LoadingContainer>
                            <LoadingInvert />
                        </LoadingContainer>
                        :
                        searchContent===""
                            ?
                            restaurants.map(restaurant =>{
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
                            })
                            :
                            <div>
                            {filteredRestaurants.length===0
                                ?
                                <p>Não encontramos :(</p>
                                :
                                ""
                            }
                            {filteredRestaurants.map(restaurant =>{
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
                            })}
                            </div>
                    }
                </CardsContainer>
            </div>
        </FeedPageContainer>
    )
}

export default FeedPage
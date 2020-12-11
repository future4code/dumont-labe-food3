import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { CardsContainer, FeedPageContainer, Filter, FilterContainer, InputContainer, InputStyled, LoadingContainer, ModalContainer } from './styles'
import { baseUrl } from '../../constants/constants'
import CardFeed from '../../components/CardFeed/CardFeed'
import LoadingInvert from '../../components/LoadingInvert/LoadingInvert'
import { useHistory } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'


const FeedPage = () => {
    const history = useHistory()
    const [restaurants,setRestaurants] = useState([])
    const [filteredRestaurants,setFilteredRestaurants] = useState([])
    const [categoryRestaurants,setCategoryRestaurants] = useState([])
    const [searchContent,setSearchContent] = useState("")
    const [filter,setFilter] = useState("")

    useEffect(()=> {
        Axios.get(`${baseUrl}/restaurants`,
        {
            headers:{
                auth: localStorage.getItem("token")
            }
        })
        .then((res)=>{
            setRestaurants(res.data.restaurants)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    const SearchFilter = (e) => {
        if(filter===''){
            const searchArray = restaurants.filter((restaurant) => {
                const name = restaurant.name.toLowerCase()
                return (
                    name.includes(e.target.value.toLowerCase())
                    )
                })
            setFilteredRestaurants(searchArray)
            setSearchContent(e.target.value)
        } else {
            const searchArray = categoryRestaurants.filter((restaurant) => {
                const name = restaurant.name.toLowerCase()
                return (
                    name.includes(e.target.value.toLowerCase())
                    )
                 })
            setFilteredRestaurants(searchArray)
            setSearchContent('')  
        }
    }
    
    const FilterCategory = (category) => {
        const filteredArray = restaurants.filter(restaurant =>{
            return restaurant.category === category
        })
        setFilteredRestaurants(filteredArray)
        setCategoryRestaurants(filteredArray)
        setFilter(category)
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
                        <Filter onClick={()=>FilterCategory('')}>
                            {filter===''?<p style={{color:'#5cb646'}}>Todos</p>:<p>Todos</p>}
                        </Filter>
                        <Filter onClick={()=>FilterCategory('Árabe')}>
                            {filter==='Árabe'?<p style={{color:'#5cb646'}}>Árabe</p>:<p>Árabe</p>}
                        </Filter>
                        <Filter onClick={()=>FilterCategory('Asiática')}>
                            {filter==='Asiática'?<p style={{color:'#5cb646'}}>Asiática</p>:<p>Asiática</p>}
                        </Filter>
                        <Filter onClick={()=>FilterCategory('Baiana')}>
                            {filter==='Baiana'?<p style={{color:'#5cb646'}}>Baiana</p>:<p>Baiana</p>}
                        </Filter>
                        <Filter onClick={()=>FilterCategory('Carnes')}>
                            {filter==='Carnes'?<p style={{color:'#5cb646'}}>Carnes</p>:<p>Carnes</p>}
                        </Filter>
                        <Filter onClick={()=>FilterCategory('Hamburguer')}>
                            {filter==='Hamburguer'?<p style={{color:'#5cb646'}}>Hamburguer</p>:<p>Hamburguer</p>}
                        </Filter>
                        <Filter onClick={()=>FilterCategory('Italiana')}>
                            {filter==='Italiana'?<p style={{color:'#5cb646'}}>Italiana</p>:<p>Italiana</p>}
                        </Filter>
                        <Filter onClick={()=>FilterCategory('Mexicana')}>
                            {filter==='Mexicana'?<p style={{color:'#5cb646'}}>Mexicana</p>:<p>Mexicana</p>}
                        </Filter>
                        <Filter onClick={()=>FilterCategory('Sorvetes')}>
                            {filter==='Sorvetes'?<p style={{color:'#5cb646'}}>Sorvetes</p>:<p>Sorvetes</p>}
                        </Filter>
                        <Filter onClick={()=>FilterCategory('Petiscos')}>
                            {filter==='Petiscos'?<p style={{color:'#5cb646'}}>Petiscos</p>:<p>Petiscos</p>}
                        </Filter>
                    </FilterContainer>
                    <CardsContainer>
                        {restaurants.length===0
                            ?
                            <LoadingContainer>
                                <LoadingInvert />
                            </LoadingContainer>
                            :
                            searchContent==="" && filter===""
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
                <Footer />
            </FeedPageContainer>
    )
}

export default FeedPage
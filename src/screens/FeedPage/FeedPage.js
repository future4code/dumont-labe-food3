import Axios from 'axios'
import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import { FeedPageContainer } from './styles'
import { baseUrl } from '../../constants/constants'
import CardFeed from '../../components/CardFeed/CardFeed'
import { InputLabel, InputAdornment, OutlinedInput } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

const FeedPage = () => {

    useEffect(()=> {
        Axios.get(`${baseUrl}/restaurants`,
        {
            headers:{
                auth: localStorage.getItem("token")
            }
        })
        .then((res)=>{
            console.log(res)
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
                
                <CardFeed />
            </div>
        </FeedPageContainer>
    )
}

export default FeedPage
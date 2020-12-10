import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { baseUrl } from '../../constants/constants'
import GlobalStateContext from '../../global/globalStateContext'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import Header from '../../components/Header/Header'
import {ButtonStyled} from '../../components/Header/styles'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import Loading from '../../components/Loading/Loading'

import { goToAdressPage, goToEditProfile, goToFeedPage } from '../../router/coordinator'

import CardOrder from "../../components/CardOrder/cardOrder"
import { Profile, ProfileCPF, ProfileEmail, ProfileEmailDiv, ProfileName } from './styles'


const ProfilePage = () => {

    useProtectedPage()

    const { states, setters } = useContext(GlobalStateContext)

    const history = useHistory()

    const profileInfo = useRequestData(`${baseUrl}/profile`, undefined)




    return (

       
        profileInfo ?

            <Profile>

                <Header />
                <ButtonStyled onClick={() => goToFeedPage(history)}><ArrowBackIosIcon/></ButtonStyled>
                <div>
                    <ProfileName>Nome: {profileInfo.user.name}</ProfileName>
                    <ProfileEmail>Email: {profileInfo.user.email}</ProfileEmail>
                    <ProfileCPF>CPF: {profileInfo.user.cpf}</ProfileCPF>
                    <button onClick={() => goToEditProfile(history)}>Editar</button>

                </div>

                <ProfileEmailDiv>
                    <h4>Endereço cadastrado:</h4>
                    <p>{profileInfo.user.address}</p>
                    <button onClick={() => goToAdressPage(history)}>Editar</button>
                </ProfileEmailDiv>

                <div>
                       <div>
          <CardOrder />
        </div>

                </div>
            </Profile>


            :
            
               <div>
                   <p>Carregando...</p>
               </div>


    )



}

export default ProfilePage
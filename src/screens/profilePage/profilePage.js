import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { baseUrl } from '../../constants/constants'
import GlobalStateContext from '../../global/globalStateContext'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import Header from '../../components/Header/Header'
import {ButtonStyled} from '../../components/Header/styles'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import Edit from '../../assets/img/edit-profile.svg'

import { goToEditAddress, goToEditProfile, goToFeedPage } from '../../router/coordinator'

import CardOrder from "../../components/CardOrder/cardOrder"
import { EditProfile, Profile, ProfileAddress, ProfileAddressTitle, ProfileCPF, ProfileEmail, ProfileEmailDiv, ProfileName } from './styles'


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
                    <EditProfile src={Edit} onClick={() => goToEditProfile(history)} />

                </div>

                <ProfileEmailDiv>
                    <ProfileAddressTitle>Endereço cadastrado:</ProfileAddressTitle>
                    <ProfileAddress>{profileInfo.user.address}</ProfileAddress>
                    <EditProfile src={Edit} onClick={() => goToEditAddress(history)} />
                    
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
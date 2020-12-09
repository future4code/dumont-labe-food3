import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { baseUrl } from '../../constants/constants'
import GlobalStateContext from '../../global/globalStateContext'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { goToAdressPage, goToEditProfile, goToFeedPage } from '../../router/coordinator'

const ProfilePage = () => {

    useProtectedPage()

    const { states, setters } = useContext(GlobalStateContext)

    const history = useHistory()

    const profileInfo = useRequestData(`${baseUrl}/profile`, undefined)



    return (

       
        profileInfo ?

            <div>
                <button onClick={() => goToFeedPage(history)}>Voltar</button>
                <div>
                    <p>Nome: {profileInfo.user.name}</p>
                    <p>Email: {profileInfo.user.email}</p>
                    <p>CPF: {profileInfo.user.cpf}</p>
                    <button onClick={() => goToEditProfile(history)}>Editar</button>

                </div>

                <div>
                    <h4>Endereço cadastrado:</h4>
                    <p>{profileInfo.user.address}</p>
                    <button onClick={() => goToAdressPage(history)}>Editar</button>
                </div>

                <div>

                </div>
            </div>


            :

            <div>
                <p>Carregando...</p>
            </div>


    )


}

export default ProfilePage
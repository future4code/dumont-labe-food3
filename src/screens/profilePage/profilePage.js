import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { baseUrl } from '../../constants/constants'
import GlobalStateContext from '../../global/globalStateContext'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import CardOrder from "../../components/CardOrder/cardOrder"

const ProfilePage = () => {

    useProtectedPage()

    const { states, setters } = useContext(GlobalStateContext)

    const history = useHistory()

    const profileInfo = useRequestData(`${baseUrl}/profile`, undefined)



    return profileInfo ? (
      <div>
        <div>
          <p>Nome: {profileInfo.user.name}</p>
          <p>Email: {profileInfo.user.email}</p>
          <p>CPF: {profileInfo.user.cpf}</p>
        </div>
        <div>
          <h4>Endereço cadastrado:</h4>
          <p>{profileInfo.user.address}</p>
        </div>
        <div>
          <CardOrder />
        </div>
        
      </div>
    ) : (
      <div>
        <p>Carregando...</p>
      </div>
    );
 


}

export default ProfilePage
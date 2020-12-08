import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { goToLoginPage } from '../../router/coordinator'
import { InitialPageContainer } from './styles'
import Loading from '../../components/Loading/Loading'

const InitialPage = () => {
 
    useEffect(()=>{
        setTimeout(RedirectToLogin, 4500);
    },[])
    
    const history = useHistory()
    function RedirectToLogin() {
        goToLoginPage(history)
    }

    return (
            <InitialPageContainer>
                <Loading />
            </InitialPageContainer>
    )
}

export default InitialPage
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { goToLoginPage } from '../../router/coordinator'
import { InitialPageContainer, Title } from './styles'

const InitialPage = () => {
 
    useEffect(()=>{
        setTimeout(RedirectToLogin, 6000);
    },[])
    
    const history = useHistory()
    function RedirectToLogin() {
        goToLoginPage(history)
    }

    return (
        <InitialPageContainer>
            <Title>
                FutureEats
            </Title>
        </InitialPageContainer>
    )
}

export default InitialPage
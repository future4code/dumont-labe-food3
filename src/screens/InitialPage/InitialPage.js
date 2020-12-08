import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { goToLoginPage } from '../../router/coordinator'
import { InitialPageContainer, Logo_FutureEats, Title } from './styles'
import InitialLogo from '../../assets/img/logo-future-eats.png'

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
            <Logo_FutureEats src={InitialLogo} />
        </InitialPageContainer>
    )
}

export default InitialPage
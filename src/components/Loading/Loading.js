import React from 'react'
import InitialLogo from '../../assets/img/logo-future-eats.png'
import { AppLogo, LogoContainer } from './styels'

const Loading = () => {

    return (
        <LogoContainer>
            <AppLogo src={InitialLogo}/>
        </LogoContainer>
    )
}

export default Loading
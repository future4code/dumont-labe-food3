import styled, { keyframes } from 'styled-components'

export const LogoContainer = styled.div `
    background-color: transparent;
`
export const AppLogoMove = keyframes `
    0% {
    transform:  scaleX(0.80) scaleY(0.80) ;
    }
    10% {
    transform: scaleX(1.20) scaleY(1.20) ;
    }
    20% {
    transform: scaleX(1.20) scaleY(1.20) ;
    }
    30% {
    transform: scaleX(1.20) scaleY(1.20) ;
    }
    40% {
    transform:  scaleX(0.80) scaleY(0.80) ;
    }
    50% {
    transform:  scaleX(0.80) scaleY(0.80) ;
    }
    60% {
    transform:  scaleX(0.80) scaleY(0.80) ;
    }
    70% {
    transform: scaleX(1.20) scaleY(1.20) ;
    }
    80% {
    transform: scaleX(1.20) scaleY(1.20) ;
    }
    90% {
    transform: scaleX(1.20) scaleY(1.20) ;
    }
    100% {
    transform:  scaleX(0.80) scaleY(0.80) ;
    }
`
export const AppLogo = styled.img `
    pointer-events: none;
    animation: ${AppLogoMove} infinite 15s linear;
`
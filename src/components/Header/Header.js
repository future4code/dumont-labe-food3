import React from 'react'
import { ButtonStyled, HeaderContainer, PageTitle } from './styles'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { Button } from  '@material-ui/core'
import { useHistory } from 'react-router-dom'

const Header = () => {
    const history = useHistory()

    return (
        <HeaderContainer>
            <ButtonStyled><ArrowBackIosIcon/></ButtonStyled>
            {history.location.pathname==='/feed'
                ?
                <PageTitle>FutureEats</PageTitle>
                :
                <PageTitle>Título da Página</PageTitle>
            }
        </HeaderContainer>
    )
}

export default Header
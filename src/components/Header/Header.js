import React from 'react'
import { ButtonStyled, HeaderContainer, PageTitle, TitleContainer } from './styles'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { useHistory } from 'react-router-dom'

const Header = (props) => {
    const history = useHistory()

    return (
        <div>
            {history.location.pathname==='/feed'
                ?
                <HeaderContainer>
                    <ButtonStyled onClick={props.goBack}><ArrowBackIosIcon/></ButtonStyled>
                    <TitleContainer>
                        <PageTitle>FutureEats</PageTitle>
                    </TitleContainer>
                </HeaderContainer>
                :
                ""
            }
            {history.location.pathname.includes('/restaurantes')
                ?
                <HeaderContainer>
                    <ButtonStyled onClick={props.goBack}><ArrowBackIosIcon/></ButtonStyled>
                    <PageTitle>Restaurante</PageTitle>
                </HeaderContainer>
                :
                ""
            }
        </div>
    )
}

export default Header
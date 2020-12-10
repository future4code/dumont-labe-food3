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
                    <TitleContainer style={{marginLeft:70}}>
                        <PageTitle>Restaurante</PageTitle>
                    </TitleContainer>
                </HeaderContainer>
                :
                ""
            }
            {history.location.pathname==='/perfil'
                ?
                <HeaderContainer>
                    <TitleContainer>
                        <PageTitle>Meu Perfil</PageTitle>
                    </TitleContainer>
                </HeaderContainer>
                :
                ""
            }
        </div>
    )
}

export default Header
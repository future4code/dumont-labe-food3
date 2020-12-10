import React from 'react'
import { ButtonStyled, FooterContainer } from './styles'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { useHistory } from 'react-router-dom'
import { goToCart, goToFeedPage, goToProfilePage } from '../../router/coordinator';

const Footer = (props) => {
    const history = useHistory()

    return (
        <FooterContainer>
            {history.location.pathname==='/feed'
                ?
                <ButtonStyled onClick={()=>goToFeedPage(history)}>
                    <HomeOutlinedIcon style={{color:'#5cb646'}}/>
                </ButtonStyled>
                :
                <ButtonStyled onClick={()=>goToFeedPage(history)}>
                    <HomeOutlinedIcon />
                </ButtonStyled>
            }
            {history.location.pathname==='/cart'
                ?
                <ButtonStyled onClick={()=>goToCart(history)}>
                    <ShoppingCartOutlinedIcon style={{color:'#5cb646'}}/>
                </ButtonStyled>
                :
                <ButtonStyled>
                    <ShoppingCartOutlinedIcon />
                </ButtonStyled>
            }
            {history.location.pathname==='/perfil'
                ?
                <ButtonStyled onClick={()=>goToProfilePage(history)}>
                    <PersonOutlineOutlinedIcon style={{color:'#5cb646'}}/>
                </ButtonStyled>
                :
                <ButtonStyled onClick={()=>goToProfilePage(history)}>
                    <PersonOutlineOutlinedIcon />
                </ButtonStyled>
            }
        </FooterContainer>
    )
}

export default Footer
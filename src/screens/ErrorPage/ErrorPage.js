
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import { goToFeedPage } from '../../router/coordinator'
import { ButtonStyled, ErrorPageContainer } from './styles'


const ErrorPage = () => {
    const history = useHistory()

    return (
        
            <ErrorPageContainer>

                    Desculpe. Página inexistente.
                    <ButtonStyled onClick={()=>goToFeedPage(history)}>Voltar para Início</ButtonStyled>

                <Footer />
            </ErrorPageContainer>
      
    )
}

export default ErrorPage
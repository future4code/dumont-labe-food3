import { Button } from '@material-ui/core'
import styled from 'styled-components'

export const HeaderContainer = styled.div `
    display: flex;
    position:fixed;
    height: 44px;
    width: 360px;
    top: 0;
    border-bottom: 1px solid #b8b8b8;
`
export const PageTitle = styled.p `
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
`
export const TitleContainer = styled.div `
    margin: auto;
`
export const ButtonStyled = styled(Button) `
    padding: 0;
    margin: 0;
`
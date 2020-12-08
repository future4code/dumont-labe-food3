import { Button } from '@material-ui/core'
import styled from 'styled-components'

export const HeaderContainer = styled.div `
    display: flex;
    position:fixed;
    top: 0;
`
export const PageTitle = styled.p `
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    body {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
    }
`
export const ButtonStyled = styled(Button) `
    padding: 0;
    margin: 0;
    /* height: 20px;
    width: 20px; */
`
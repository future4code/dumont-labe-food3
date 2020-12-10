import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const ErrorPageContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 0;
    width: 360px;
    height: 640px;
    border: 1px black solid;
`
export const ButtonStyled = styled.button `
    border: 3px #5cb646 solid;
    background-color: transparent;
    color: #5cb646;
    margin: 20px;
    padding: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    &:hover {
        cursor: pointer;
    }
`
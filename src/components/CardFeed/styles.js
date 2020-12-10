import styled from 'styled-components'

export const InfoContainer = styled.div `
    display: flex;
    justify-content: space-between;
`
export const ImageContainer = styled.div `
    text-align: center;
`
export const ImageRestaurant = styled.img `
    max-height:120px;
`
export const CardStyled = styled.div `
    height: 188px;
    width: 328px;
    border: 1px lightgrey solid;
    border-radius: 5px;
    margin: 8px;
    &:hover {
        cursor: pointer;
    }
`
export const InfoText = styled.p `
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    padding: 1px;
    margin: 4px;
    color: #b8b8b8;
`
export const InfoName = styled.p `
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    padding: 1px;
    margin: 4px;
    color: #5cb646;
`
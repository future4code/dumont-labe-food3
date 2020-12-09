import styled from 'styled-components'

export const InfoContainer = styled.div `
    display: flex;
    justify-content: space-between;
    margin-left: 8px;
    margin-right: 0px;
`
export const ImageContainer = styled.div `
    display: flex;
    align-items: center; 
`
export const ImageRestaurant = styled.img `
    max-width: 96px;
`
export const CardStyled = styled.div `
    display: flex;
    flex-direction: row;
    height: 112px;
    width: 328px;
    border: 1px lightgrey solid;
    border-radius: 5px;
    margin: 8px;
`
export const InfoText = styled.p `
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    padding: 1px;
    margin: 4px;
    color: #b8b8b8;
`
export const PriceText = styled.p `
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    padding: 1px;
    margin: 4px;
    color: black;
`
export const InfoName = styled.p `
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    padding: 1px;
    margin: 4px;
    color: #5cb646;
`
export const TextContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const DescriptionContainer = styled.div `
    text-align: left;
    margin: 8px;
`
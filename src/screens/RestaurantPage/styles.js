import styled from 'styled-components'

export const RestaurantPageContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 360px;
    height: 640px;
    border: 1px black solid;
`
export const ImageRestaurant = styled.img `
    max-height: 120px;
`
export const RestaurantContainer = styled.div `
    border: 1px transparent solid;
    border-radius: 5px;
    margin: 8px;
    text-align: left;
`
export const InfoContainer = styled.div `
    display: flex;
    justify-content: space-between;
`
export const ImageContainer = styled.div `
    text-align: center;
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
export const LoadingContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`
export const CardsContainer = styled.div `
    height: 595px;
    text-align: center;
    margin-top: 40px;
    overflow: auto;
`


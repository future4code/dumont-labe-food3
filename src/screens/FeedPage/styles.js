import styled from 'styled-components'

export const FeedPageContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 360px;
    height: 640px;
    border: 1px black solid;
`
export const CardsContainer = styled.div `
    height: 400px;
    text-align: center;
    overflow: auto;
`
export const InputContainer = styled.div `
    text-align: center;
`
export const FilterContainer = styled.div `
    display: flex;
    align-items: center;
    width: 330px;
    overflow: auto;
`
export const Filter = styled.p `
    margin-right: 10px;
    &:hover{
        cursor: pointer;
    }
`
export const InputStyled = styled.input `
    height: 56px;
    width: 328px;
`
export const LoadingContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 180px;
`
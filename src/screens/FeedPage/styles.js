import styled from 'styled-components'

export const FeedPageContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 0;
    width: 360px;
    height: 640px;
    border: 1px black solid;
`
export const CardsContainer = styled.div `
    height: 435px;
    text-align: center;
    overflow: auto;
`
export const InputContainer = styled.div `
    text-align: center;
    margin-top: 10px;
`
export const FilterContainer = styled.div `
    display: flex;
    align-items: center;
    width: 330px;
    height: 42px;
    margin-left: 8px;
    overflow-x: scroll;
    overflow-y: hidden;
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

export const ProgressContainer = styled.div`
  width: 315px;
  height: 130px;
  margin-top: 350px;

  padding: 24px;
  background-color: #5cb646;
  position: fixed;
  display: flex;
  flex-direction: column;
  /* margin: 99px 0 49px; */
`;

export const OrderProgress = styled.p`
  width: 256px;
  height: 18px;
  /* margin: 0 0 2px 24px; */
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RestaurantName = styled.p`
  width: 256px;
  height: 18px;
  /* margin: 8px 0 8px 24px; */
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TotalPrice = styled.h3`
  width: 256px;
  height: 18px;
  /* margin: 8px 0 0 24px; */
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
  
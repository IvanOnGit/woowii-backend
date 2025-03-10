import styled from "styled-components";

export const ContainerDivisionColumns = styled.div`
     display: grid;
     grid-template-columns: 1fr 1fr;
`
export const ContainerColumnSelects = styled.div`
  width: 20vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-right: 0.063rem solid #460BFF;
`
export const ContainerLogoColumnSelects = styled.div`
    margin-top: -30.625rem;
    display: flex;
    border-bottom: 0.063rem solid #460BFF;
    padding: 1.563rem 0 1.563rem 0;
`
export const LogoColumnSelects = styled.img`
    margin: auto;
    width: 10.625rem;
`
export const ContainerLogoCompAndUser = styled.div`
    display: flex;
    margin-left: 2.5rem;
    p{
        font-size: 1.25rem;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
        color: #460BFF;
        margin-top: 1.875rem;
    }
`
export const ContainerFirstThreeSelects = styled.div`
    display: block;
    width: 19.063rem;
    height: 12.5rem;
    margin-top: 1.25rem;
    z-index: 1;
    border-bottom: 0.063rem solid #460BFF;
    select{
        width: 12.5rem;
        margin-left: 3.125rem;
        border: none;
        margin-bottom: 0.625rem;
    }
    label{
        font-size: 0.75rem;
        font-weight: 600;
        font-family: 'Inter', sans-serif;
        width: 100%;
        margin-left: 3.125rem;
        max-width: 37.5rem;
    }
`
export const ContainerSecondThreeSelects = styled.div`
    display: block;
    width: 19.063rem;
    height: 12.5rem;
    margin-top: 1.25rem;
    z-index: 1;
    border-bottom: 0.063rem solid #460BFF;
    select{
        width: 12.5rem;
        margin-left: 3.125rem;
        border: none;
        margin-bottom: 0.625rem;
    }
    label{
        font-size: 0.75rem;
        font-weight: 600;
        font-family: 'Inter', sans-serif;
        width: 100%;
        margin-left: 3.125rem;
        max-width: 37.5rem;
    }
`
export const ContainerThirdThreeSelects = styled.div`
    display: block;
    width: 19.063rem;
    height: 9.375rem;
    margin-top: 1.25rem;
    z-index: 1;
    border-bottom: 0.063rem solid #460BFF;
    select{
        width: 12.5rem;
        margin-left: 3.125rem;
        border: none;
        margin-bottom: 0.625rem;
    }
    label{
        font-size: 0.75rem;
        font-weight: 600;
        font-family: 'Inter', sans-serif;
        width: 100%;
        margin-left: 3.125rem;
        max-width: 37.5rem;
    }
`
export const BtnChatColumnSelects = styled.button`
    margin: 0.25rem 0 0 4.375rem;
    width: 11.313rem;
    height: 1.938rem;
    border-radius: 2.813rem;
    background: #FFF;
    color: #460BFF;
    cursor: pointer;
    z-index: 1;
    &:hover{
        background: #460BFF;
        color: #FFF;
    }
`
export const ContainerColumnBody = styled.div`
  width: 100vw;
  height: 100vh;
  display: block;
  margin-left: -19.375rem;
`

export const ContainerWrapper = styled.div`
  text-align: center;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-left: 3.125rem;
  margin-top: -5.625rem;
  h2 {
    margin-bottom: 0;
    margin-left: 1rem;
    padding-bottom: 0;
    font-size: 1.563rem;
    color: #460BFF;
  }
  .divLastButton{
    margin: -1.875rem 6.25rem 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const StepsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: 12.5rem;
  margin-top: 1.25rem;
  .containerImgTxt{
    display: flex;
    gap: -0.625rem;
    width: 100%;
  }
  #one{
    min-width: 8.75rem;
    font-size: 1.563rem;
    font-weight: 700;
    color: #460BFF;
  }
  #two{
    margin-top: 0.625rem;
    min-width: 8.75rem;
    font-size: 1.563rem;
    font-weight: 700;
    color: #460BFF;
  }
`;

export const StepCard = styled.div`
  position: relative;
  width: 18.75rem;
  text-align: center;
  margin-right: 4.375rem;
`;

export const StepNumber = styled.div`
  position: absolute;
  top: 4rem;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
  color: white;
  font-size: 6rem;
  font-weight: bold;
  border-radius: 50%;
  width: 3.75rem;
  height: 3.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0.125rem 0.125rem 0.625rem rgba(0, 0, 0, 0.2);
`;

export const StepImage = styled.img`
  width: 150%;
  border-radius: 0.938rem;
  height: 13rem; 
`;

export const StepText = styled.div`
  p {
    font-size: 1rem;
    color: #333;
    text-align: left;
  }
`;

export const BtnNextPage = styled.button`
  width: 11.313rem;
  height: 1.938rem;
  border-radius: 2.813rem;
  background: #FFF;
  color: #460BFF;
  cursor: pointer;
  z-index: 1;
  &:hover{
    background: #460BFF;
    color: #FFF;
  }
`
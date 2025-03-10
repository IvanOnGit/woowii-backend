import styled from "styled-components";

export const BackSecondScreen = styled.div`
    width: 100vw;
    height: 100vh;
    background: #2020B3; 
`
export const LateralBlueCover = styled.div`
    position: relative;
    left: 1375px;
    width: 1.25rem;
    height: 100vh;
    background: #2020B3;
`
export const WrapperImageSecond = styled.img`
  position: fixed;
  top: -3.125rem;
  left: -9.375rem;
  width: 100vw;
  height: 102vh;
  margin-top: 3.125rem; 
  background-image: url("/images/secondScreen.svg"); 
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;  
`
export const DivContainerLogo = styled.div`
    position: relative;
    display: flex;
    top: -50rem;
    justify-content: center;
    z-index: 1;
`
export const LogoInitSecondStyled = styled.img`
    width: 18.75rem;
    height: 5.25rem;
`
export const DivContainerButton = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    top: -10.625rem;
`
export const ButtonNextInitSecond = styled.button`
    width: 14.313rem;
    height: 3.375rem;
    background: #8FFF00;
    color: #2020B3;
    font-size: 1.25rem;
    font-weight: bold;
    font-family: 'Inter', sans-serif;
    border-radius: 2.813rem;
    cursor: pointer;
    position: absolute;
    margin-left: -5rem;
    margin-top: 5rem;
`
import styled from "styled-components";

export const BackInitialScreen = styled.div`
    width: 100vw;
    height: 100vh;
    background: #2020B3 ;
    z-index: -1;
`;

export const WrapperImageInit = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url("/images/initialScreen.svg"); 
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
`;

export const ButtonNext = styled.button`
    position: relative;
    width: 3.25rem;
    height: 3.25rem;
    left: 78.125rem;
    top: 37.5rem;
    background-image: url("/images/BtnInitialScreen.svg");
    background-color: #2020B3;
    border-radius: 0.625rem;
    border: none;
    cursor: pointer;
    z-index: 1;
`;
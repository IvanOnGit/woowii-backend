import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    justify-content: center;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;

    

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

export const HeaderContainerWrapper = styled.div`
  display: flex;
  width: 100%;

  input {
    padding: 0.6rem;
    margin-top: 1.5rem;
    margin-left: 25rem;
    width: 20rem;
    border-radius: 1rem;
    border: 1px solid white;
    text-align: center;
  }
`;

export const ContainerLogo = styled.div`
    img {
        width: 10rem;
        margin-top: 1.5rem;
        margin-left: 1.5rem;
    }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 10%;
  padding: 1.5rem;
  justify-content: flex-end;
`;

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  color: white;

  p {
    display: flex;
    margin: 0; 
  }

  img {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }
`;

export const SearchBar = styled.div``;

export const BackgroundImage = styled.div`
    background-image: linear-gradient(to bottom, 
                      rgba(0, 0, 0, 1) 10%, 
                      rgba(0, 0, 0, 0.7) 70%, 
                      rgba(0, 0, 0, 0) 90%), 
                      url(/images/JobOpportunityBackground.png);
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 50rem; // Cambiado a 100% para que coincida con el Wrapper
    position: absolute; // Cambiado a absolute para que se superponga al contenido
    top: 0;
    left: 0;
    z-index: -1; // Asegúrate de que esté detrás del contenido
`;



export const MainContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 5rem;
    margin-left: 10rem;
    gap: 3rem;
`;

export const MainContainerImage = styled.div`
    height: 21rem;
    border-radius: 1rem;
    display: flex;
    background-color: white;
    align-items: center;
    justify-content: center;
    img {
        width: 18rem;
        height: 18rem;
        transform: scaleX(-1);
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }
`;

export const MainContainerText = styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;

    h1 {
        color: #8FFF00;
        font-weight: 400;
        margin: 0;
    }
`;

export const MainContainerFirstText = styled.div`
    display: flex;
    color: white;
    gap: 3rem;

    h3 {
        font-size: 1.5rem;
    }

    p {
        font-size: 1.2rem;
        margin: 0;
    }
`;

export const MainContainerSecondText = styled.div`
    display: flex;
    flex-direction: column;
    color: white;

    h2 {
        margin: 0;
        margin-top: 1rem;
        font-size: 1.8rem;
    }

    p {
        font-size: 1.5rem;
        font-weight: 300;
    }
`;

export const MatchDetailsContainer = styled.div`
    display: flex;
    margin-top: 2rem;
    margin-left: 15rem;

    img {
        width: 7rem;
        height: 7rem;
    }
`;

export const MatchDetailsText = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    color: white;
    margin-left: 9rem;
`;

export const MatchDetailsTextItems = styled.div`
    display: flex;
    gap: 3rem;

    p {
        font-size: 1.2rem;
        margin: 0;
    }

    img {
        height: 0.5rem;
    }
`;

export const CompatibilityContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    color: white;
    margin-top: 1rem;
    margin-left: 5rem;

    h2 {
        margin: 0;
        margin-bottom: 1rem;
    }

    img {
        width: 12rem;
        height: 2rem;
    }
`;

export const WhatWillYouDoContainer = styled.div`
    width: 100%;
    margin-left: 44rem;
    margin-top: 3rem;
    font-family: 'Roboto', sans-serif;
    h2 {
        margin: 0;
        font-size: 2rem;
    }

    p {
        margin: 0;
        margin-top: 4rem;
        margin-left: -12rem;
    }
`;

export const WhoWillYouWorkWithContainer = styled.div`
     width: 100%;
    margin-left: 40rem;
    margin-top: 3rem;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    h2 {
        margin: 0;
        font-size: 2rem;
    }

    img:first-of-type {
        margin-top: 0.5rem;
        width: 5rem;
        height: 0.5rem;
    }

    img:last-of-type {
        margin-top: 2rem;
        width: 19rem;
        height: 19rem;
    }
`;

export const SurvivalKit = styled.div`
    width: 100%;
    margin-left: 32rem;
    margin-top: 3rem;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    h2 {
        margin: 0;
        font-size: 2rem;
    }

    img:first-of-type {
        margin-top: 3rem;
        width: 35rem;
    }
`;

export const OurSelectionProcess = styled.div`
    width: 100%;
    margin-left: 35rem;
    margin-top: 3rem;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    h2 {
        margin: 0;
        font-size: 2rem;
    }

    img:first-of-type {
        margin-top: 0.5rem;
        width: 5rem;
        height: 0.5rem;
    }

    img:last-of-type {
        margin-top: 2rem;
        margin-left: -8rem;
        width: 45rem;
    }
`;

export const ResponsabilitiesContainer = styled.div`
    width: 100%;
    margin-left: 40rem;
    margin-top: 3rem;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    h2 {
        margin: 0;
        font-size: 2rem;
    }
`;

export const GreenUnderline = styled.img`
    margin-top: 0.5rem;
    width: 5rem;
    height: 0.5rem;
`;

export const ResponsabilitiesItems = styled.div`
    p img {
        margin-top: 2rem;
        margin-left: -8rem;
        margin-right: 1rem;
        width: 1rem;
        height: 1rem;
    }
`;

export const WhatAreWeLookingFor = styled.div`
    width: 100%;
    margin-left: 40rem;
    margin-top: 3rem;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    h2 {
        margin: 0;
        font-size: 2rem;
    }

    img:last-of-type {
        margin-top: 2rem;
        width: 45rem;
        margin-left: -15rem;
    }
`;

export const IfYouGotHere = styled.img`
    width: 35rem;
    margin-left: 30rem;
    margin-top: 3rem;
`;

export const ApplyNowButton = styled.button`
    margin-left: 43rem;
    margin-top: 2rem;
    margin-bottom: 3rem;
    border-radius: 2rem;
    background-color: #8FFF00;
    
    button {
        color: black;
        background-color: #8FFF00;
        padding: 0.5rem;
        border-radius: 2rem;
        border: none;
        font-family: 'Roboto', sans-serif;
        font-size: 1.5rem;
        font-weight: 600;
    }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

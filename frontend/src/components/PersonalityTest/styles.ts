import { Link } from "react-router-dom"
import styled from "styled-components"

export const ContainerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
`
export const DivContainerLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const LogoSecondPageStyled = styled.img`
    width: 18.75rem;
    height: 5.25rem;
    position: absolute;
    margin-bottom: 35rem;
`

export const ImgFondoSecondPage = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
`
export const DivContainerButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-top: 25rem;
`
export const ButtonNextSecondPage = styled.button`
    width: 15rem;
    height: 2.5rem;
    background: #8FFF00;
    color: #000;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Inter', sans-serif;
    border-radius: 3rem;
    cursor: pointer;
    display: flex;
    text-align: center;
    justify-content: center;
    gap: 1rem;
    text-decoration: none;
    align-items: center;
    padding-left: 1rem;
`;

export const StyledLink = styled(Link)`
    text-decoration: none; /* Evita el subrayado del enlace */
`;

export const PersonalityText = styled.div`
display: flex;
position: absolute;
flex-direction: column;
font-family: 'Roboto', sans-serif;
margin-right: 40rem;

h1 {
    font-size: 3rem;
    margin: 0;
}

p {
    font-size: 2rem;
    margin: 0;
}

img {
    position: absolute;
    margin-left: 50rem;
}

img:last-of-type {
    margin-left: 0;
    position: absolute;
}
`;
import styled from "styled-components";

export const DivContainerStyled = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    align-items: center;
`

export const LogoAndTitleWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
`
export const LogoRegistroUsuarioStyled = styled.img`
    width: 40%;
    height: 80%;
`
export const TxtInfoRegistroUsuarioStyled = styled.p`
    text-align: center;
    font-size: 1rem;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
`

export const LinkAccountButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10%;
    gap: 1rem;
`

export const Buttons = styled.button`
    padding: 0.5rem;
    background-color: transparent;
    border: 1px solid blue;
    border-radius: 1rem;
    width: 20%;
    margin-bottom: 1rem;
    color: blue;
    cursor: pointer;
`

export const StyledSpan = styled.span`
    height: 1px;
    width: 20rem;
    background-color: black;
    margin-bottom: 1rem;
`
export const FormRegistroUsuario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    gap: 0.4rem;
    label{
        font-size: 1rem;
        width: 18.31rem;
        font-family: 'Roboto', sans-serif;
    }
    input{
        width: 18.31rem;
        height: 2.1rem;
        border-radius: 0.5rem;
        outline: none;
        border: 1px solid black;
        padding-left: 1rem;
    }
    input[type = submit]{
        margin-top: 1rem;
        border-radius: 3rem;
        border: none;
        font-weight: 700;
        color: #FFF;
        background: #460BFF;
        cursor: pointer;
        padding-left: 0;
    }
    input[type = submit]:hover{
        background-color: #75B300;
        color: #FFF;
    }
`

export const IniciaSesionStyled = styled.p`
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    color: #460BFF;
    margin: 0;
    padding-top: 3rem;
    a{
        text-decoration: none ;
    }
    a:hover{
        color: #FF00CD;
    }
`
export const BtnLinksSocialStyled = styled.div`
    display: flex;
    align-items: center;
    height: 50%;
    gap: 2rem;
    img{
        cursor: pointer;
    }
    #one:hover{
        background-image: url('./src/images/linkedinColor.png');
        background-size: cover;
        transition: all 0.3s ease-in-out;
    }
    #two:hover{
        background-image: url('./src/images/instagramcolor.png');
        background-size: cover;
        transition: all 0.3s ease-in-out;
    }
    #three:hover{
        background-image: url('./src/images/twittercolor.png');
        background-size: cover;
        transition: all 0.3s ease-in-out;
    }
    #four:hover{
        background-image: url('./src/images/spotifycolor.png');
        background-size: cover; 
        transition: all 0.3s ease-in-out;
    }
`

export const TextoMiniInfoRegUser = styled.p`
    font-size: 0.5rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    width: 100%;
    margin-left: 50rem;
    margin-bottom: 1rem;
`

export const SemiCircleStyled = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    width: 60%;
    height: 100vh;
    background: #FFF;
    border-radius: 50% 0 0 50%;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
`

export const WrapperImage = styled.img`
  position: fixed;
  top: 0;
  left: -20.625rem;
  width: 100vw;
  height: 100vh;
  background-image: url("/images/backgroundCompanyForm.svg");
  background-position: center;
  z-index: -1;  
`
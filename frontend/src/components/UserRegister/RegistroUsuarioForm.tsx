import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Popup from "../Popup/Popup"
import { Link } from "react-router-dom";
import { BtnLinksSocialStyled, Buttons, DivContainerStyled, FormRegistroUsuario, IniciaSesionStyled, LinkAccountButtons, LogoAndTitleWrapper, LogoRegistroUsuarioStyled, SemiCircleStyled, StyledSpan, TextoMiniInfoRegUser, TxtInfoRegistroUsuarioStyled, WrapperImage} from "./styles";

export default function RegistroUsuarioForm() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const navigate = useNavigate();
  
  const openPopup = () => setIsPopupOpen(true)
  const closePopup = () => setIsPopupOpen(false)
  
  const handleSocialLogin = () => {
    navigate("/UserFirstGift");
  }

    return (
        <>
            <WrapperImage />
        <SemiCircleStyled>
                <DivContainerStyled>
                    <LogoAndTitleWrapper>
                        <LogoRegistroUsuarioStyled src="/images/GreenLogoDemo.svg" />
                        <TxtInfoRegistroUsuarioStyled>
                            CREA UN USUARIO O INGRESA A TU CUENTA
                        </TxtInfoRegistroUsuarioStyled>
                    </LogoAndTitleWrapper>
                    <LinkAccountButtons>
                        <Buttons onClick={handleSocialLogin}>Conectar con Google</Buttons>
                        <Buttons onClick={handleSocialLogin}>Conectar con LinkedIn</Buttons>
                    </LinkAccountButtons>
                    <StyledSpan></StyledSpan>
                    <FormRegistroUsuario>
                        <label htmlFor="mail">EMAIL DE USUARIO</label>
                        <input type="email" name="mail" id="mail" placeholder="Introduzca su email " />
                        <label htmlFor="name">NOMBRE COMPLETO</label>
                        <input type="text" name="name" id="name" placeholder="Introduzca nombre y apellido" />
                        <label htmlFor="pass">CONTRASEÑA</label>
                        <input type="password" name="pass" id="pass" placeholder="Elija contraseña " />
                        <Link to={`/FirstGift`}>
                            <input type="submit" value="CREAR CUENTA" />
                        </Link>
                    </FormRegistroUsuario>
                    <IniciaSesionStyled>
                        ¿Ya tienes cuenta?  <a id="inicio" onClick={openPopup} href="#">Inicia sesión</a>
                    </IniciaSesionStyled>
                    <Popup isOpen={isPopupOpen} onClose={closePopup} />
                    <BtnLinksSocialStyled>
                        <img id="one" src="/images/linkedinGrey.svg" alt="Linkedin icon" />
                        <img id="two" src="/images/instagramgrey.svg" alt="Instagram icon" />
                        <img id="three" src="/images/twittergrey.svg" alt="Twitter icon" />
                        <img id="four" src="/images/spotifygrey.svg" alt="Spotify icon" />
                    </BtnLinksSocialStyled>
                    <TextoMiniInfoRegUser>
                        By tapping “Create account or “Sign in”, you agree to our Terms. Learn how we process your data in our Privacy Policy and Cookies Policy
                    </TextoMiniInfoRegUser>
            </DivContainerStyled>
            </SemiCircleStyled>
        </>
  )
}

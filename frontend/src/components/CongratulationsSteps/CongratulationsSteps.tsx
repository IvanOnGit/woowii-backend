import { Link } from "react-router-dom"
import { ButtonNextSecondPage, ContainerProgressBar, ContainerProgressBarBucks, ContainerProgressBarText, ContainerText, ContainerWrapper, DivContainerButton, DivContainerLogo,   ImgFondoSecondPage,   LogoSecondPageStyled } from "./styles";

export default function CongratulationsSteps() {
  return (
      <>
          <ContainerWrapper>
            <DivContainerLogo>
                <LogoSecondPageStyled src="/images/GreenLogoDemo.svg" />
            </DivContainerLogo>
            <ContainerText>
            <h1>FELICITACIONES</h1>
            <h2>Culminaste tu paso a paso.<br />¡Ya sos parte del cambio!</h2>
            </ContainerText>
            <ImgFondoSecondPage src="/images/RewardImage.png" alt="Fondo Wiibuck" />
            <ContainerProgressBarBucks>
                <p>50 Wiibucks</p>
                <p>100 Wiibucks</p>
                <p>200 Wiibucks</p>
                <p>50 Wiibucks</p>
            </ContainerProgressBarBucks>
            <ContainerProgressBar>
              <img src="/images/CircleChecked.png" alt="" />
              <span></span>
              <img src="/images/CircleChecked.png" alt="" />
              <span></span>
              <img src="/images/CircleChecked.png" alt="" />
              <span></span>
              <img src="/images/CircleChecked.png" alt="" />
            </ContainerProgressBar>
            <ContainerProgressBarText>
                <p>Crea tu perfil</p>
                <p>Historias en <br />lugar de CV</p>
                <p>Assessment</p>
                <p>Publica tu perfil, e <br /> inicia tus primeras <br /> búsquedas</p>
            </ContainerProgressBarText>
            <DivContainerButton>
                <Link to={"/JobFinder"}>
                    <ButtonNextSecondPage>
                        Continuar
                    </ButtonNextSecondPage>
                </Link>
            </DivContainerButton>
        </ContainerWrapper>
    </>
  )
}
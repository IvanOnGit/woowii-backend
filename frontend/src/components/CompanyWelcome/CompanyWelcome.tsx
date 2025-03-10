import { Link } from "react-router-dom";
import { ButtonNextTerceraPage, ContainerWrapper, DivContainerLogoTerPage, ImgFondoTerceraPage, LogoTerceraPageStyled } from "./styles";

export default function ThirdPage() {
  return (
      <>
          <ContainerWrapper>
                <DivContainerLogoTerPage>
                    <LogoTerceraPageStyled src="/images/LogoBlue.svg" />
                </DivContainerLogoTerPage>
              <ImgFondoTerceraPage src="/images/welcomeBlue.svg" alt="Fondo Tercera Pagina" />
              <Link to={"/RegisterCompanyProfile"}>
                <ButtonNextTerceraPage>
                    Continuar
                </ButtonNextTerceraPage>
              </Link>
        </ContainerWrapper>
    </>
  )
}
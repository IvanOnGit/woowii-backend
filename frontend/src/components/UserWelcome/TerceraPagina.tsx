import { Link } from "react-router-dom";
import { ButtonNextTerceraPage, ContainerWrapper, DivContainerLogoTerPage, ImgFondoTerceraPage, LogoTerceraPageStyled } from "./styles";

export default function TerceraPagina() {
  return (
      <>
          <ContainerWrapper>
                <DivContainerLogoTerPage>
                    <LogoTerceraPageStyled src="/images/GreenLogoDemo.svg" />
                </DivContainerLogoTerPage>
              <ImgFondoTerceraPage src="/images/imgtercerapagina.svg" alt="Fondo Tercera Pagina" />
              <Link to={"/SelectAvatar"}>
                <ButtonNextTerceraPage>
                    Continuar
                  </ButtonNextTerceraPage>
              </Link>
        </ContainerWrapper>
    </>
  )
}

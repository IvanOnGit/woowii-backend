import { Link } from "react-router-dom"
import { ButtonNextSecondPage, ContainerWrapper, DivContainerButton, DivContainerLogo,   ImgFondoSecondPage,   LogoSecondPageStyled } from "./styles"


export default function CompanyFirstGift() {
  return (
      <>
          <ContainerWrapper>
            <DivContainerLogo>
                <LogoSecondPageStyled src="/images/LogoBlue.svg" />
            </DivContainerLogo>
            <ImgFondoSecondPage src="/images/firstwiibuck.svg" alt="Fondo Wiibuck" />
            <DivContainerButton>
                <Link to={"/CompanyWelcome"}>
                    <ButtonNextSecondPage>
                        Continuar
                    </ButtonNextSecondPage>
                </Link>
            </DivContainerButton>
        </ContainerWrapper>
    </>
  )
}
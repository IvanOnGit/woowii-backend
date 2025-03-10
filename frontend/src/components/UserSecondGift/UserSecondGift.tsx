import { Link } from "react-router-dom"
import { ButtonNextSecondPage, ContainerWrapper, DivContainerButton, DivContainerLogo,   ImgFondoSecondPage,   LogoSecondPageStyled } from "./styles"


export default function UserSecondGift() {
  return (
      <>
          <ContainerWrapper>
            <DivContainerLogo>
                <LogoSecondPageStyled src="/images/GreenLogoDemo.svg" />
            </DivContainerLogo>
            <ImgFondoSecondPage src="/images/firstwiibuck.svg" alt="Fondo Wiibuck" />
            <DivContainerButton>
                <Link to={"/PersonalityTest"}>
                    <ButtonNextSecondPage>
                        Continuar
                    </ButtonNextSecondPage>
                </Link>
            </DivContainerButton>
        </ContainerWrapper>
    </>
  )
}

import { Link } from "react-router-dom";
import { BtnCompanyChoose, 
    BtnTalentChoose, 
    ContainerButtonsChoose, 
    ContainerChoose, 
    ContainerChooseCenter, 
    ContainerChooseLeft, 
    ContainerChooseRight, 
    ContainerDegradado, 
    DegradadoChoose, 
    DivContainerLogoChoose, 
    LogoChoose, 
    MobileCompanyInit, 
    MobileUserInit } from "./styles";

export default function ChooseTalentCompany() {
  return (
    <ContainerChoose>
        <ContainerChooseLeft >
            <MobileUserInit src="/images/mobileUser.svg" alt="Movil de Usuario"/>
        </ContainerChooseLeft>
        <ContainerChooseCenter>
            <DivContainerLogoChoose>
                <LogoChoose src="/images/greenLogoLittle.svg" alt="Movil de Empresa"/>
            </DivContainerLogoChoose>
            <ContainerButtonsChoose>
            <Link to = {"/RegisterUserForm"}>
                <BtnTalentChoose src="/images/soyTalento.svg" alt="Boton de Talento"/>
            </Link>
            <Link to={"/RegisterCompanyForm"}>
                <BtnCompanyChoose src="/images/soyEmpresa.svg" alt="Boton de Empresa"/>
            </Link>
            </ContainerButtonsChoose>
            <ContainerDegradado>
                <DegradadoChoose src="/images/degradadoChoose.svg" alt="Degradado"/>
            </ContainerDegradado>
        </ContainerChooseCenter>
        <ContainerChooseRight>
            <MobileCompanyInit src="/images/mobileCompany.svg" alt="Movil de Empresa"/>
        </ContainerChooseRight>
    </ContainerChoose>
  )
}
import { ContainerWrapper, StepsContainer, StepCard, StepImage, StepText, ContainerColumnSelects, LogoColumnSelects, ContainerColumnBody, ContainerDivisionColumns, ContainerLogoColumnSelects, ContainerLogoCompAndUser, ContainerFirstThreeSelects, ContainerSecondThreeSelects, ContainerThirdThreeSelects, BtnChatColumnSelects, BtnNextPage } from "./styles";
import step1 from "/images/oneCompany.svg";
import step2 from "/images/twoCompany.svg";
import step3 from "/images/threeCompany.svg";
import { Avatar } from "../NewPost/styles";
import { Link } from "react-router-dom";

export default function StepsProfileCompany() {
  return (
    <>
    <ContainerDivisionColumns>
    <ContainerColumnSelects>
        <ContainerLogoColumnSelects>
            <LogoColumnSelects />
        </ContainerLogoColumnSelects>
        <ContainerLogoCompAndUser>
            <Avatar>
                <img src="/images/avatarCompany1.svg" alt="Company Avatar" />
            </Avatar>
            <p>@UserEmpresa</p>
        </ContainerLogoCompAndUser>
        <ContainerFirstThreeSelects> 
            <label htmlFor="culture">Cultura y Valores</label>
            <select name="culture">
                <option value="" selected>Elige una opción</option>
                <hr></hr>
                <option value="value1">Colaborativa</option>
                <option value="value2">Competitiva</option>
                <option value="value3">Estructurada</option>
                <option value="value4">Relajada</option>
                <option value="value5">Ritmo Acelerado</option>
            </select>
            <label htmlFor="culture">Estructura Organizativa</label>
            <select  name="culture">
                <option value="" selected>Elige una opción</option>
                <hr></hr>
                <option value="value1">Jerárquica</option>
                <option value="value2">Funcional</option>
                <option value="value3">Matricial</option>
                <option value="value4">Plana (Horizontal)</option>
                <option value="value5">en Red</option>
                <option value="value6">por Proyectos</option>
                <option value="value7">Divisional</option>
                <option value="value8">Circular</option>
                <option value="value9">Hipocrática</option>
                <option value="value10">Híbrida</option>
            </select>
            <label htmlFor="ambiente">Ambiente Laboral</label>
            <select name="ambiente">
                <option value="" selected>Elige una opción</option>
                <hr></hr>
                <option value="value1">Tradicional</option>
                <option value="value2">Abierto(OpenOffice)</option>
                <option value="value3">Híbrido</option>
                <option value="value4">Remoto</option>
                <option value="value5">Creativo</option>
                <option value="value6">Colaborativo</option>
                <option value="value7">Alta Presión</option>
                <option value="value8">StartUp</option>
                <option value="value9">Industrial</option>
                <option value="value10">Servicio al Cliente</option>
            </select>
            <label htmlFor="ambiente">Tipo de Liderazgo</label>
            <select name="ambiente">
                <option value="" selected>Elige una opción</option>
                <hr></hr>
                <option value="value1">Toma de decisiones centralizada</option>
                <option value="value2">Cadena de mando clara</option>
                <option value="value3">Supervisión directa</option>
                <option value="value4">Procedimientos estandarizados</option>
                <option value="value5">Control estricto</option>
                <option value="value6">Comunicación formal</option>
                <option value="value7">Roles definidos</option>
                <option value="value8">Estructura piramidal</option>
                <option value="value9">Autoridad vertical</option>
                <option value="value10">Protocolos establecidos</option>
                <option value="value11">Decisiones participativas</option>
                <option value="value12">Consulta al equipo</option>
                <option value="value13">Feedback bidireccional</option>
                <option value="value14">Colaboración activa</option>
                <option value="value15">Empoderamiento</option>
                <option value="value16">Discusión abierta</option>
                <option value="value17">Consenso grupal</option>
                <option value="value18">Responsabilidad compartida</option>
                <option value="value19">Iniciativas bottom-up</option>
                <option value="value20">Votación en decisiones clave</option>
            </select>
        </ContainerFirstThreeSelects>
        <ContainerSecondThreeSelects>
            <label htmlFor="beneficios">Beneficios</label>
            <select name="beneficios">
                <option value="" selected>Elige una opción</option>
                <hr></hr>
                <option value="value1">Colaborativa</option>
                <option value="value2">Competitiva</option>
                <option value="value3">Estructurada</option>
                <option value="value4">Relajada</option>
                <option value="value5">Ritmo Acelerado</option>
            </select>
            <label htmlFor="culture">Diversidad e Inclusión</label>
            <select  name="culture">
                <option value="" selected>Elige una opción</option>
                <hr></hr>
                <option value="value1">Jerárquica</option>
                <option value="value2">Funcional</option>
                <option value="value3">Matricial</option>
                <option value="value4">Plana (Horizontal)</option>
                <option value="value5">en Red</option>
                <option value="value6">por Proyectos</option>
                <option value="value7">Divisional</option>
                <option value="value8">Circular</option>
                <option value="value9">Hipocrática</option>
                <option value="value10">Híbrida</option>
            </select>
            <label htmlFor="ambiente">Comunicación</label>
            <select name="ambiente">
                <option value="" selected>Elige una opción</option>
                <hr></hr>
                <option value="value1">Tradicional</option>
                <option value="value2">Abierto(OpenOffice)</option>
                <option value="value3">Híbrido</option>
                <option value="value4">Remoto</option>
                <option value="value5">Creativo</option>
                <option value="value6">Colaborativo</option>
                <option value="value7">Alta Presión</option>
                <option value="value8">StartUp</option>
                <option value="value9">Industrial</option>
                <option value="value10">Servicio al Cliente</option>
            </select>
            <label htmlFor="ambiente">Comunicaciones</label>
            <select name="ambiente">
                <option value="" selected>Elige una opción</option>
                <hr></hr>
                <option value="value1">Toma de decisiones centralizada</option>
                <option value="value2">Cadena de mando clara</option>
                <option value="value3">Supervisión directa</option>
                <option value="value4">Procedimientos estandarizados</option>
                <option value="value5">Control estricto</option>
                <option value="value6">Comunicación formal</option>
                <option value="value7">Roles definidos</option>
                <option value="value8">Estructura piramidal</option>
                <option value="value9">Autoridad vertical</option>
                <option value="value10">Protocolos establecidos</option>
                <option value="value11">Decisiones participativas</option>
                <option value="value12">Consulta al equipo</option>
                <option value="value13">Feedback bidireccional</option>
                <option value="value14">Colaboración activa</option>
                <option value="value15">Empoderamiento</option>
                <option value="value16">Discusión abierta</option>
                <option value="value17">Consenso grupal</option>
                <option value="value18">Responsabilidad compartida</option>
                <option value="value19">Iniciativas bottom-up</option>
                <option value="value20">Votación en decisiones clave</option>
            </select>
        </ContainerSecondThreeSelects>
        <ContainerThirdThreeSelects>
            <label htmlFor="beneficios">Mis Datos</label>
            <select name="beneficios">
                <option value="" selected>Elige una opción</option>
                <hr></hr>
                <option value="value1">Colaborativa</option>
                <option value="value2">Competitiva</option>
                <option value="value3">Estructurada</option>
                <option value="value4">Relajada</option>
                <option value="value5">Ritmo Acelerado</option>
            </select>
            <label htmlFor="culture">Cuenta</label>
            <select  name="culture">
                <option value="" selected>Elige una opción</option>
                <hr></hr>
                <option value="value1">Jerárquica</option>
                <option value="value2">Funcional</option>
                <option value="value3">Matricial</option>
                <option value="value4">Plana (Horizontal)</option>
                <option value="value5">en Red</option>
                <option value="value6">por Proyectos</option>
                <option value="value7">Divisional</option>
                <option value="value8">Circular</option>
                <option value="value9">Hipocrática</option>
                <option value="value10">Híbrida</option>
            </select>
            <label htmlFor="ambiente">Preguntas</label>
            <select name="ambiente">
                <option value="" selected>Elige una opción</option>
                <hr></hr>
                <option value="value1">Tradicional</option>
                <option value="value2">Abierto(OpenOffice)</option>
                <option value="value3">Híbrido</option>
                <option value="value4">Remoto</option>
                <option value="value5">Creativo</option>
                <option value="value6">Colaborativo</option>
                <option value="value7">Alta Presión</option>
                <option value="value8">StartUp</option>
                <option value="value9">Industrial</option>
                <option value="value10">Servicio al Cliente</option>
            </select>
        </ContainerThirdThreeSelects>
        
          <BtnChatColumnSelects>
              Chat de Ayuda
          </BtnChatColumnSelects>
        
    </ContainerColumnSelects>
    <ContainerColumnBody>
    <ContainerWrapper>
      <StepsContainer>
        <StepCard>
          <div className="containerImgTxt">
            <StepImage src={step1} alt="Paso 1" />
            <h2 id="one">Tu historia vale más que un logo en LinkedIn.</h2>
          </div>
          <StepText>
            <p>
                Las empresas se definen por su ADN, no solo por lo que venden. 
                Comparte qué te hace única y deja que nuestro algoritmo te conecte con el talento ideal.
            </p>
          </StepText>
        </StepCard>

        <StepCard>
          <div className="containerImgTxt">
            <StepImage src={step2} alt="Paso 2" />
            <h2 id="two">Completa los detalles de tu oferta y deja que tu cultura hable por ti.</h2>
          </div>
          <StepText>
            <p>
              El talento ideal no solo busca un salario, sino un propósito y un entorno donde encajar. 
              Completa nuestro formato de ofertas y deja que nuestro algoritmo haga el match perfecto.
            </p>
          </StepText>
        </StepCard>

        <StepCard>
          <div className="containerImgTxt">
            <StepImage src={step3} alt="Paso 3" />
            <h2 id="one">Bienvenido a la nueva forma de encontrar talento.</h2>
          </div>
          <StepText>
            <p>
                Gana Wiibucks mientras interactúas y canjéalos por features premium. 
                Conéctate con talento de forma auténtica, inclusiva y sin filtros.
            </p>
          </StepText>
        </StepCard>
      </StepsContainer>
      <div className="divLastButton">
        <span></span>
        <Link to={"/AboutYourDNA"}>
          <BtnNextPage>Continuar</BtnNextPage>
        </Link>
      </div>
    </ContainerWrapper>
    <div className="divLastButton">
    </div>
    </ContainerColumnBody>
    </ContainerDivisionColumns>
    </>
  );
}
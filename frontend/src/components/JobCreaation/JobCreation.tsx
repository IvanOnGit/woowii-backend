import { Bell, Bookmark, BriefcaseBusiness, Mail, Menu } from "lucide-react";
import {  BackgroundImage, Container, ContainerLogo, HeaderContainerWrapper, Header, HeaderItems, SearchBar, MainContainer, MainContainerImage, MainContainerText, MainContainerFirstText, MainContainerSecondText, MatchDetailsContainer, MatchDetailsText, MatchDetailsTextItems, CompatibilityContainer, WhatWillYouDoContainer, WhoWillYouWorkWithContainer, SurvivalKit, OurSelectionProcess, ResponsabilitiesContainer, ResponsabilitiesItems, GreenUnderline, WhatAreWeLookingFor, IfYouGotHere, ApplyNowButton, StyledLink } from "./styles";

export default function JobCreation() {
    return (
        <>
        <Container>
            <HeaderContainerWrapper>
                <BackgroundImage />
                <ContainerLogo>
                    <img src="/images/LogoBlue.svg" alt="" />
                </ContainerLogo>
                <SearchBar>
                <input type="text" name="" id="" placeholder="Búsqueda"/>
                </SearchBar>
                <Header>
                    <HeaderItems>
                        <p><img src="/images/wiibucks.png" alt="wiibucks" />400</p>
                        <p><img src="/images/wiibucks.png" alt="wiibucks" />00</p>
                        <Bell />
                        <Mail />
                        <BriefcaseBusiness />
                        <Bookmark />
                        <Menu />
                    </HeaderItems>
                </Header>
            </HeaderContainerWrapper>
                <MainContainer>
                    <MainContainerImage>
                    <img src="/images/JobOpportunityBackground.png" alt="" />
                    </MainContainerImage>
                    <MainContainerText>
                        <h1>Nombre de la solicitud</h1>
                        <MainContainerFirstText>
                            <div>
                                <h3>Salario</h3>
                                <p>_________</p>
                            </div>
                            <div>
                                <h3>Variable</h3>
                                <p>_________</p>
                            </div>
                            <div>
                                <h3>Presencial</h3>
                                <p>_________</p>
                            </div>
                            <div>
                                <h3>Remoto</h3>
                                <p>_________</p>
                            </div>
                        </MainContainerFirstText>
                        <MainContainerSecondText>
                            <h2>Sobre nosotros</h2>
                            <p>Cuenta sobre tu empresa sin dar datos específicos....</p>
                        </MainContainerSecondText>
                    </MainContainerText>
                </MainContainer>
                <MatchDetailsContainer>
                        <img src="/images/BusinessCubeLogo.png" alt="" />
                        <MatchDetailsText>
                            <h2>Detalles del Match</h2>
                            <MatchDetailsTextItems>
                                <div>
                                    <p>Match</p>
                                    <img src="/images/SeventyOnePercent.png" alt="" />
                                    <p>Transparencia</p>
                                    <img src="/images/SeventyPercent.png" alt="" />
                                    <span></span>
                                    <p>Requisitos</p>
                                    <img src="/images/SixtyPercent.png" alt="" />
                                    <span></span>
                                    <p>Salarios</p>
                                    <img src="/images/NinetyPercent.png" alt="" />
                                    <span></span>
                                </div>
                                <div>
                                    <p>Cultura</p>
                                    <img src="/images/SixtyPercent.png" alt="" />
                                    <span></span>
                                    <p>Tecnologías</p>
                                    <img src="/images/SeventyPercent.png" alt="" /> 
                                    <span></span>
                                    <p>Ubicación</p>
                                    <img src="/images/SixtyPercent.png" alt="" />
                                    <span></span>
                                    <p>Identidad</p>
                                    <img src="/images/SeventyPercent.png" alt="" /> 
                                    <span></span>
                                </div>
                            </MatchDetailsTextItems>
                        </MatchDetailsText>
                        <CompatibilityContainer>
                                    <h2>COMPATIBILIDAD <br />CON MI PERFIL</h2>
                                    <img src="/images/SevenPercent.png" alt="" />
                        </CompatibilityContainer>
                </MatchDetailsContainer>
                <WhatWillYouDoContainer>
                    <h2>Qué harás</h2>
                    <img src="/images/GreenUnderline.png" alt="" />
                    <p>Si buscas un sitio donde tu código impacte, donde cada día suponga un reto y <br />donde puedas crecer profesionalmente, sigue leyendo.<br /> <strong>Lo que harás</strong><br />
                        <li>Construir y mejorar productos digitales con un enfoque en escalabilidad.</li> <br />
                        <li>Diseñar arquitecturas eficientes y elegantes.</li> <br />
                        <li>Colaborar con el equipo de diseño y producto para crear experiencias increíbles.</li> <br />
                        <li>Resolver problemas complejos con soluciones innovadoras.</li><br />
                        <li>Participar en revisiones de código y en la mejora continua del stack tecnológico.</li>
                    </p>
                </WhatWillYouDoContainer>
                <WhoWillYouWorkWithContainer>
                    <h2>Con quién trabajarás</h2>
                    <img src="/images/GreenUnderline.png" alt="" />
                    <img src="/images/TeamImage.png" alt="" />
                </WhoWillYouWorkWithContainer>
                <SurvivalKit>
                    <h2>El kit de supervivencia que necesitarás:</h2>
                    <img src="/images/SurvivalKit.png" alt="" />
                </SurvivalKit>
                <OurSelectionProcess>
                    <h2>Nuestro proceso de selección</h2>
                    <img src="/images/GreenUnderline.png" alt="" />
                    <img src="/images/SelectionProcess.png" alt="" />
                </OurSelectionProcess>
                <ResponsabilitiesContainer>
                    <h2>Responsabilidades</h2>
                    <GreenUnderline src="/images/GreenUnderline.png" alt="" />
                    <ResponsabilitiesItems>
                        <p><img src="/images/GreenEmptyCircle.png" alt="" />Liderar el desarrollo de nuevas funcionalidades y productos digitales.</p>
                        <p><img src="/images/GreenEmptyCircle.png" alt="" />Diseñar y mantener arquitecturas escalables y eficientes.</p>
                        <p><img src="/images/GreenEmptyCircle.png" alt="" />Asegurar la calidad del código mediante buenas prácticas y revisiones.</p>
                        <p><img src="/images/GreenEmptyCircle.png" alt="" />Colaborar estrechamente con equipos de diseño, producto y operaciones.</p>
                        <p><img src="/images/GreenEmptyCircle.png" alt="" />Implementar soluciones técnicas innovadoras para optimizar rendimiento y seguridad.</p>
                        <p><img src="/images/GreenEmptyCircle.png" alt="" />Documentar procesos y código para garantizar la escalabilidad del proyecto.</p>
                        <p><img src="/images/GreenEmptyCircle.png" alt="" />Gestionar y solucionar incidencias en el backend y frontend.</p>
                    </ResponsabilitiesItems>
                </ResponsabilitiesContainer>
                <WhatAreWeLookingFor>
                    <h2>Qué buscamos</h2>
                    <GreenUnderline src="/images/GreenUnderline.png" alt="" />
                    <img src="/images/WhatAreWeLookingFor.png" alt="" />
                </WhatAreWeLookingFor>
                <IfYouGotHere src="/images/IfYouGotHere.png" alt="" />
                <ApplyNowButton>
                    <StyledLink to="/CompanyCandidatesView">
                        <button>Publicar solicitud</button>
                    </StyledLink>
                </ApplyNowButton>
        </Container>
        </>
  );
}
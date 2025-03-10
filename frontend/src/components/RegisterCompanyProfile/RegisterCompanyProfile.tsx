import { useState } from "react";
import {
  ContainerWrapper,
  DivContainerLogoTerPage,
  LogoTerceraPageStyled,
  AvatarWrapper,
  AvatarImage,
  Button,
  ThumbnailsContainer,
  Thumbnail,
  UsernameInput,
  ButtonNextTerceraPage,
  ContainerInputs,
  ContainerColumns,
  TitleAndSetData,
  TitleForm,
  ParagraphBelowTitle,
  FormRegisterCompany
} from "./styles";
import { ChevronLeft, ChevronRight, Key } from "lucide-react";
import { Link } from "react-router-dom";

const avatars = [
  { id: 1, src: "/images/avatarCompany1.svg" },
  { id: 2, src: "/images/avatarCompany2.svg" },
  { id: 3, src: "/images/avatarCompany3.svg" },
  { id: 4, src: "/images/avatarCompany4.svg" },
  { id: 5, src: "/images/avatarCompany5.svg" },
  { id: 6, src: "/images/avatarCompany6.svg" },
  { id: 7, src: "/images/avatarCompany7.svg" },
];

export default function RegisterCompanyProfile() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % avatars.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + avatars.length) % avatars.length);
  };

  return (
    <>
    <DivContainerLogoTerPage>
        <LogoTerceraPageStyled src="/images/LogoBlue.svg" />
    </DivContainerLogoTerPage>
    <ContainerColumns>
        
    <ContainerWrapper>
      
      <h2>Elige tu Avatar:</h2>

      <AvatarWrapper>
        <Button onClick={handlePrev}><ChevronLeft /></Button>
        <AvatarImage src={avatars[selectedIndex].src} alt="Selected Avatar" />
        <Button onClick={handleNext}><ChevronRight /></Button>
      </AvatarWrapper>

      <ThumbnailsContainer>
        {avatars.map((avatar, index) => (
          <Thumbnail
            key={avatar.id}
            src={avatar.src}
            alt={`Avatar ${index + 1}`}
            isSelected={index === selectedIndex}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </ThumbnailsContainer>
        <UsernameInput>
          <h3>Elige tu usuario:</h3>
          <input type="text" placeholder="Prueba tu @" />
          <p><Key />Entre 8 y 20 caracteres.</p>
          <p><Key />Debe contener letras minúsculas, mayúsculas y números.</p>
          <p><Key />Recuerda mantener el anonimato.</p>
          <p><Key />Sugerimos elegir un alias profesional.</p>
      </UsernameInput>
      
    </ContainerWrapper>
    <ContainerInputs>
        <TitleAndSetData>
            <TitleForm>REGISTRO</TitleForm>
            <ParagraphBelowTitle>Establece los datos principales para tu empresa.</ParagraphBelowTitle>
        </TitleAndSetData>
        <FormRegisterCompany>
            <div className="inputsForm">
                <label htmlFor="name">Nombre de Empresa:</label>
                <input type="text" name="name" id="name" placeholder="Nombre de Empresa " />
            </div>
            <div className="inputsForm">
                <label htmlFor="rol">Rol del Admistrador/a:</label>
                <input type="text" name="rol" id="rol" placeholder="Tu rol dentro de la empresa" />
            </div>
            <div className="inputsForm">
                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" name="email" id="email" placeholder="Email de empresa" />
            </div>
            <div className="inputsForm">
                <label htmlFor="subs">Subscripción al boletín:</label>
                <div className="btnChoose" id="subs">
                    <button>SI</button>
                    <button>NO</button>
                </div>
            </div>
            <div className="inputsForm">
                <label htmlFor="employ">Cantidad de empleados:</label>
                <select name="employ" id="employ">
                    <option value="value1" selected>0 to 10 employees</option>
                    <option value="value2">10 to 50 employees</option>
                    <option value="value3">50 to 500 employees</option>
                    <option value="value4">500 to 1000 employees</option>
                    <option value="value5">1000 to 5000 employees</option>
                    <option value="value6">5000 to 10000 employees</option>
                    <option value="value6">more than 10000 employees</option>
                </select>
            </div>
            <div className="inputsForm">
                <label htmlFor="address">Dirección de las oficinas:</label>
                <input type="text" name="address" id="address" placeholder="Escribe la dirección de la empresa" />
            </div>
            <div className="inputsForm">
                <label htmlFor="industry">Dirección de las oficinas:</label>
                <select name="industry" id="industry">
                    <option value="value1" selected>Computing</option>
                    <option value="value2">Health</option>
                    <option value="value3">Investments</option>
                    <option value="value4">Automotive</option>
                    <option value="value5">Pharmaceutical</option>
                    <option value="value6">Human resources</option>
                    <option value="value6">Real State</option>
                </select>
            </div>
            <div className="inputsForm">
                <label htmlFor="web">Sitio web:</label>
                <input type="text" name="web" id="web" placeholder="Copia tu link aquí" />
            </div>
            
            <Link to={"/CompanyHome"}>
                <div className="inputsForm">
                    <label htmlFor=""></label>
                    <ButtonNextTerceraPage>
                        Continuar
                    </ButtonNextTerceraPage>
                </div>
            </Link>
        </FormRegisterCompany>
    </ContainerInputs>
    </ContainerColumns>
    </>
  );
}
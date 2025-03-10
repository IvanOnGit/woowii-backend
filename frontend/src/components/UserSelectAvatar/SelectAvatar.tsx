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
  ButtonNextTerceraPage
} from "./styles";
import { ChevronLeft, ChevronRight, Key } from "lucide-react";
import { Link } from "react-router-dom";

const avatars = [
  { id: 1, src: "/images/Avatar1.png" },
  { id: 2, src: "/images/Avatar2.png" },
  { id: 3, src: "/images/Avatar3.png" },
  { id: 4, src: "/images/Avatar4.png" },
  { id: 5, src: "/images/Avatar5.png" },
  { id: 6, src: "/images/Avatar6.png" },
  { id: 7, src: "/images/Avatar7.png" },
  { id: 8, src: "/images/Avatar8.png" },
  { id: 9, src: "/images/Avatar9.png" },
  { id: 10, src: "/images/Avatar10.png" },
  { id: 11, src: "/images/Avatar11.png" },
  { id: 12, src: "/images/Avatar12.png" },
  { id: 13, src: "/images/Avatar13.png" },
  { id: 14, src: "/images/Avatar14.png" },
];

export default function SelectAvatar() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % avatars.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + avatars.length) % avatars.length);
  };

  return (
    <ContainerWrapper>
      <DivContainerLogoTerPage>
        <LogoTerceraPageStyled src="/images/GreenLogoDemo.svg" />
      </DivContainerLogoTerPage>

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
      <Link to={"/UserHome"}>
        <ButtonNextTerceraPage>
            Continuar
        </ButtonNextTerceraPage>
      </Link>
    </ContainerWrapper>
  );
}
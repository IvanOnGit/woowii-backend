import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonNextSecondPage,
  ContainerWrapper,
  DivContainerButton,
  DivContainerLogo,
  GoToNextSection,
  LevelSelector,
  LogoSecondPageStyled,
  PersonalityQuestions,
  PersonalityQuestionsItems,
  PersonalityText,
  StyledLink,
} from "./styles";


export default function PersonalityTestQuestions() {
  const [selectedRatings, setSelectedRatings] = useState(Array(5).fill(null));
  const [showCongratulations, setShowCongratulations] = useState(false);

  const handleRatingClick = (questionIndex: number, value: number) => {
    const newRatings = [...selectedRatings];
    newRatings[questionIndex] = value;
    setSelectedRatings(newRatings);
  };

  const handleSendClick = () => {
    setShowCongratulations(true);
  };

  const navigate = useNavigate();

  const handleContinueClick = () => {
    navigate("/CongratulationsSteps");
  };

  const renderRatingButtons = (questionIndex: number) => {
    return (
      <>
        {[1, 2, 3, 4, 5, 6, 7].map((value) => (
          <LevelSelector
            key={value}
            onClick={() => handleRatingClick(questionIndex, value)}
            style={{
              backgroundColor: selectedRatings[questionIndex] === value ? "#8FFF00" : "#fff",
              color: selectedRatings[questionIndex] === value ? "#000" : "#555",
            }}
          >
            {value}
          </LevelSelector>
        ))}
      </>
    );
  };

  return (
    <ContainerWrapper>
      <DivContainerLogo>
        <LogoSecondPageStyled src="/images/GreenLogoDemo.svg" />
      </DivContainerLogo>
      <PersonalityText>
        <h1>Test de personalidad</h1>
        <p>
          Valora cada formación del <strong>1</strong> al <strong>7</strong> dónde:<br />
          <strong>1</strong> Totalmente en desacuerdo | <strong>7</strong> Totalmente de acuerdo.
        </p>
      </PersonalityText>
      <PersonalityQuestions>
        {["Tiendes a tomar la iniciativa en eventos sociales.",
          "Te adaptas rápidamente y te involucras en actividades sociales en un nuevo entorno laboral.",
          "Tus amigos te cuentan algo emocionante en cuanto se enteran.",
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "Tienes tendencias a explorar nuevas ideas y experiencias emocionales.",
        ].map((question, index) => (
          <PersonalityQuestionsItems key={index}>
            <h2>{question}</h2>
            {renderRatingButtons(index)}
          </PersonalityQuestionsItems>
        ))}
      </PersonalityQuestions>
      <DivContainerButton>
        <StyledLink to={"/PersonalityTest"}>
          <ButtonNextSecondPage>Volver atrás</ButtonNextSecondPage>
        </StyledLink>
        <ButtonNextSecondPage onClick={handleSendClick}>Enviar</ButtonNextSecondPage>
      </DivContainerButton>

      {showCongratulations && (
        <GoToNextSection style={{ textAlign: "center", marginTop: "20px" }}>
          <img src="/images/GreenLogoDemo.svg" alt="" />
          <h2>¡Sección completa!</h2>
          <p>Has completado todas las <br /> preguntas de esta sección.</p>
          <ButtonNextSecondPage onClick={handleContinueClick}>
            Continuar
          </ButtonNextSecondPage>
        </GoToNextSection>
      )}
    </ContainerWrapper>
  );
}
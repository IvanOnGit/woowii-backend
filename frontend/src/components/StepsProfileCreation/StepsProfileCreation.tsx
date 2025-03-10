import { ContainerWrapper, StepsContainer, StepCard, StepImage, StepNumber, StepText} from "./styles";
import step1 from "/images/step1.png";
import step2 from "/images/step2.png";
import step3 from "/images/step3.png";

export default function StepsProfileCreation() {
  return (

    <>
      <ContainerWrapper>
        <h2>PASO A PASO PARA LA CREACIÓN DE TU PERFIL</h2>
        <StepsContainer>
          <StepCard>
            <StepNumber>1</StepNumber>
            <StepImage src={step1} alt="Paso 1" />
            <StepText>
              <h3>¡Tu historia vale más que un CV!</h3>
              <p>
                Comparte quién eres y deja que nuestro algoritmo te conecte con tu empresa ideal.
                ¡Destácate ya! 🚀
              </p>
            </StepText>
          </StepCard>

          <StepCard>
            <StepNumber>2</StepNumber>
            <StepImage src={step2} alt="Paso 2" />
            <StepText>
              <h3>¡Tu pasaporte a la entrevista!</h3>
              <p>
                ✨ Completa el Assessment de Woowii y deja que tus competencias transversales hablen por ti.
              </p>
            </StepText>
          </StepCard>

          <StepCard>
            <StepNumber>3</StepNumber>
            <StepImage src={step3} alt="Paso 3" />
            <StepText>
              <h3>¡Bienvenido al futuro del talento!</h3>
              <p>
                Gana Wiibucks interactuando y canjéalos por features premium. ¡Conéctate de forma humana, inclusiva y real! 🚀
              </p>
            </StepText>
          </StepCard>
        </StepsContainer>
        </ContainerWrapper>
      </>
  );
}
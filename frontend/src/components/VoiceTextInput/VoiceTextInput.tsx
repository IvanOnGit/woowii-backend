import useSpeechRecognition from "../../hooks/useSpeechRecognitionHook";
import { ButtonsContainer, Container, StyledInput } from "./styles";

const VoiceTextInput = () => {
    const {
        text,
        setText, // Ahora sí tienes setText disponible
        startListening,
        stopListening,
        isListening,
        hasRecognitionSupport,
    } = useSpeechRecognition();
    
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        // Actualizar el texto manualmente si el usuario edita el campo
        setText(e.target.value);
    };

    return (
        <Container>
            {hasRecognitionSupport ? (
                <>

                    {isListening ? <div>Your browser is currently listening</div> : null}

                    <StyledInput
                        as="textarea"
                        value={text}
                        onChange={handleChange}
                        placeholder="Mi relación con JavaScript va más allá del simple uso de ES6. Hemos vivido juntos todos los cambios del ecosistema web: desde la época de jQuery hasta los días dorados de React y Node.js. ¿Asincronía? Lo manejo sin pestañear con promesas y async/await. ¿Diseño modular? Webpack y Babel son mis mejores amigos. Y si hablamos de front y back, con Node.js hago magia. Me encanta transformar esa confusión de lenguajes de cliente y servidor en algo tan simple como una taza de café. Vamos, déjame que te lleve por el lado oscuro y el claro del código; con JavaScript, todo es posible."
                    />
                </>
            ) : (
                <h1>Your browser does not support speech recognition</h1>
            )}

            <ButtonsContainer>
                    <button >Mejorarlo con IA ✨</button>
                    <button onClick={startListening}>Comenzar a grabar</button>
                    <button onClick={stopListening}>Detener grabación</button>
            </ButtonsContainer>
        </Container>
    );
};

export default VoiceTextInput;
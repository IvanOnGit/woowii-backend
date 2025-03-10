import { useEffect, useState } from "react";

let recognition: SpeechRecognition | null = null;
if ("webkitSpeechRecognition" in window) {
    recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "es-ES";
}

const useSpeechRecognition = () => {
    const [text, setText] = useState<string>("");
    const [isListening, setIsListening] = useState(false);

    useEffect(() => {
        if (!recognition) return;

        recognition.onresult = (event: SpeechRecognitionEvent) => {
            console.log('onresult event: ', event);
            setText(event.results[0][0].transcript);
            recognition.stop();
            setIsListening(false);
        };
    }, []);

    const startListening = () => {
        setText('');
        setIsListening(true);
        recognition?.start();
    };

    const stopListening = () => {
        setIsListening(false);
        recognition?.stop();
    };

    return {
        text,
        setText, // Exponer setText
        isListening,
        startListening,
        stopListening,
        hasRecognitionSupport: !!recognition,
    };
};

export default useSpeechRecognition;
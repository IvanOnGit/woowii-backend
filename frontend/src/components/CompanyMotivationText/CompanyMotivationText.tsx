import {  StyledMotivationText } from "./styles";

export default function CompanyMotivationText() {
    return (
    <>
        <StyledMotivationText>
            <div className="firstLine">
                <span><img src="/images/partenon.png" alt="Icono del Partenon" /></span>
                <h2> El talento ideal no cae del cielo… y Roma no se hizo en dos días</h2>
            </div>
            <p>
                Podríamos decirte que completarás un perfil irresistible en 3 minutos, pero… te estaríamos mintiendo. 🤷‍♂️ <br />
                Tu empresa tiene una historia, una cultura y un ADN único. Para atraer a los mejores talentos sin volverte loco
            </p>
            <p>
                filtrando CVs irrelevantes, tienes que ponerle cariño a tu perfil. ✨
            </p>
        </StyledMotivationText>
    </>
    );
}
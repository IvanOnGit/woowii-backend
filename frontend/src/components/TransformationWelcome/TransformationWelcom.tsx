import { Link } from "react-router-dom";
import { BackSecondScreen, 
    ButtonNextInitSecond, 
    DivContainerButton, 
    LateralBlueCover, 
    WrapperImageSecond } from "./styles";


export default function InitSecond() {
  return (
    <>
        <BackSecondScreen>
            <WrapperImageSecond />
            <LateralBlueCover />
        </BackSecondScreen>
        <DivContainerButton>
            <Link to={"/ChooseTalentCompany"}>
            <ButtonNextInitSecond>
                ¡Comencemos!
            </ButtonNextInitSecond>
            </Link>
        </DivContainerButton>
    </>
  )
}
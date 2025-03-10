import { Link } from "react-router-dom";
import { BtnInterviewPage, 
  ContainerBackInterview, 
  PercentageMatchImage } from "./styles";

export default function InterviewPage() {
  return (
    <ContainerBackInterview>
        <PercentageMatchImage src="/images/percentageImage.svg" alt="Match Image"/>
        <Link to={'/'}>
          <BtnInterviewPage src="/images/btnInterview.svg" alt="Interview Button" />
        </Link>
    </ContainerBackInterview>
  )
}
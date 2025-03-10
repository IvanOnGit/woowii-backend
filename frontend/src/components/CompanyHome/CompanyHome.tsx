import { Bell, Bookmark, BriefcaseBusiness, Mail, Menu } from "lucide-react";
import { ContainerWrapper, Header, SearchContainer, HeaderItems, ContainerDivisionColumns, ContainerColumnSelects, ContainerColumnBody } from "./styles";
import NewPost from "../NewPost/NewPost";
import CompanyMotivationText from "../CompanyMotivationText/CompanyMotivationText";
import StepsProfileCompany from "../StepsProfileCompany/StepsProfileCompany";

export default function CompanyHome() {
  return (
    <>
    <ContainerDivisionColumns>
      <ContainerColumnSelects />
      <ContainerColumnBody>
      <ContainerWrapper>
        <Header>
          <SearchContainer>
            BÃºsqueda
          </SearchContainer>
          <HeaderItems>
            <p><img src="/images/wiibucks.png" alt="wiibucks" />50</p>
            <p><img src="/images/wiibucks.png" alt="wiibucks" />00</p>
            <Bell />
            <Mail />
            <BriefcaseBusiness />
            <Bookmark />
            <Menu />
          </HeaderItems>
        </Header>
      </ContainerWrapper>
      <NewPost />
      <CompanyMotivationText />
      <StepsProfileCompany />
      </ContainerColumnBody>
    </ContainerDivisionColumns>
    </>
  );
}
import { Link } from "react-router-dom";
import { BackSpiderDiv, 
    BtnMatchCandidateDetail, 
    ButtonNextCandidateDetail, 
    CandidateDetailContainer, 
    CenterCandidateDetailColumn, 
    GraphBarCandidateDetail, 
    HardsetDiv, 
    ImageVideosCandidateDetail, 
    LeftCandidateDetailColumn,  
    LitleBlueDiv,    
    LitleBlueDivCenterOne,  
    LitleBlueDivCenterTwo,  
    MatchAnalysisDiv, 
    MenuCandidateDetail, 
    NavigateBarCandidateDetail, 
    PercentageBigGreen, 
    RightCandidateDetailColumn, 
    SoftsetDiv, 
    SpiderGraph, 
    SuperpowerDiv, 
    ToolsetDiv, 
    TxtUpCandidateDetail, 
    UserImageCandidateDetail} from "./styles";
import { ChevronLeft, 
    Menu, 
    ChartArea, 
    Trophy, 
    Eye, 
    Wrench, 
    Rocket} from "lucide-react";


export default function CandidateDetail() {
  return (
    <>
    <NavigateBarCandidateDetail>
        <ChevronLeft id="chevron" size={(24)} />
        <MenuCandidateDetail>
            <li>Home</li>
            <li>How</li>
            <li>Features</li>
            <li>Payments</li>
            <li>MVP</li>
        </MenuCandidateDetail>
        <Menu id="hambur" size={24} />
    </NavigateBarCandidateDetail>
    <CandidateDetailContainer>
        <LeftCandidateDetailColumn>
            <UserImageCandidateDetail src="/images/userImgCandidateDetails.svg" />
                <h2>User_125a3j</h2>
                <p id="work">Brand Manager</p>
            <MatchAnalysisDiv>
                <ChartArea size={24} color="#FFF" />
                <p>Match Analisys</p>
            </MatchAnalysisDiv>
            <h3>ALL MY STORIES</h3>
            <LitleBlueDiv />
            <HardsetDiv>
                <Trophy size={24} color="#FFF" />
                <p>Hardset</p>
            </HardsetDiv>
            <SoftsetDiv>
                <Eye size={24} color="#FFF" />
                <p>Softset</p>
            </SoftsetDiv>
            <ToolsetDiv>
                <Wrench size={24} color="#FFF" />
                <p>Toolset</p>
            </ToolsetDiv>
            <SuperpowerDiv>
                <Rocket size={24} color="#FFF" />
                <p>Superpower</p>
            </SuperpowerDiv>
            <MatchAnalysisDiv>
                <ChartArea size={24} color="#FFF" />
                <p>Match Analisys</p>
            </MatchAnalysisDiv>
            <PercentageBigGreen src="/images/percentageBig.svg" alt="Porcentaje Grande Verde"/>
            <BtnMatchCandidateDetail>
                MATCH
            </BtnMatchCandidateDetail>
        </LeftCandidateDetailColumn>
        <CenterCandidateDetailColumn>
            <TxtUpCandidateDetail src="/images/textoUpCandDetail.svg" alt="Texto Superior" />
            <h3>MY SKILLSET</h3>
            <LitleBlueDivCenterOne />
            <ImageVideosCandidateDetail src="/images/videosCandDetail.svg" alt="Cuadros de videos"/>
            <h3 id="tool">MY TOOLSET</h3>
            <LitleBlueDivCenterTwo />
        </CenterCandidateDetailColumn>
        <RightCandidateDetailColumn>
            <GraphBarCandidateDetail src="/images/barrasCandidateDetail.svg" alt="Graphic Bars" />
            <BackSpiderDiv>
                <SpiderGraph src="/images/spiderGraph.svg" alt="Spider Graph" />
            </BackSpiderDiv>
            <Link to={'/CompanyInterviewPage'}>
            <ButtonNextCandidateDetail>
                Continuar
            </ButtonNextCandidateDetail>
            </Link>
        </RightCandidateDetailColumn>
    </CandidateDetailContainer>
    </>
  )
}
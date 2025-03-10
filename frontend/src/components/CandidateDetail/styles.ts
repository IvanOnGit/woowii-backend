import styled from "styled-components";

export const NavigateBarCandidateDetail = styled.nav`
    display: flex;
    align-items: center;
    width: 100%;
    height: 5vh;
    background: #000;
    color: #FFF;
    #chevron{
        margin-left: 1.875rem;
        cursor: pointer;
    }
    #hambur{
        margin-left: 34.375rem;
        cursor: pointer;
    }
`
export const MenuCandidateDetail = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 31.25rem;
    list-style: none;
    gap: 1rem;
    cursor: pointer;
    font-size: 1.25rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    li:hover{
        text-decoration: underline 0.125rem #8FFF00;
    }
`
export const CandidateDetailContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 100vh;
    overflow-y: auto; /* Habilita el scroll */
    scrollbar-width: thin;
    scrollbar-color: #888 #222;
    background-color: black;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
        background-color: #222;
    }
`;
export const LeftCandidateDetailColumn = styled.div`
    display: block;
    width: 20vw;
    background: #000;
    h2{
        text-align: center;
        color: #FFF;
        font-size: 30;
        font-weight: 700;
        font-family: 'Inter', sans-serif;
        margin-top: 1.875rem;
    }

    p {
        text-align: center;
        color: #FFF;
        font-size: 1.125rem;;
        font-weight: 700;
        font-family: 'Inter', sans-serif;
        margin-top: 1.25rem;
    }
    
    h3{
        text-align: center;
        color: #FFF;
        font-size: 1.375rem;
        font-weight: 900;
        font-family: 'Roboto', sans-serif;
        margin-top: 3.125rem;
    }
`
export const MatchAnalysisDiv = styled.div`
    display: flex;
    margin: 1.875rem 0 0 3.75rem;
    gap: 0.313rem;
    cursor: pointer;
    p{
        margin-top: 0.125rem;
        font-size: 1.25rem;
        font-weight: 700;
        font-family: 'Inter', sans-serif;
    }
`
export const LitleBlueDiv = styled.div`
    width: 4.375rem;
    height: 0.313rem;
    background: #460BFF;
    margin: -0.313rem 0 0 4.375rem;
`
export const HardsetDiv = styled.div`
    display: flex;
    margin: 1.875rem 0 0 3.75rem;
    gap: 0.625rem;
    cursor: pointer;
    p{
        margin-top: 0.125rem;
        font-size: 1.25rem;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
    }
`
export const SoftsetDiv = styled.div`
    display: flex;
    margin: 0.625rem 0 0 3.75rem;
    gap: 0.625rem;
    cursor: pointer;
    p{
        margin-top: 0.125rem;
        font-size: 1.25rem;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
    }
`
export const ToolsetDiv = styled.div`
    display: flex;
    margin: 0.625rem 0 0 3.75rem;
    gap: 0.625rem;
    cursor: pointer;
    p{
        margin-top: 0.125rem;
        font-size: 1.25rem;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
    }
`
export const SuperpowerDiv = styled.div`
    display: flex;
    margin: 0.625rem 0 0 3.75rem;
    gap: 0.625rem;
    cursor: pointer;
    p{
        margin-top: 0.125rem;
        font-size: 1.25rem;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
    }
`
export const PercentageBigGreen = styled.img`
    margin: 2.5rem 0 0 3.125rem;
`
export const BtnMatchCandidateDetail = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 11rem;
    height: 1.875rem;
    border-radius: 2.813rem;
    background: #8FFF00;
    color: #000;
    font-size: 1.25rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    margin: 0.625rem 0 0 3.125rem;
    cursor: pointer;
    &:hover{
        background:  #460BFF;
        color: #FFF;
    }
`
export const UserImageCandidateDetail = styled.img`
    display: flex;
    margin: auto;
`
export const CenterCandidateDetailColumn = styled.div`
    display: block;
    width: 50vw;
    height: 100vh;
    background: #000;
    h3{
        text-align: left;
        color: #FFF;
        font-size: 1.375rem;
        font-weight: 900;
        font-family: 'Roboto', sans-serif;
        margin: 1.875rem 0 0.938rem 4.375rem;
    }
    #tool{
        text-align: left;
        color: #FFF;
        font-size: 1.375rem;
        font-weight: 900;
        font-family: 'Roboto', sans-serif;
        margin: -15.625rem 0 0.938rem 4.375rem;
        z-index: 1;
    }
`

export const TxtUpCandidateDetail = styled.img`
    display: flex;
    margin: auto;
    margin-top: 1.875rem;
`
export const ImageVideosCandidateDetail = styled.img`
    display: flex;
    margin: auto;
    z-index: 0;
`
export const LitleBlueDivCenterOne = styled.div`
    width: 4.375rem;
    height: 0.313rem;
    background: #460BFF;
    margin: -0.938rem 0 1.25rem 4.375rem;
`
export const LitleBlueDivCenterTwo = styled.div`
    width: 4.375rem;
    height: 0.313rem;
    background: #460BFF;
    margin: -0.938rem 0 0 4.375rem;
`
export const RightCandidateDetailColumn = styled.div`
    display: block;
    width: 30vw;
    height: 100vh;
    background: #000;
`
export const  GraphBarCandidateDetail = styled.img`
    display: flex;
    margin: auto;
    margin-top: 1.875rem;
`
export const BackSpiderDiv = styled.div`
    display: flex;
    margin: auto;
    width: 23.563rem;
    height: 21.125rem;
    background-color: #D9D9D9;
    margin-top: 1.875rem;
    border: 0.125rem solid #8FFF00;
    border-radius: 0.938rem;
`
export const SpiderGraph = styled.img`
    display: flex;
    margin: auto;
`
export const ButtonNextCandidateDetail = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 1.875rem;
    width: 9.25rem;
    height: 1.75rem;
    border-radius: 45px;
    background: #460BFF;
    color: #FFF;
    font-size: 0.875rem;
    font-weight: 900;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    &:hover{
        background: #8FFF00;
        color: #000;
    }
`
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerOverviewPage = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`
export const ContainerColumnSelects = styled.div`
  width: 25vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #460BFF;
`
export const ContainerLogoColumnOverview = styled.div`
  margin-top: 0.625rem;
  display: flex;
  border-bottom: 1px solid #FFF;
  padding: 1.563rem 0 1.563rem 0;
`
export const LogoColumnOverview = styled.img`
  margin: auto;
  width: 20.313rem;
  height: 5rem;
`
export const ContainerFirstSelects = styled.div`
  display: block;
  width: 23.75rem;
  height: 21.875rem;
  margin: auto;
  margin-top: 3.125rem;
  z-index: 1;
  border-bottom: 0.063rem solid #FFF;
  select{
    width: 12.5rem;
    margin-left: 5rem;
    margin-bottom: 0.625rem;
    background: #460BFF;
    color: #FFF;
    border: none;
  }
  label{
    font-size: 0.75rem;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    width: 100%;
    margin-left: 5rem;
    color: #FFF;
  }
`
export const ContainerSecondSelects = styled.div`
  display: block;
  width: 23.75rem;
  height: 15.625rem;
  margin: auto;
  margin-top: 3.125rem;
  z-index: 1;
  select{
    width: 12.5rem;
    margin-left: 5rem;
    margin-bottom: 0.625rem;
    background: #460BFF;
    color: #FFF;
    border: none;
  }
  label{
    font-size: 0.75rem;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    width: 100%;
    margin-left: 5rem;
    color: #FFF;
  }
`
export const WoodyChat = styled.img`
  margin: auto;
  padding-bottom: 2.5rem;
  cursor: pointer;
  z-index: 1;
`
export const ContainerColumnBody = styled.div`
  width: 100vw;
  height: 100vh;
  display: block;
  margin-left: -19.375rem;
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
  padding: 1rem;
  margin: -1rem 0 0 -10rem;
`;

export const DivOverviewAll = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: -1.25rem;
`
export const ColumnOverview = styled.div`
    margin-left: 19.375rem;
    width: 50vw;
    height: 90vh;
    h3{
        font-size: 2rem;
        font-weight: 600;
        font-family: 'Inter', sans-serif;
        color: #460BFF;
        margin-left: 5rem;
    }
`
export const ColumnHirings = styled.div`
    width: 30vw;
    height: 90vh;
    h3{
        font-size: 2rem;
        font-weight: 600;
        font-family: 'Inter', sans-serif;
        color: #460BFF;
        margin-left: -1.875rem;
    }
`
export const DivOverview = styled.div`
    width: 36.5rem;
    height: 20.75rem;
    margin: auto;
    border: 0.063rem solid #000;
    margin-left: 5rem;
    border-radius: 0.938rem;
    img{
      margin: 1.25rem 0 0 2.813rem;
    }
`
export const DivComment = styled.div`
  width: 36.5rem;
  height: 9.75rem;
  margin: auto;
  border: 1px solid #000;
  margin: 0 0 0.625rem 5rem;
  border-radius: 0.938rem;
  img{
    margin: 1.875rem 0 0 2.813rem;
  }
`
export const DivHirings = styled.div`
  width: 21.688rem;
  height: 39rem;
  margin: auto;
  border: 1px solid #000;
  margin-left: -1.875rem;
  border-radius: 0.638rem;
  img{
    margin: 1.875rem 0 0 2.813rem;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

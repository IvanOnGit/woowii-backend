import styled from "styled-components";

export const ContainerWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
  padding: 1rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  height: 2rem; 
  width: 30%; 
  margin-top: 1rem;
  padding: 0rem;
  margin-left: 35rem;
  border-radius: 2.813rem;
  background: transparent;
  border: 0.063rem solid #000;
  font-size: 0.75rem;
  font-family: 'Roboto', sans-serif;
`;

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  p {
    display: flex;
    margin: 0; 
  }

  img {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }
`;

export const ContainerDivisionColumns = styled.div`
     display: grid;
     grid-template-columns: 1fr 1fr;
`;

export const ContainerColumnSelects = styled.div`
  width: 20vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-right: 0.063rem solid #460BFF;
`;

export const ContainerColumnBody = styled.div`
  width: 100vw;
  height: 100vh;
  display: block;
  margin-left: -19.375rem;
`;
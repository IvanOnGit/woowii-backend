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
  justify-content: flex-end;
`;

export const SearchContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center; 
  
  input {
    height: 2rem; 
    width: 30%; 
    margin-top: 1rem;
    padding: 0rem;
    margin-left: 10rem;
    border-radius: 1rem;
    border: 1px solid black;
  }

  input::placeholder {
    padding-left: 1rem;
  }
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

export const MenuAside = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 19rem;
  height: 100vh;
  background-color: white;
  border-right: 1px solid black;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Roboto', sans-serif;
  span {
    height: 1px;
    width: 100%;
    border-bottom: 1px solid black;
  }

  a {
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const FirstMenuAsideItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
  width: 100%;
  text-align: center;
  height: 25%;

  img {
    width: 10rem;
    height: 4rem;}

  h3 {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const UserAndImageCombo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }

  h3 {
    font-size: 1.3rem;
  }
`

export const ThirdMenuAsideItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 25%;

  button {
    width: 80%;
    padding: 0.5rem;
    border: 1px solid black;
    background-color: transparent;
    border-radius: 1rem;
    color: black;
    cursor: pointer;
    font-size: 0.8rem;
  }

  button:hover {
    background-color: #f0f0f0;
  }
`;

export const ChevronIcon = styled.div`
  width: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  width: 80%;
  height: 25%;
`;
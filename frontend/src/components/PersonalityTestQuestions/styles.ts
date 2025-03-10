import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

`;

export const DivContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 25rem;
`;

export const LogoSecondPageStyled = styled.img`
  width: 150px;
  height: auto;
`;

export const PersonalityText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: 'Roboto', sans-serif;

  h1 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: black;
    line-height: 1.5;
  }

  strong {
    font-weight: bold;
    color: #27ae60;
  }
`;

export const PersonalityQuestions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 600px;
  font-family: 'Roboto', sans-serif;
`;

export const PersonalityQuestionsItems = styled.div`
  background: #f8f8f8;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  h2 {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 1rem;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;

export const RatingButton = styled.button<{ selected: boolean }>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: none;
  background: ${({ selected }) => (selected ? "#8FFF00" : "#eee")};
  color: ${({ selected }) => (selected ? "#000" : "#555")};
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: #b2ff59;
  }
`;

export const DivContainerButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const ButtonNextSecondPage = styled.button`
  background: #8FFF00;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  transition: background 0.3s;
  
  &:hover {
    background: #219150;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const LevelSelector = styled.button`
color: black;
font-size: 1rem;
margin-left: 1rem;
background-color: white;
border: none;
border-radius: 50%;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
cursor: pointer;
`;

export const GoToNextSection = styled.div`
display: flex;
flex-direction: column;
background-color: black;
color: white;
position: absolute;
width: 30%;
height: 30%;
gap: 1rem;
justify-content: center;
align-items: center;
padding: 2rem;
border-radius: 2rem;
font-family: 'Roboto', sans-serif;

img {
    width: 20rem;
}

h2 {
    margin: 0;
}

p {
    margin: 0;
}

button {
    width: 50%;
}
`;
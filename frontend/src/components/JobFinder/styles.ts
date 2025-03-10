import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.div`
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;

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

export const ContainerWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 10%;
  padding: 1rem;
  justify-content: flex-end;
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
  justify-content: start;
  font-family: 'Roboto', sans-serif;
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

  span {
    width: 100%;
    background-color: #C0C0C0;
    color: white;
    text-align: center;
    justify-content: center;
    align-content: center;
    padding: 0.02rem;
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
  width: 100%;
  text-align: center;
  height: 12rem;

  img {
    width: 10rem;
    height: 4rem;
  }

  h3 {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
  }

  span {
    margin-top: 1rem;
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
`;


export const DropdownContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;

export const DropdownButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  font-size: 1rem;
  background: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const DropdownList = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  border-radius: 5px;
  margin-top: 5px;
  gap: 1rem;
  font-weight: initial;
`;

export const DropdownItem = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 1rem;

  &:hover {
    background: #f0f0f0;
  }
`;

export const SecondDropdownContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;

export const SecondDropdownButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  font-size: 1rem;
  background: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const SecondDropdownList = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  border-radius: 5px;
  margin-top: 5px;
  gap: 1rem;
  font-weight: initial;
`;

export const SecondDropdownItem = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 1rem;

  input {
    border: none;
  }

  &:hover {
    background: #f0f0f0;
  }
`;

export const HelpButton = styled.button`
    background-color: transparent;
    width: 50%;
    margin-left: 5rem;
    margin-bottom: 1rem;
    border-radius: 1rem;
    border-color: #385500;
    color: #385500;
    padding: 0.5rem;
`;

export const Published = styled.div`
     width: 70%;
     margin: 1rem auto;
     display: flex;
     flex-direction: column;
     font-weight: bold;
     gap: 1rem;

     h3 {
        margin: 0;
     }
     
     p {
        margin: 0;
     }
`;

export const SearchBar = styled.div`
    display: flex;
    width: 100%;
    margin-left: 45rem;
    position: absolute;
    margin-top: 2rem;
    
    input {
      border-radius: 1rem;
      border: 1px solid black;
      padding: 0.5rem;
      width: 20rem;
      text-align: center;
    }
`;

export const MainTitleAndSubtitle = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    width: 100%;
    margin-top: 1rem;
    margin-left: 25rem;
    gap: 1rem;

    h1 {
      font-size: 3rem;
      margin: 0;
      background: linear-gradient(90deg, #6ABF4B, #37A139);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    p {
      font-size: 1.3rem;
      margin: 0;
    }
`;

export const GreenCentralContainer = styled.div`
    display: flex;
    margin-left: 25rem;
    margin-top: 2rem;
    gap: 5rem;
    font-family: 'Roboto', sans-serif;
    background-color: #B4EC51;
    border: none;
    border-radius: 1rem;
    justify-content: center;
    align-items: center;
    text-align: left;
    width: 40%;

    h2 {
      font-size: 2rem;
      line-height: 2rem;
    }

    h3 {
      margin: 0;
    }
`;

export const LastParragraph = styled.div`
  display: flex;
  margin-left: 25rem;
  margin-top: 1rem;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;

  p {
    font-weight: 500;
  }
`;

export const LastThreeItems = styled.div`
  display: flex;
  margin-left: 25rem;
  font-family: 'Roboto', sans-serif;
  gap: 2rem;
`;

export const LastThreeGreenImages = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  gap: 2.3rem;
`;

export const LastThreeTexts = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.2rem;
  gap: 0.6rem;

  h2 {
    margin: 0;
  }

  p {
    margin: 0;
  }
`;

export const GreenPeople = styled.div``;

export const JobsContainer = styled.div`
  position: fixed;
  top: 10%;
  right: 0;
  width: 20rem;
  height: calc(100vh - 10%);
  background-color: transparent;
  border-left: 1px solid #ccc;
  padding: 1rem;
  font-family: 'Roboto', sans-serif;
  overflow-y: auto;

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

  h2 {
    font-size: 1.5rem;
    margin: 0;
    color: #75B300;
  }

  p {
    margin: 0;
    margin-bottom: 0.5rem;
  }

  span {
    width: 100%;
    background-color: grey;
    padding: 0.05rem;
    position: absolute;
  }

  hr {
    opacity: 0;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

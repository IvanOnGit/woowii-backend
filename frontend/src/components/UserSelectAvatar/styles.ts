import styled from "styled-components";

export const ContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  gap: 1rem;

  h2 {
    font-family: 'Roboto', sans-serif;
  }
`;

export const DivContainerLogoTerPage = styled.div`
  display: flex;
  justify-content: center;
`;

export const LogoTerceraPageStyled = styled.img`
  width: 18.75rem;
  height: 5.25rem;
`;

export const AvatarWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const AvatarImage = styled.img`
  width: 160px;
  height: 160px;
  border: 4px solid #32cd32;
  border-radius: 50%;
`;

export const Button = styled.button`
  background-color: #32cd32;
  color: white;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  font-size: 1.5rem;
  transition: 0.3s;

  svg {
    color: white;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 1.2rem;
  }

  &:hover {
    background-color: #228b22;
  }
`;

export const ThumbnailsContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const Thumbnail = styled.img<{ isSelected: boolean }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  border: ${({ isSelected }) => (isSelected ? "4px solid #32cd32" : "none")};

  &:hover {
    opacity: 0.8;
  }
`;

export const UsernameInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  h3 {
    justify-content: flex-start;
    width: 11%;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  input {
    padding: 0.3rem;
    border-radius: 8px;
    outline: none;
    border: 1px solid black;
    margin-bottom: 1rem;
  }

  input::placeholder {
    padding-left: 0.5rem;
  }

  p {
    margin: 0.1rem;
    width: 20rem;
    margin-left: 10rem;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 0.7rem;

    svg {
      height: 0.8rem;
      width: 0.8rem;
      margin-right: 0.5rem;
    }
  }
`

export const ButtonNextTerceraPage = styled.button`
    width: 182px;
    height: 37px;
    background: #8FFF00;
    color: #000;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Inter', sans-serif;
    border-radius: 45px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
`
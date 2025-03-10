import styled from "styled-components";

export const ContainerColumns = styled.div`
    display: flex;
`
export const ContainerInputs = styled.div`
    margin-right: 1.25rem;
`

export const ContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  margin-top: -5rem;
  padding: 0.625rem;
  height: 100vh;
  gap: 1rem;

  h2 {
    font-family: 'Roboto', sans-serif;
  }
`;

export const DivContainerLogoTerPage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3.125rem;
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
  width: 9.688rem;
  height: 9.688rem;
  border: 4px solid #460BFF;
  border-radius: 50%;
`;

export const Button = styled.button`
  background-color: #460BFF;
  color: #FFF;
  padding: 0.5rem;
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
  gap: 0.5rem;
`;

export const Thumbnail = styled.img<{ isSelected: boolean }>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
  border: ${({ isSelected }) => (isSelected ? "4px solid #460BFF" : "none")};

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
    border-radius: 0.5rem;
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
    width: 11.375rem;
    height: 2.313rem;
    background: #460BFF;
    color: #FFF;
    font-size: 1.625rem;
    font-weight: bold;
    font-family: 'Inter', sans-serif;
    border-radius: 2.813rem;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    margin-bottom: 1.5rem;
`
export const TitleAndSetData = styled.div`
    margin-top: 1.25rem;
    display: flex;
    flex-direction: column;
    text-align: left;
`
export const TitleForm = styled.h3`
    font-size: 1.875rem;
    font-weight: 900;
    font-family: "Roboto", sans-serif;
    color: #460BFF;
`
export const ParagraphBelowTitle = styled.p`
    margin-top: -1.25rem;
    font-size: 1.25rem;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    padding-bottom: 2rem;
`

export const FormRegisterCompany = styled.form`
    position: relative;
    top: -8.75rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    gap: 2rem;
    .inputsForm{
        display: flex;
        justify-content:space-between;
        gap: 2rem;
    }
    label{
        font-size: 1.125rem;
        font-weight: 700;
        font-family: "Roboto", sans-serif;
    }
    input[type = text], input[type = email]{
        width: 19.438rem;
        outline: none;
        align-items: right;
    }
    .btnChoose{
        display: flex;
        gap: 0.3rem;
        button{
            width: 9.688rem;
            height: 1.813rem;
            border-radius: 2.813rem;
            border: none;
            cursor: pointer;
            &:hover{
                background: #460BFF;
                color: #FFF;
            }
        }
    } 
    select{
        width: 19.438rem;
        outline: none;
        align-items: right;
    }

    input {
        border: none;
        border-bottom: 1px solid grey;
    }
`
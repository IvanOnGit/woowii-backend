import styled from "styled-components";

export const MenuAside = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 19rem;
  height: 100vh;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  padding: 1rem;
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
`;

export const FirstMenuAsideItem = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;

  img {
    width: 10rem;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: grey;
  margin: 1rem 0;
`;

export const SecondDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SecondDropdownButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  padding: 0.5rem;
  cursor: pointer;
  width: 100%;
  text-align: left;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const SecondDropdownList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
`;

export const SecondDropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 1rem;

  input {
    accent-color: white;
  }

  label {
    font-size: 0.9rem;
  }
`;

export const MainContent = styled.div`
  margin-left: 21rem;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  font-family: 'Roboto', sans-serif;
  height: 100vh;
  overflow-y: auto;
  background-color: black;

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

export const CandidateCard = styled.div`
  background-color: #3b1beb; 
  color: white;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
`;
export const CandidateHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CandidateName = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
`;

export const MoreOptions = styled.div`
  cursor: pointer;
`;

export const SkillsContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
`;

export const SkillTag = styled.div`
  background-color: #d9d9d9;
  color: black;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 0.9rem;
`;

export const CandidateInfo = styled.div`
  margin-top: 10px;

  p {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 5px 0;
  }
`;

export const DropdownMenu = styled.div`
  background-color: black;
  color: white;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DropdownItem = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
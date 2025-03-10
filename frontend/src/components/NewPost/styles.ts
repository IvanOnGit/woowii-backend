import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
`

export const NewPostContainer = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 1rem;
  padding: 1rem;
  width: 50%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  gap: 1rem;
`;

export const Avatar = styled.div`
  flex-shrink: 0;
  height: 5rem;
  border-radius: 50%;
  overflow: hidden;

  img {
    margin-top: 1rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const InputContainer = styled.div`
flex: 1;
display: flex;
flex-direction: column;

input {
  width: 100%;
  border: none;
  border-radius: 0.5rem;
  background: transparent;
  outline: none;
  font-size: 1rem;
}
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.5rem;
  margin-top: 0.5rem;

  svg {
    cursor: pointer;
    color: #666;
  }
`;

export const PublishButton = styled.button`
  background: #74f034;
  color: black;
  border: none;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: bold;
  
  &:hover {
    background: #5cc429;
  }
`;
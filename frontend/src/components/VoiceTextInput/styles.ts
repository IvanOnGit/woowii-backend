import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
`;

export const StyledInput = styled.textarea`
  height: 10rem;
  width: 30rem;
  padding: 0.5rem;
  text-align: left;
  vertical-align: top;
  resize: none;
  border-radius: 1rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 1rem;
  margin-left: 2rem;

  button {
    background-color: transparent;
    border: 1px solid black;
    border-radius: 1rem;
    cursor: pointer;
    padding: 0.2rem;
    width: 8.5rem;
  }

  button:first-of-type {
    display: flex;
    border: 2px solid blue;
    color: blue;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;
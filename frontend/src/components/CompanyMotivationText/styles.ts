import styled from "styled-components";

export const StyledMotivationText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  text-align: center;
  margin-left: 7rem;
  margin-bottom: 8rem;

  h2 {
    font-size: 1.5rem;
    width: 98%;
    text-align: left;
    color: #460BFF;
  }

  span{
    margin-top: 1.6rem;
    padding-right: 0.5rem;
    background: transparent;
    img{
        width: 2rem;
        height: 2rem;
    }
  }

  p {
    width: 60%; 
    text-align: left;
    margin: 0;
  }

  .firstLine{
    display: flex;
  }
`;

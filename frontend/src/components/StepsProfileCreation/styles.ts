import styled from "styled-components";

export const ContainerWrapper = styled.div`
  text-align: center;
  margin-right: 12rem;
  font-family: 'Roboto', sans-serif;
  h2 {
    margin-bottom: 0;
    margin-left: 1rem;
    padding-bottom: 0;
    font-size: 1.5rem;
    color: #75B300;
  }
`;

export const StepsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const StepCard = styled.div`
  position: relative;
  width: 10rem;
  text-align: center;
`;

export const StepNumber = styled.div`
  position: absolute;
  top: 4rem;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
  color: white;
  font-size: 6rem;
  font-weight: bold;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
`;

export const StepImage = styled.img`
  width: 100%;
  border-radius: 15px;
  height: 12rem;
`;

export const StepText = styled.div`
  h3 {
    font-size: 0.8rem;
    color: #61b620;
    text-align: left;
  }
  p {
    font-size: 0.7rem;
    color: #333;
    text-align: left;
  }
`;
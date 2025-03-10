
import styled from "styled-components"

export const Overlay = styled.div<{ isHidden: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s ease;
  z-index: 1000;
  visibility: ${(props) => (props.isHidden ? "hidden" : "visible")};
  opacity: ${(props) => (props.isHidden ? 0 : 1)};
`

export const PopupContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  width: 15rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  text-align: center;
  transition: transform 0.3s ease;
  border: 8px inset lightgray;
`

export const PopupContent = styled.div`
  position: relative;
  z-index: 1001;
`

export const Input = styled.input`
  height: 2rem;
  width: 14rem;
  font-size: 1rem;
  padding-left: 1rem;
  cursor: pointer;
  border-radius: 1rem;
  border: none;
`

export const SubmitButton = styled.input`
  background-color: #8FFF00;
  color: #460BFF;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 1rem;
  margin-top: 1rem;
  margin-left: 0.8rem;
  width: 14rem;
  height: 2rem;
  &:hover{
    background-color: #460BFF;
    color: #FFF;
  }
`


export const Label = styled.label`
  display: flex;
  font-size: 1.2rem;
  font-weight: 700;
  align-items: self-start;
  color: #FFF;
  /* margin-left: -100px; */
`

// export const Text = styled.p`
//   font-size: 1.2rem;
//   color: #FFF;
// `

export const CloseButton = styled.span`
  position: absolute;
  top: -1rem;
  right: -0.8rem;
  font-size: 2.4rem;
  font-weight: 700;
  color: white;
  cursor: pointer;
  
  &:hover {
    color: #8FFF00;
  }
`
// export const Ancorage = styled.a`
//     text-decoration: none;
//     font-size: 1.6rem;
//     color: #8FFF00;
// `



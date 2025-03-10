
import React from "react"
import { useState, useRef, useEffect } from "react"
import { Overlay, PopupContainer, Input, SubmitButton, Label, CloseButton } from "./styles"
import { PopupContent } from "./styles" // Added import for PopupContent

interface PopupProps {
  isOpen: boolean
  onClose: () => void
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const popupRef = useRef<HTMLDivElement>(null)

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   // Handle form submission logic here
  //   console.log("Login:", login)
  //   console.log("Password:", password)
  // }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  return (
    <Overlay isHidden={!isOpen}>
      <PopupContainer>
        <PopupContent ref={popupRef}>
          {" "}
          {/* Added PopupContent wrapper */}
          <CloseButton onClick={onClose}>&times;</CloseButton>
          <form >
            <Label htmlFor="loginPopUp">LOGIN</Label>
            <Input type="text" id="loginPopUp" value={login} onChange={(e) => setLogin(e.target.value)} />
            <br />
            <Label htmlFor="passPopUp">PASSWORD</Label>
            <Input type="password" id="passPopUp" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <SubmitButton type="submit" value="ENVIAR" />
          </form>
        
        </PopupContent>{" "}
        {/* Added closing tag for PopupContent */}
      </PopupContainer>
    </Overlay>
  )
}

export default Popup



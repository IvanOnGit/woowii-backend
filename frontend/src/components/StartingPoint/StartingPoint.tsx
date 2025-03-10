import { Link } from "react-router-dom"
import { WrapperImageInit, ButtonNext, BackInitialScreen } from "./styles"

export default function StartingPoint() {
  return (
    <>
        <BackInitialScreen>
            <WrapperImageInit />
            <Link to={'/TransformationWelcome'}>
                <ButtonNext />
            </Link>
        </BackInitialScreen>

    </>
  )
}
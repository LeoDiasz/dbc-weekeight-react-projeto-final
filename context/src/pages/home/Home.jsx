import { SideBar } from "../../components/SideBar/SideBar"
import {DivContainer} from "./home.styled"

export const Home = () => {
  return (
    <DivContainer>
      <SideBar/>
      <main>
        <h1>Seja bem vindo!</h1>
      </main>
    </DivContainer>
    
  )
}

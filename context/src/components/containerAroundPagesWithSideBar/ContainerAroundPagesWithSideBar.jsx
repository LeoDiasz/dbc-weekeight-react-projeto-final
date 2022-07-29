import { SideBar } from "../sideBar/SideBar"
import { DivContainer } from "./container.styled"

export const ContainerAroundPagesWithSideBar = ({children}) => {
  return (
    <DivContainer>
      <SideBar/>
      {children}
    </DivContainer>
  )
}

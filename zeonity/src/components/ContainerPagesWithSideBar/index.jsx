import { SideBar } from "../SideBar"
import { DivContainer, SectionPagesWithSideBar, MainPageWithSideBar } from "./styles"

export const ContainerPagesWithSideBar = ({children}, isMain) => {
  return (
    <DivContainer>
      <SideBar/>
      {isMain ? 
        <MainPageWithSideBar>
          {children}
        </MainPageWithSideBar> 
      :
        <SectionPagesWithSideBar>
          {children}
        </SectionPagesWithSideBar>
      }    
    </DivContainer>
  )
}

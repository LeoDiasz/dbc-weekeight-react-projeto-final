import styled, {css} from "styled-components"

const DivContainer = styled.div`
  display: grid;
  grid-template-columns: 35vh 1fr;
  background-color: var(--color-background-light);
  min-height: 100vh;
`

const baseStylesSection = css`
  display: flex;
  flex-direction: column;
  gap: ${props => props.gap ? props.gap : "100px"};
  padding: 40px;
`

const SectionPagesWithSideBar = styled.section`
  ${baseStylesSection}
`

const MainPageWithSideBar = styled.main`
  ${baseStylesSection}
`

export {DivContainer, SectionPagesWithSideBar, MainPageWithSideBar}
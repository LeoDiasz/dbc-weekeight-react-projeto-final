import styled from "styled-components"

const DivContainer = styled.div`
  display: grid;
  grid-template-columns: 35vh 1fr;
  background-color: var(--color-background-light);
  min-height: 100vh;
`

const SectionPagesWithSideBar = styled.section`
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding: 40px;
`

const MainPageWithSideBar = styled.main`
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding: 40px;
`

export {DivContainer, SectionPagesWithSideBar, MainPageWithSideBar}
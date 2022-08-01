import styled from "styled-components"

const DivContainer = styled.div `
  display: grid;
  grid-template-columns: 45% 55%;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;

    > div:first-child {
      display: none;
    }
  }

  @media (max-width: 576px) {

    > section > section {
      width: 340px;
    }
  }

`

const DivBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background-dark);
  min-height: 100vh;

  img {
    width: 350px;
  }
`

const SectionPagesLoginAndCreateUser = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background-light);
  min-height: 100vh;
  text-align: center;

  a {
    color: var(--color-text-gray-dark);

    span {
      color: var(--color-primary-dark);
      transition: 0.2s;
    }

    &:hover {
      span {
        color: var(--color-primary);
      }
    }
  }
`


export {SectionPagesLoginAndCreateUser, DivContainer, DivBanner}
import styled from "styled-components"

const PersonContent = styled.li`
  display: grid;
  grid-template-columns: 1.5fr 300px repeat(3, 1fr);
  align-items: center;
  justify-content: space-between;
  height: 92px;
  width: 100%;
  padding: 0 40px;
  gap: 40px;
  text-align: left;
  border-bottom: 1px solid var(--color-border);
  transition: 0.3s;

  &:hover {
    background-color: #f2f2f2;
  }

  h4 {
    font-weight: normal;
    color: var(--color-text-gray-dark)
  }

  > div {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: flex-end;
  }
`

export {PersonContent}

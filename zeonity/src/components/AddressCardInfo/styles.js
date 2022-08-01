import styled from "styled-components"

export const ListAddressContent = styled.li`
  display: grid;
  grid-template-columns: repeat(6, 1fr) 100px;
  align-items: center;
  justify-content: space-between;
  height: 92px;
  width: 100%;
  padding: 0 40px;
  gap: 40px;
  text-align: left;
  border-bottom: 1px solid var(--color-border);
  transition: 0.3s;
`
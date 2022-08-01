import styled from "styled-components"
import { PersonContent } from "../PersonCardInfo/styles"

export const ListAddressContent = styled(PersonContent)`
  display: grid;
  grid-template-columns: repeat(7, 1fr) 100px;
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
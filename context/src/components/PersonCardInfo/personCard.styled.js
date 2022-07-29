import styled from "styled-components"

const PersonContent = styled.li`
  display: grid;
  grid-template-columns: 2fr 300px repeat(2, 1fr) 150px 50px;
  gap: 40px;
  align-items: center;
  height: 92px;
  width: 100%;
  padding: 0 40px;
  text-align: left;
  border-bottom: 1px solid #DFE0EB;
  cursor: pointer;
  transition: 0.3s;
  position: relative;

  &:hover {
    background-color: #F7F8FC;
  }

  > div {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`

const ButtonWithIcon = styled.button`
  border: none;
  background-color: transparent;
  font-size: 30px;
  transition: 0.3s;
  cursor: pointer;
  position: absolute;
  right: 40px;

  &:hover {
    color: #29CC97;
  }

`

export {PersonContent, ButtonWithIcon}

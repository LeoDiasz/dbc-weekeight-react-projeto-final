import styled from "styled-components"

const PersonContent = styled.li`
  display: grid;
  grid-template-columns: 1.8fr 300px repeat(3, 1fr);
  justify-content: space-between;
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
    gap: 20px;
    align-items: center;
    justify-content: flex-end;
  }
`

export {PersonContent}

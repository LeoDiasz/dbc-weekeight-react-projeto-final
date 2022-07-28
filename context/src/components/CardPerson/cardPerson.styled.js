import styled from "styled-components"

const PersonContent = styled.li`
  display: grid;
  grid-template-columns: 2fr 1.5fr repeat(2, 1fr) 60px 1fr;
  gap: 40px;
  padding: 0 40px;
  align-items: center;
  text-align: left;
  height: 92px;
  width: 100%;
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

  button {
    border: none;
  }

   > *:last-child { 
    background-color: transparent;
    font-size: 30px;
    transition: 0.3s;
    cursor: pointer;
    position: absolute;
    right: 40px;
     
  }

  > *:last-child:hover {
    color: #29CC97;
  }
`

const ButtonStyle = styled.button`
  background-color: ${props => (props.color && props.color)};
  color: #fff;
  border-radius: 8px;
  padding: 5px 20px;
  cursor: pointer;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9)
  }
`


export {ButtonStyle, PersonContent}

import styled from "styled-components"

const PersonContent = styled.li`
  grid-template-columns: 2fr 300px repeat(2, 1fr) 60px 1fr;
  display: grid;
  gap: 40px;
  align-items: center;
  padding: 0 40px;
  height: 92px;
  width: 100%;
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

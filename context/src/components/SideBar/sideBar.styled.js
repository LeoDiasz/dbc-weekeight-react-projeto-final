import styled from "styled-components";

const NavContent = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 50px;
  background-color: #363740;
  width: 35vh;
  gap: 60px;

  button {
    width: 100px;
    height: 30px;
    background-color: #3751FF;
    color: #fff;
    cursor: pointer;
    border: none;
    border-radius: 4px;
  }
`

const ListContent = styled.ul`

    display: flex;
    flex-direction: column;
    gap: 40px;
   
    
    li {
      width: 100%;
    }

    a {
      color: #A4A6B3;
      height: 56px;
    }
    
    a:hover {
      background-color: #9FA2B4;
      color: #DDE2FF;
    }

`
export {NavContent, ListContent}
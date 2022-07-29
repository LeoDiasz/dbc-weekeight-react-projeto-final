import styled from "styled-components";

const NavContent = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  width: 35vh;
  padding: 40px 0;
  background-color: #363740;

`

const ListContent = styled.ul`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 20px;
    width: 100%;
    
    li {
      width: 100%;
      padding: 20px 0;
      cursor: pointer;
      transition: 0.1s;
    }

    li:hover {
      background-color: #9FA2B4;
      
      a {
        color: #DDE2FF;
      }
    }

    a {
      color: #A4A6B3;
      padding: 20px 60px;
      width: 100%;
    }
    

`
export {NavContent, ListContent}
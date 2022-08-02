import styled from "styled-components";

const NavContent = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 35vh;
  gap: 40px;
  padding: 40px 0;
  background-color: var(--color-background-dark);

`

const ListContent = styled.ul`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    
    li {
      width: 100%;
      transition: 0.1s;
    }

    a {
      display: inline-block;
      padding: 30px 0;
      width: 100%;
      color: var(--color-text-gray);
      font-weight: bold;
    }

    li:hover {
      background-color: var(--color-primary);

      a {
        color: var(--color-text-light);
      }
    }

`
export {NavContent, ListContent}
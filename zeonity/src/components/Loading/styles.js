import styled from "styled-components";

const LoadingContainer = styled.div`
  background-color: rgba(f, f, f, 0.1);
`

const LoadingContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 200px;
  padding: 10px;
  background-color: var(--color-background-light);
  border-radius: 8px;
  color: var(--color-text-gray-dark);
`

export {LoadingContent, LoadingContainer}
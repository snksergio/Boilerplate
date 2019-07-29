import styled, { keyframes } from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;
`;

const ContentAnimation = keyframes`
  from { transform: translateX(150px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const StyledMain = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  box-sizing: border-box;
  flex-direction: column;
  box-sizing: border-box;
  padding: 6rem;
  overflow-y: auto;
  overflow-x: hidden;
  & > div {
    transition: all ease 0.25s;
    animation: ${ContentAnimation} 0.25s ease backwards;
  }
`;

export { StyledContainer, StyledMain };

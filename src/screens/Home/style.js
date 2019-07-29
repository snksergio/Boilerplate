import styled, { keyframes } from 'styled-components';
import Btn from '../../components/Button/style';

const AnimationFade = keyframes`
  from { transform: translateY(85px); opacity: 0; }
  to { transform: translateY(0px); opacity: 1; }
`;

const StyledContainer = styled.div`
  flex: 1;
  max-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  & img {
    max-height: 50vh;
    animation: ${AnimationFade} 0.25s ease forwards;
  }
  & h1 {
    font-size: 3.4rem;
    margin: 0;
    padding: 0;
    line-height: 6rem;
    animation: ${AnimationFade} 0.25s 0.1s ease backwards;
    font-weight: 700;
  }
`;

const StyledSpan = styled.span`
  font-size: 1.6rem;
  color: #99a5b8;
  font-weight: 300;
  animation: ${AnimationFade} 0.25s 0.2s ease backwards;
`;

const StyledContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > ${Btn} {
    margin-top: 6rem;
    animation: ${AnimationFade} 0.25s 0.3s ease backwards;
  }
`;

const StyledFooter = styled.div`
  font-size: 1.3rem;
  color: #ff4859;
  font-weight: 500;
  margin-bottom: 3.5rem;
  animation: ${AnimationFade} 0.25s 0.35s ease backwards;
`;

export { StyledContainer, StyledContent, StyledSpan, StyledFooter };

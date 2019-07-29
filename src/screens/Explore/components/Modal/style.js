import styled, { keyframes } from 'styled-components';

const BackgroundAnimation = keyframes`
  from { background: rgba(0, 0, 0, 0); }
  to { background: rgba(0, 0, 0, 0.5); }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  animation: ${BackgroundAnimation} 0.25s ease backwards;
`;

const ContentAnimation = keyframes`
  from { transform: translateY(150px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const Content = styled.div`
  min-width: 650px;
  max-width: 80vw;
  background: #fff;
  border-radius: 15px;
  box-sizing: border-box;
  position: relative;
  animation: ${ContentAnimation} 0.25s 0.25s ease backwards;
`;

const Header = styled.div`
  padding: 40px 40px 20px 40px;
  text-align: center;
  box-sizing: border-box;
  & h1 {
    font-size: 2.5rem;
    padding: 0;
    margin: 0;
  }
  & p {
    color: ${({ theme }) => theme.palette.secondary.light};
    padding: 0;
    margin: 0;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  box-sizing: border-box;
  text-align: center;
`;

const Footer = styled.div`
  border-top: solid 1px ${({ theme }) => theme.palette.border.main};
  padding: 40px;
  margin-top: 20px;
  text-align: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const BtClose = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: solid 2px ${({ theme }) => theme.palette.border.main};
  box-sizing: border-box;
  cursor: pointer;
  transition: all ease 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: translateY(-4px);
  }
  &:active {
    transform: translateY(0px);
  }
  & > svg {
    width: 15px;
    margin: auto;
    fill: ${({ theme }) => theme.palette.secondary.light};
    transition: all ease 0.2s;
  }
  &:hover > svg {
    fill: #000;
  }
`;

export { Container, Content, Header, Body, Footer, BtClose };

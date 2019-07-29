import styled, { keyframes, css } from 'styled-components';

const contentanimation = keyframes`
  from { transform: translateY(85px); opacity: 0; }
  to { transform: translateY(0px); opacity: 1; }
`;

const Container = styled.div`
  width: 260px;
  height: 100%;
  box-sizing: border-box;
  border-right: solid 1px ${({ theme }) => theme.palette.border.main};
  display: flex;
  flex-direction: column;
  animation: ${contentanimation} 0.25s ease forwards;
`;

const Item = styled.div`
  min-width: 200px;
  font-size: 15px;
  color: ${({ theme }) => theme.palette.secondary.light};
  height: 38px;
  font-weight: 500;
  position: relative;
  display: flex;
  align-items: center;
  transition: all ease 0.15s;
  &:before {
    content: '';
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.palette.background.lineardark},
      ${({ theme }) => theme.palette.background.linearlight}
    );
    position: absolute;
    width: 100%;
    left: -50%;
    height: 100%;
    opacity: 0;
    transition: all ease 0.45s;
    border-radius: 25px;
  }
  & > span {
    display: block;
    padding: 0 20px 0 15px;
    position: absolute;
    left: 0;
    transition: left ease 0.15s, transform ease 0.15s;
    white-space: nowrap;
  }
  &:hover {
    color: #fff;
  }
  &:hover:before {
    left: 0;
    opacity: 1;
  }
  &:hover > span {
    left: 100%;
    transform: translateX(-100%);
  }
  ${props =>
    props.active &&
    css`
      color: #fff;
      &:before {
        left: 0;
        opacity: 1;
      }
      & > span {
        left: 100%;
        transform: translateX(-100%);
      }
    `}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 0 15px;
  margin-bottom: 30px;
`;

const Divider = styled.div`
  font-size: 13px;
  color: #000000;
  font-weight: 700;
  box-sizing: border-box;
  padding: 0 30px;
  margin-bottom: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 160px;
  min-height: 160px;
`;

const Footer = styled.div`
  border-top: solid 1px ${({ theme }) => theme.palette.border.main};
  width: 100%;
  text-align: center;
  padding: 25px 0;
  font-size: 11px;
  color: ${({ theme }) => theme.palette.secondary.light};
  margin-top: auto;
  font-weight: 500;
`;

const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  overflow: auto;
`;

export { Item, Container, Divider, Content, Header, Footer, Scroll };

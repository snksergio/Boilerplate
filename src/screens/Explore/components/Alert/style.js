import styled, { css, keyframes } from 'styled-components';
import IconAlert from '../../assets/img/alert-icon-alert.png';
import IconSuccess from '../../assets/img/alert-icon-sucess.png';
import IconError from '../../assets/img/alert-icon-error.png';

const contentanimation = keyframes`
  from { transform: translateY(85px); opacity: 0; }
  to { transform: translateY(0px); opacity: 1; }
`;

const Container = styled.div`
  width: 450px;
  min-height: 60px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  background: ${({ theme }) => theme.palette.alert.main};
  color: #fff;
  box-sizing: border-box;
  padding: 15px 15px;
  animation: ${contentanimation} 0.25s ease backwards;
  box-shadow: 0 10px 15px -10px ${({ theme }) => theme.palette.alert.main};
  transition: all ease 0.15s;
  & > i {
    min-width: 25px;
    width: 25px;
    height: 25px;
    max-height: 25px;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.3);
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${IconAlert});
    margin-right: 15px;
    display: block;
  }
  & > span {
    flex: 1;
  }
  & + & {
    margin-top: 20px;
  }
  ${props =>
    props.fixed &&
    css`
       {
        position: fixed;
        top: 35px;
        right: 35px;
      }
    `};
  &:hover {
    transform: translateY(-8px);
  }
  &[data-tipo='error'] {
    box-shadow: 0 10px 15px -10px ${({ theme }) => theme.palette.alert.error};
    background: ${({ theme }) => theme.palette.alert.error};
  }
  &[data-tipo='error'] > i {
    background-image: url(${IconError});
  }
  &[data-tipo='success'] {
    box-shadow: 0 10px 15px -10px ${({ theme }) => theme.palette.alert.success};
    background: ${({ theme }) => theme.palette.alert.success};
  }
  &[data-tipo='success'] > i {
    background-image: url(${IconSuccess});
  }
  &[data-tipo='alert'] {
    box-shadow: 0 10px 15px -10px ${({ theme }) => theme.palette.alert.alert};
    background: ${({ theme }) => theme.palette.alert.alert};
  }
  &[data-tipo='alert'] > i {
    background-image: url(${IconAlert});
  }
`;

const AlertClose = styled.div`
  width: 35px;
  margin-left: 15px;
  text-align: center;
  cursor: pointer;
`;

export { Container, AlertClose };

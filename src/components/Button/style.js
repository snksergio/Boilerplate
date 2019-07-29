import styled from 'styled-components';

const Btn = styled.button`
  border: none;
  font-family: 'Poppins', sans-serif;
  min-width: 250px;
  height: 60px;
  line-height: 60px;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.palette.button.color};
  padding: 0 50px;
  border-radius: 8px;
  outline: none;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.palette.background.lineardark},
    ${({ theme }) => theme.palette.background.linearlight}
  );
  background-size: 120% 100%;
  font-weight: 500;
  text-align: center;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transition: all ease 0.15s;
  box-sizing: border-box;
  box-shadow: 0 20px 25px -10px ${({ theme }) => theme.palette.boxshadow.main};
  &:hover {
    transform: translateY(-8px);
    background-position: 100% 0;
  }
  &:active {
    transform: translateY(0px);
    box-shadow: 0 5px 10px -10px ${({ theme }) => theme.palette.boxshadow.main};
    background-size: 120% 100%;
  }
  & > img {
    margin-right: 20px;
  }
  @media (max-width: ${({ theme }) => theme.sizes.smalldesktop}px) {
    min-width: 200px;
  }
`;

export default Btn;

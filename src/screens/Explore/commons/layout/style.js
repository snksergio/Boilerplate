import styled from 'styled-components';

const DividerStyled = styled.div`
  width: 100%;
  margin: 20px 0;
  & > h3 {
    font-size: 1.8rem;
    line-height: 1.8rem;
    font-weight: 700;
    position: relative;
    margin: 0;
  }
  & > h3:before {
    content: '';
    width: 3px;
    height: 15px;
    background: ${({ theme }) => theme.palette.background.lineardark};
    display: inline-block;
    margin-right: 10px;
  }
`;

const BoxStyled = styled.div`
  width: 100%;
  border: solid 1px ${({ theme }) => theme.palette.border.main};
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px;
`;

export { DividerStyled, BoxStyled };

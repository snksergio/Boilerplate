import styled from 'styled-components';
import { ColStyled } from '../../../components/Grid/style';

const StyledContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  & ${ColStyled} {
    border: solid 1px ${({ theme }) => theme.palette.border.main};
    background: ${({ theme }) => theme.palette.background.graylight};
    padding: 20px;
    font-weight: 600;
    font-size: 13px;
  }
`;

export default StyledContainer;

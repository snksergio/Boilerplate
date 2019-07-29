import styled, { css } from 'styled-components';

const RowStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  &:first-child {
    margin-top: 0;
  }
  ${props =>
    props.center &&
    css`
       {
        justify-content: center;
      }
    `};
  ${props =>
    props.right &&
    css`
       {
        justify-content: flex-end;
      }
    `};
  ${props =>
    props.left &&
    css`
       {
        justify-content: flex-start;
      }
    `};
  ${props =>
    props.column &&
    css`
       {
        flex-direction: column;
      }
    `}
`;

const ColStyled = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  box-sizing: border-box;
  padding: 10px;
  ${props =>
    props.size &&
    css`
       {
        flex: 0 0 ${(100 / 12) * props.size}%;
        max-width: ${(100 / 12) * props.size}%;
      }
    `};
  ${props =>
    props.offset &&
    css`
       {
        margin-left: ${(100 / 12) * props.offset}%;
      }
    `};
  @media (max-width: 768px) {
    ${props =>
      props.size &&
      css`
         {
          flex: 0 0 100%;
          max-width: 100%;
        }
      `};
  }
`;

export { RowStyled, ColStyled };

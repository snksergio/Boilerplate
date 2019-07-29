import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 4rem;
  min-height: 72px;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  & > h1 {
    font-size: 3.4rem;
    color: ${({ theme }) => theme.palette.primary.dark};
    margin: 0;
  }
  & > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.palette.secondary.light};
    margin: 0;
  }
`;

export { Container, Content };

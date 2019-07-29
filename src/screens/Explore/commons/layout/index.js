import React from 'react';
import { DividerStyled, BoxStyled } from './style';

const Divider = props => {
  const { title } = props;
  return (
    <DividerStyled>
      <h3>{title}</h3>
    </DividerStyled>
  );
};

const Box = props => {
  const { children } = props;
  return <BoxStyled>{children}</BoxStyled>;
};

export { Box, Divider };

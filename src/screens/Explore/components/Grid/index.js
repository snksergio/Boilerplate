import React from 'react';
import PropTypes from 'prop-types';
import { RowStyled, ColStyled } from './style';

const Row = props => {
  const { className, children, column, center, right, left } = props;
  return (
    <RowStyled
      column={column}
      center={center}
      right={right}
      left={left}
      className={`${className ? `${className} ` : ''}row ${center}`}
    >
      {children}
    </RowStyled>
  );
};

Row.defaultProps = {
  column: false,
  center: false,
  right: false,
  left: false,
};

Row.propTypes = {
  column: PropTypes.bool,
  center: PropTypes.bool,
  right: PropTypes.bool,
  left: PropTypes.bool,
};

const Col = props => {
  const { sm, md, lg, xl, size, children, offset } = props;
  const css =
    (sm ? `col-sm-${sm} ` : '') +
    (md ? `col-md-${md} ` : '') +
    (lg ? `col-lg-${lg} ` : '') +
    (xl ? `col-xl-${xl} ` : '') +
    (size ? `col-size-${size} ` : '');
  return (
    <ColStyled size={size} offset={offset} className={`${css}col`}>
      {children}
    </ColStyled>
  );
};

Col.defaultProps = {
  size: 1,
  offset: null,
};

Col.propTypes = {
  size: PropTypes.number,
  offset: PropTypes.number,
};

export { Row, Col };

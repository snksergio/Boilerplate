import React from 'react';
import PropTypes from 'prop-types';
import Btn from './style';

const Button = props => {
  const { onClick, children, icon, secondary } = props;
  return (
    <Btn icon={icon} secondary={secondary} onClick={onClick}>
      {children}
      {icon && <img src={icon} alt="" />}
    </Btn>
  );
};

Button.defaultProps = {
  onClick: null,
  icon: null,
  secondary: false,
};

Button.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.string,
  secondary: PropTypes.bool,
};

export default Button;

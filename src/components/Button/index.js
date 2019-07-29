import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Btn from './style';

class Button extends Component {
  render() {
    const { onClick, children, icon } = this.props;
    return (
      <Btn onClick={onClick}>
        {icon && <img src={icon} alt="" />}
        {children}
      </Btn>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.string,
};

Button.defaultProps = {
  onClick: null,
  icon: null,
};

export default Button;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, AlertClose } from './style';
import IconClose from '../../assets/img/alert-icon-close.png';

class Alert extends Component {
  renderSwitch = param => {
    switch (param) {
      case 'error':
        return 'error';
      case 'success':
        return 'success';
      case 'alert':
        return 'alert';
      default:
        return 'default';
    }
  };

  render() {
    const { children, tipo, onClick, fixed } = this.props;
    return (
      <Container fixed={fixed} data-tipo={this.renderSwitch(tipo)}>
        <i />
        <span>{children}</span>
        <AlertClose onClick={onClick}>
          <img src={IconClose} alt="" />
        </AlertClose>
      </Container>
    );
  }
}

Alert.defaultProps = {
  children: 'Stranger',
  tipo: 'default',
  fixed: false,
};

Alert.propTypes = {
  children: PropTypes.string,
  tipo: PropTypes.string,
  fixed: PropTypes.bool,
};

export default Alert;

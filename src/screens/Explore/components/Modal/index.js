import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Header, Footer, Body, BtClose } from './style';
import Button from '../Button';

function SvgCloseIcon() {
  return (
    <svg
      viewBox="0 0 47.971 47.971"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g>
        <path
          d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
		c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
		C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
		s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"
        />
      </g>
    </svg>
  );
}

class Modal extends Component {
  render() {
    const {
      title,
      subtitle,
      children,
      footer,
      btConfirm,
      btCancel,
      btClose,
    } = this.props;
    return (
      <Container>
        <Content>
          {btClose && (
            <BtClose onClick={btClose}>
              <SvgCloseIcon />
            </BtClose>
          )}
          <Header>
            {(title || subtitle) && (
              <Fragment>
                <h1>{title}</h1>
                <p>{subtitle}</p>
              </Fragment>
            )}
          </Header>
          {children && <Body>{children}</Body>}
          {(footer || btConfirm || btCancel) && (
            <Footer>
              {btConfirm && <Button onClick={btConfirm}>Confirmar</Button>}
              {btCancel && <Button onClick={btCancel}>Cancelar</Button>}
              {footer}
            </Footer>
          )}
        </Content>
      </Container>
    );
  }
}

Modal.defaultProps = {
  title: 'Modal Screen',
  subtitle: 'Exemplo de uma estrutura simples de modal.',
  btClose: true,
};

Modal.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  btClose: PropTypes.func,
};

export default Modal;

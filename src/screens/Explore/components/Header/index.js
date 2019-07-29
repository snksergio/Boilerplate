import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Container, Content } from './style';

const Header = props => {
  const { title, subtitle } = props;
  return (
    <Container>
      <Content>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </Content>
    </Container>
  );
};

Header.defaultProps = {
  title: null,
  subtitle: null,
};

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default withRouter(Header);

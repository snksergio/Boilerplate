import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import StyledContainer from './style';

class Home extends Component {
  componentDidMount() {
    const { history } = this.props;
    history.push('Explorer/Estrutura');
  }

  render() {
    return (
      <StyledContainer>
        <p>Hello Redirect</p>
      </StyledContainer>
    );
  }
}

export default withRouter(Home);

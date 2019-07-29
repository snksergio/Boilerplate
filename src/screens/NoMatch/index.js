import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ErrorImage from '../../assets/img/404.gif';
import { StyledContainer, StyledSpan, StyledContent } from './style';

class NoMatch extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { history } = this.props;
    history.push('/Explorer');
  }

  render() {
    return (
      <StyledContainer>
        <StyledContent>
          <img src={ErrorImage} alt="" />
          <h1>Página não encontrada</h1>
          <StyledSpan>
            Desculpe, a página que você estava procurando não foi encontrada.
          </StyledSpan>
        </StyledContent>
      </StyledContainer>
    );
  }
}

export default withRouter(NoMatch);

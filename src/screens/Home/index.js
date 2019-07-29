import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../../components/Button';
import Launch from '../../assets/img/rocket.png';
import {
  StyledContainer,
  StyledSpan,
  StyledFooter,
  StyledContent,
} from './style';

class Home extends Component {
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
          <img src={Launch} alt="" />
          <h1>Starting on Boilerplate</h1>
          <StyledSpan>
            Compilado de padrões utilizados para desenvolver Front-end em
            projetos React JS
          </StyledSpan>
          <Button onClick={this.handleClick}>Explore</Button>
        </StyledContent>
        <StyledFooter>Iniciativa de apoio para Desenvolvedores</StyledFooter>
      </StyledContainer>
    );
  }
}

export default withRouter(Home);

/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../components/Header';
import StyledContainer from './style';

class Dependencias extends Component {
  render() {
    return (
      <StyledContainer>
        <Header
          title="Dependências"
          subtitle="Lista de dependências utilizados para o desenvolvimento da base do Boilerplate"
        />
        <article>
          <h2>styled-components</h2>
          <p>
            Biblioteca (lib) que permite escrever códigos CSS dentro do
            JavaScript, no qual ajuda principalmente na organização e na
            depêndencia de estilos dos componentes no geral.
          </p>
          <blockquote>
            Documentação:
            <a target="noreferrer" href="https://www.styled-components.com/">
              https://www.styled-components.com/
            </a>
          </blockquote>
          <h2>React Router v4</h2>
          <p>
            Lib para controle de rotas que permite configurar todo o
            gerenciamento das rotas. Tabalha com <code>History API</code>, mas
            também permite trabalhar com outros formatos se necessário.
          </p>
          <blockquote>
            Documentação:
            <a
              target="noreferrer"
              href="https://reacttraining.com/react-router/"
            >
              https://reacttraining.com/react-router/
            </a>
          </blockquote>
          <h2>ESLint</h2>
          <p>
            Fiscalizador de código no qual irá acusar erros baseados na regra
            que foi definido no arquivo <code>.eslintrc.js</code>, importando as
            principais configurações do AirBnb e compatível com plugins para
            editores, segue as dependencias no <code>package.json</code>
          </p>
          <pre className="code code-struture">
            <code>
              {`
"eslint": "^5.16.0",
"eslint-config-airbnb": "^17.1.0",
"eslint-config-prettier": "^4.2.0",
"eslint-plugin-import": "^2.17.2",
"eslint-plugin-jsx-a11y": "^6.2.1",
"eslint-plugin-prettier": "^3.0.1",
"eslint-plugin-react": "^7.12.4",
"prettier": "^1.18.2",
"prettier-eslint": "^8.8.2",
          `}
            </code>
          </pre>
          <h2>SonarQube</h2>
          <p>
            Plataforma dedicado à analisar continuamente seu código e mensurar a
            qualidade técnica do código fonte, desde o projeto até o nível do
            método. Retorna erros e duplicidades do projeto com sugestões de
            melhorias e os caminhos a serem melhorados.
          </p>
          <blockquote>
            Documentação:
            <a target="noreferrer" href="https://www.sonarqube.org/">
              https://www.sonarqube.org/
            </a>
          </blockquote>
        </article>
      </StyledContainer>
    );
  }
}

export default withRouter(Dependencias);

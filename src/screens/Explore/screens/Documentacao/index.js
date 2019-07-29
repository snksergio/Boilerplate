/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../components/Header';
import StyledContainer from './style';

class Documentacao extends Component {
  render() {
    return (
      <StyledContainer>
        <Header
          title="Documentacao"
          subtitle="Lista de apoio com documentação das dependencias e de uso do Boilerplate"
        />
        <article>
          <h2>Styles</h2>
          <p>
            Arquivos responsávels pela padronização de estilos do Boilerplate
          </p>
          <blockquote>
            Documentação:
            <a
              target="noreferrer"
              href="https://github.com/snksergio/Boilerplate/blob/master/docs/Styles.md"
            >
              https://github.com/snksergio/Boilerplate/blob/master/docs/Styles.md
            </a>
          </blockquote>
          <h2>React Router v4</h2>
          <p>Configurações e administração das rotas do Boilerplate</p>
          <blockquote>
            Documentação:
            <a
              target="noreferrer"
              href="https://github.com/snksergio/Boilerplate/blob/master/docs/Router.md"
            >
              https://github.com/snksergio/Boilerplate/blob/master/docs/Router.md
            </a>
          </blockquote>
          <h2>SonarQube</h2>
          <p>Guia para implementação do SonarQube do Boilerplate</p>
          <blockquote>
            Documentação:
            <a
              target="noreferrer"
              href="https://github.com/snksergio/Boilerplate/blob/master/docs/SonarQube.md"
            >
              https://github.com/snksergio/Boilerplate/blob/master/docs/SonarQube.md
            </a>
          </blockquote>
          <h2>Documento de Exemplo</h2>
          <p>
            Exemplo de uma estrutura padrão para a criação de uma documentação
          </p>
          <blockquote>
            Documentação:
            <a
              target="noreferrer"
              href="https://github.com/snksergio/Boilerplate/blob/master/docs/Exemplo.md"
            >
              https://github.com/snksergio/Boilerplate/blob/master/docs/Exemplo.md
            </a>
          </blockquote>
        </article>
      </StyledContainer>
    );
  }
}

export default withRouter(Documentacao);

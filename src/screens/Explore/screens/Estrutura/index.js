import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../components/Header';
import StyledContainer from './style';

class Estrutura extends Component {
  render() {
    return (
      <StyledContainer>
        <Header
          title="Estrutura"
          subtitle="Definição estruturais de base do Boilerplate"
        />
        <article>
          <h2>Pastas e Arquivos</h2>
          <p>
            Estrutura de pastas e arquivos do diretório raiz inicial do
            Boilerplate
          </p>
          <pre className="code code-struture">
            <span>ROOT</span>
            <code>
              {` 
root-directory
├── node_modules
├── package.json
├── README.md
├── .babelrc
├── .editorconfig
├── sonar-project.properties
├── public
│   ├── favicon.ico
│   ├── icons.png
│   ├── manifest.json
│   ├── robots.txt
│   └── service-worker.js
├── design
|   └── designs.fw.png
├── docs
|   └── documents.md
└── src
    ├── assets
    │   ├── fonts
    │   ├── img
    ├── commons
    │   └── styles
    |       ├── global.js
    |       └── theme.js
    ├── components
    ├── routes
    ├── screens
    |   ├── Main
    |   ├── Home
    |   ├── NoMatch
    |   └── Explore
    |       └── Boilerplate Examples
    ├── App.js
    ├── index.js
    └── serviceWorker.js
          `}
            </code>
          </pre>
          <h2>Componentes</h2>
          <p>Estrutura padrão de criação de componentes</p>
          <pre className="code code-struture">
            <span>ROOT</span>
            <code>
              {`root-directory
└── src
    └── components
        └── Componene
            ├── index.js
            └── style.js`}
            </code>
          </pre>
          <h2>Routes</h2>
          <p>Estrutura de definições de Rotas e Configurações</p>
          <pre className="code code-struture">
            <span>ROOT</span>
            <code>
              {`root-directory
└── src
    └── routes
        ├── index.js
        └── get-routes.js`}
            </code>
          </pre>
          <h2>Temas e Estilos</h2>
          <p>Estrutura de pasta e arquivos para o tema e estilos globais</p>
          <pre className="code code-struture">
            <span>ROOT</span>
            <code>
              {`root-directory
└── src
    └── commons
        └── styles
            ├── global.js
            └── theme.js`}
            </code>
          </pre>
        </article>
      </StyledContainer>
    );
  }
}

export default withRouter(Estrutura);

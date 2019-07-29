import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../../components/Header';
import StyledContainer from './style';

class Keyboard extends Component {
  render() {
    return (
      <StyledContainer>
        <Header
          title="Keyboard"
          subtitle="Definição de estrutura de pastas e arquivos do diretório raiz inicial de um projeto"
        />
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
    ├── App.js
    ├── index.js
    └── serviceWorker.js
          `}
          </code>
        </pre>
      </StyledContainer>
    );
  }
}

export default withRouter(Keyboard);

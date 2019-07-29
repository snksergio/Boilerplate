/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../components/Header';
import StyledContainer from './style';

class Analise extends Component {
  render() {
    return (
      <StyledContainer>
        <Header
          title="Analise de Código"
          subtitle="Ferramentas utilizadas e configuradas para a análise da qualidade de código"
        />
        <article>
          <h2>ESLint</h2>
          <p>
            O <code>ESLint</code> é uma ferramenta para identificar e relatar
            padrões encontrados nos códigos, o mesmo está configurado para o
            plugin voltado para o Editor de texto{' '}
            <code>(VSCode, Sublime, etc..)</code> acionando em tempo de
            execução.
          </p>
          <pre className="code code-struture">
            <code>
              {`root-directory
└── eslintrc.js`}
            </code>
          </pre>
          <pre className="code code-struture code-javascript">
            <code>
              {`
module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "react-app",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/react"
  ],
  "plugins": [
    "prettier",
    "react"
  ],
  "env": {
    "node": true,
    "browser": true
  },
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "all",
      }
    ],
    "jsx-a11y/no-autofocus": "off",
    "react/forbid-prop-type":  "off",
    "react/prop-types":  "off",
    "react/forbid-prop-types": "off",
    "react/prefer-stateless-function": "off",
    "react/jsx-filename-extension": "off",
    "no-use-before-define": "off",
    "react/jsx-closing-bracket-location": "off",
    "react/jsx-curly-spacing": "off",
    "react/jsx-equals-spacing": "off",
    "react/jsx-first-prop-new-line": "off",
    "react/jsx-indent": "off",
    "react/jsx-indent-props": "off",
    "react/jsx-max-props-per-line": "off",
    "react/jsx-tag-spacing": "off",
    "react/jsx-wrap-multilines": "off"
  }
}
          `}
            </code>
          </pre>
          <h3>• Autocorreção Visual Studio</h3>
          <p>
            Para configurar a Autocorreção Prettier (Identação, Importação e
            exportação de variáveis, ifs...) para o Visual Studio adicione no{' '}
            <code>settings.json</code> as seguintes propriedades:
          </p>
          <pre className="code code-struture">
            <code>
              {`"editor.formatOnSave": true,
"[javascript]": {
  "editor.formatOnSave": false,
},
"prettier.disableLanguages": [
  "js"
],
"eslint.autoFixOnSave": true,
"eslint.alwaysShowStatus": true,
"files.autoSave": "onFocusChange"`}
            </code>
          </pre>
          <h2>SonarQube</h2>
          <p>
            Plataforma para inspeção contínua da qualidade do código para
            realizar revisões automáticas com análise estática de código para
            detectar bugs, code smells e vulnerabilidades de segurança. Também
            oferece relatórios sobre código duplicado, padrões de codificação,
            testes unitários, cobertura de código, complexidade de código,
            comentários, bugs e vulnerabilidades de segurança.
          </p>
          <blockquote>
            Passos para a instalação:
            <a target="noreferrer" href="https://www.sonarqube.org/">
              https://www.sonarqube.org/
            </a>
          </blockquote>
          <pre className="code code-struture">
            <code>
              {`root-directory
  └── sonar-project.properties.json`}
            </code>
          </pre>
          <pre className="code code-struture code-javascript">
            <code>
              {`sonar.projectKey=Boilerplate
sonar.projectVersion=1.0
sonar.projectName=Boilerplate

# Informações de configuração
sonar.sources=.
sonar.language=js
sonar.sourceEncoding=UTF-8
sonar.javascript.file.suffixes=.js,.jsx

# Ativa o Visual Studio bootstrapper (apenas projetos .NET)
sonar.visualstudio.enable=true`}
            </code>
          </pre>
        </article>
      </StyledContainer>
    );
  }
}

export default withRouter(Analise);

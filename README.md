###### Versão 1.0
# Boilerplate

Compilado de padrões e boas práticas para ajudar o desenvolverdor Front-End em projetos React JS

> O intuito deste projeto não é definir o formato de desenvolvimento e estruturas, mas servir de apoio com uma base configurada seguindo as boas práticas e integrar toda a equipe para ajudar na evolução do projeto como um todo.

> Boilerplate é um projeto progressivo que será alimentado pelas equipes (Front-End, Back-End, Designers, Testes, etc..)

<br>

## Iniciando

### Clone o repositório e vá para pasta do projeto

> git clone https://github.com/snksergio/Boilerplate.git && cd Boilerplate

### Instalando Dependências

```bash
yarn
```

### Iniciando Serviço

```bash
yarn start
```

Executa a aplicação em modo desenvolvimento no caminho http://localhost:3000.
A página é recarregada com edições nos arquivos e os erros de lint são acusados no console.

![alt text](https://github.com/snksergio/Boilerplate/blob/master/src/assets/img/boilerplate.png)

<br>

## Estrutura do Projeto

- **./docs**: Área de documentos de auxílio do projeto
- **./design**: Arquivos de design do projeto
- **src/assets**: Arquivos estáticos (Imagens, ícones, fontes, etc...)
- **src/commons**: Utilitários, recursos, assets, globais, etc..
- **src/components**: Componentes compartilhados do projeto
- **src/routes**: Definições e Configurações de Rotas
- **src/screens**: Componentes de telas de apresentação
- **src/screens/Explorer**: Compilado de exemplos de uso e componentes

<br>

## Explore

Área independente de apoio ao Desenvolvedor duplicando a estrutura base como exemplo contendo documentações de apoio para o uso do Boilerplate e componentes que podem ser reutilizados e alterados conforme a necessidade

```
Boilerplate
├── ....
├── public
└── src
    ├── Main
    ├── Home
    └── Explore.js
        ├── assets
        ├── commons
        ├── components
        ├── routes
        └── screens
```

### Removendo
Para remover o pacote explorer basta remover a pasta `./src/screens/Explore` e também remover a importação do Explore na rota principal `.src/routes`

<br>

## Referência

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<br>

## Dependências Base

- **Styled-Components**: https://www.styled-components.com/
Lib para escrever código CSS dentro do JS
- **React Router V4**: https://reacttraining.com/react-router/
Lib para configuração e gerênciamento de rotas
- **ESlint**: 
Fiscalizador da qualidade e padrões de códigos (Airbnb)
- **SonarQube** `Opicional`: 
Plataforma dedicado à analisar continuamente seu código e mensurar a qualidade técnica do código fonte, desde o projeto até o nível do método.

### Automatizando o ESLint e Prettier no Visual Studio Code

Para facilitar o uso e agilizar o processo seguindo as padronizações definidas redomenda-se automatizar tais configurações em tempo real na edição do código utilizando o `VS Code`<br>
Basta adicionar a seguinte configuração no `settings.json` do seu VS Code:

```bash
"editor.formatOnSave": true,
"[javascript]": {
  "editor.formatOnSave": false,
},
"prettier.disableLanguages": [
  "js"
],
"eslint.autoFixOnSave": true,
"eslint.alwaysShowStatus": true,
"files.autoSave": "onFocusChange"
```
As demais configuração já estão alocadas no arquivo `.eslintrc ` do Boilerplate

### Implementando SonarQube (Opcional)
> Para instalar o SonarQube é necessário atender os seguintes pré-requisitos: Java (Oracle JRE 7 or greater or OpenJDK 7 or greater) e Database (SQL Server, MySQL, Oracle ou PostegreSQL)

**1** - Criar uma base nova para o projeto (Ex: createdb sonarqube)

**2** - Baixar o [SonarQube](https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-7.7.zip) e também o [SonarScanner](https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/)

**3** - Descompactar em qualquer diretório, nesse caso C:\sonarqube-7.7

**4** - Editar as configurações de conexão com a base de dados no arquivo `C:\sonarqube-7.7\conf\sonar.properties`
```bash
sonar.jdbc.username=postgres
sonar.jdbc.password=postgres
sonar.jdbc.url=jdbc:postgresql://localhost/sonarqube?currentSchema=my_schema
```
**5** - Setar as variáveis de ambientes no `Path`
```bash
C:\sonar-scanner-3.3.0.1492-windows\bin
C:\sonarqube-7.7\bin\windows-x86-64
```
**6** - Configurar o arquivo `sonar-project.properties` que se encontra na pasta raiz do Boilerplate

**7** - Iniciar o serviço do SonarQube pelo terminal digitando `startsonar` e após o serviço iniciado inicar o serviço do SonarScanner também pelo terminal `sonar-scanner` **(obs:** SonarScanner será o responsável pela leitura do projeto, ele irá validar o código de acordo com o projectVersion dentro do arquivo `sonar-project.properties` **)**

<br>

## Scripts

### `npm test`

Inicia o test runner interativo. <br>
Veja a seção sobre [testes em execução](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

### `npm run build`

Cria o aplicativo para produção na pasta `build`. <br>
Ele agrupa corretamente o React no modo de produção e otimiza o build para obter o melhor desempenho.

A compilação é reduzida e os nomes dos arquivos incluem os hashs. <br>
Seu aplicativo está pronto para ser implantado!

Veja a seção sobre [deployment](https://facebook.github.io/create-react-app/docs/deployment) para mais informações.

<br>

## Documentação
Guias e informações de uso e implementações que foram utilizadas para a estruturação e padronização do Boilerplate

- [Styles](https://github.com/snksergio/Boilerplate/blob/master/docs/Styles.md) - Guia responsável pela padronização de estilos do Boilerplate
- [Router](https://github.com/snksergio/Boilerplate/blob/master/docs/Router.md) - Configurações e administração das rotas e navegabilidade do Boilerplate
- [SonarQube](https://github.com/snksergio/Boilerplate/blob/master/docs/SonarQube.md) - Guia para implementação do SonarQube do Boilerplate
- [Documento Padrão](https://github.com/snksergio/Boilerplate/blob/master/docs/Exemplo.md) - Exemplo de uma estrutura padrão para a criação de uma documentação

<br>


## Configurações Inclusas

- Suporte à sintaxe React, JSX, ES6, TypeScript e Flow.
- Autoprefixo CSS, para que você não precise de -webkit ou outros prefixos
- Um Test Runner interativo rápido com suporte integrado para relatórios de cobertura.
- Um servidor de desenvolvimento ativo que avisa sobre erros comuns.
- Offline-first [service worker](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers) e [web app manifest](https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/), atendendo a todos os critérios do [Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
- Atualizações sem complicações para as ferramentas acima com uma única dependência.

<br>

## Contribua e nos ajude a ajudar a evoluir!

Seja também um contribuidor, e nos ajude a evoluir com o nosso Boilerplate. <br>
Qualquer tipo de contribuição que proponha evolução é bem vinda!

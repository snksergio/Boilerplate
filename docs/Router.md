# Routes
Lib para controle de rotas que permite configurar todo o gerenciamento das rotas. Tabalha com `History API`, mas também permite trabalhar com outros formatos se necessário.

> Para as configurações de rotas é necessário utilização do [React Router V4](https://github.com/ReactTraining/react-router)

### Definição das rotas
Estrutura de rotas do arquivo `routes/index.js` com as impostações dos componentes e suas respectivvas configurações

```js
import Home from '../screens/Home';
import Main from '../screens/Explore/screens/Main';
import NoMatch from '../screens/NoMatch';

const routes = [
  {
    key: 1,
    path: '/',
    component: Home,
    exact: true,
    name: 'Home',
  },
  {
    key: 2,
    path: '/Explorer',
    component: Main,
    name: 'Explore',
  },
  {
    key: 3,
    path: '',
    component: NoMatch,
    name: 'NoMatch',
  },
];

export default routes;
```

### Uso e importações das Rotas
Importação do Array das configurações de rotas e implementação seguindo o `react-router-dom` de acordo com o arquivo `screens\Main\index.js`

```js
import { Route, Switch } from 'react-router-dom';
import routes from '../../routes';

<Switch>
  {routes.map(route => (
    <Route
      key={route.path}
      path={route.path}
      exact={route.exact}
      component={route.component}
      {...route}
    />
  ))}
</Switch>
```

<br>

## Exemplo para uso de Subrotas com as definições de Rotas
Exemplo de configurações de rotas com subrotas ***(ChildRoutes)*** e importação de Subrotas específicas de uma Rota ***(GetRoutes)***

### Configurações de rotas
> Arquivo: `./src/routes/index.js`

```js
const routes = [
  {
    key: 1,
    path: '/',
    component: Home,
    exact: true,
    name: 'Home',
  },
  {
    key: 2,
    path: '/Exemplo',
    component: Exemplo,
    name: 'Exemplo',
    childRoutes: [
      {
        key: 1,
        path: '/Exemplo',
        component: ExemploMain,
        exact: true,
      },
      {
        key: 2,
        path: '/Exemplo/Exemplo2',
        component: Exemplo2,
        exact: true,
      },
    ],
  },
];
```

### Importador de Rota
> Arquivo: `./src/routes/get-routes.js`

```js
import routes from './index';

const getRoute = name => {
  if (name) {
    const routeslist = [...routes];
    const routeItem = routeslist.find(route => route.name === name);
    return routeItem || null;
  }
  return null;
};

export default getRoute;
```

### Especificando a roda desejada
> Container contendo exemplo de como mapear as subrotas

```js
import { withRouter, Route } from 'react-router-dom';
import getRoute from '../../routes/get-route';


const Exemplo = () => {
  const { childRoutes } = getRoute('Exemplo');
  return (
    <div>
      <h2>Ge Route exemplo</h2>
      {childRoutes.map(item => (
        <Route key={route.key} {...item} />
      ))}
    </div>
  );
};
```

<br>

## Exemplo de Rotas e Subrotas utilizando o MatchUrl
Retorna objeto contendo informações do caminho da rota correnpondente a url de forma dinâmica
> Esta opção foi utilizado na estrutura de Exeplorer do Boilerplate

### Rotas iniciais
> Arquivo: `./src/routes/index.js`

```js
import Home from '../screens/Home';
import Main from '../screens/Explore/screens/Main';

const routes = [
  {
    key: 1,
    path: '/',
    component: Home,
    exact: true,
    name: 'Home',
  },
  {
    key: 2,
    path: '/Explorer',
    component: Main,
    name: 'Explore',
  },
];

export default routes;
```

### Rodas/Subrotas
> Arquivo: `./src/screens/Explore/routes/index.js`

```js
import Home from '../screens/Home';
import Estrutura from '../screens/Estrutura';
...

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/Estrutura',
    component: Estrutura,
  },
  ....
];

export default routes;
```

### Rodas/Subrotas
> Arquivo responsável pela importação das rotas e enviar as informações do MatchURL para o Route
> Arquivo: `./src/screens/Explore/screens/Main/index.js` 

```js
import { Route } from 'react-router-dom';
import routes from '../../routes';

const MainScreen = ({ match }) => (
  <StyledContainer>
    <SidebarMenu />
    <StyledMain className="content">
      {routes.map(route => (
        <Route
          key={route.path}
          path={match.url + route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </StyledMain>
  </StyledContainer>
);

class Main extends React.Component {
  render() {
    const { match } = this.props;
    return <MainScreen match={match} />;
  }
}

export default Main;
```

<br>

## Dcoumentação
Documentação de outras formas de uso e parametros do React Router [Documentação](https://reacttraining.com/react-router/web/guides/quick-start)

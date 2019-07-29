import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../../routes';
import { StyledContainer, StyledMain } from './style';

const Main = () => (
  <StyledContainer>
    <StyledMain>
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
    </StyledMain>
  </StyledContainer>
);

export default Main;

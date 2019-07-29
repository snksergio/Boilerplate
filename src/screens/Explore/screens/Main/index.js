import React from 'react';
import { Route } from 'react-router-dom';
import routes from '../../routes';
import { StyledContainer, StyledMain } from './style';
import SidebarMenu from '../../components/Sidebar';

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
  componentDidUpdate() {
    document.querySelector('.content').scrollTop = 0;
  }

  render() {
    const { match } = this.props;
    return <MainScreen match={match} />;
  }
}

export default Main;

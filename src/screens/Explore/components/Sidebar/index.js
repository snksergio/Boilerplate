import React, { Component } from 'react';
import { Link, withRouter, Route } from 'react-router-dom';
import {
  Item,
  Container,
  Divider,
  Content,
  Header,
  Footer,
  Scroll,
} from './style';
import RocketIcon from '../../assets/img/rocket.png';

const SidebarMenu = props => {
  const { link, title, activeOnlyWhenExact } = props;
  return (
    <Route path={link} exact={activeOnlyWhenExact}>
      {({ match }) => (
        <Link to={link}>
          <Item active={match}>
            <span>{title}</span>
          </Item>
        </Link>
      )}
    </Route>
  );
};

class Sidebar extends Component {
  render() {
    const { match } = this.props;
    return (
      <Container>
        <Header>
          <img src={RocketIcon} alt="" />
        </Header>
        <Scroll>
          <Divider>Discovery</Divider>
          <Content>
            <SidebarMenu link={`${match.url}/Estrutura`} title="Estrutura" />
            <SidebarMenu
              link={`${match.url}/Analise`}
              title="Análise de código"
            />
            <SidebarMenu
              link={`${match.url}/Dependencias`}
              title="Dependências"
            />
            <SidebarMenu
              link={`${match.url}/Documentacao`}
              title="Documentacao"
            />
          </Content>
          <Divider>Biblioteca</Divider>
          <Content>
            <SidebarMenu link={`${match.url}/Modal`} title="Modal" />
            <SidebarMenu link={`${match.url}/Button`} title="Botão" />
            <SidebarMenu link={`${match.url}/Alert`} title="Alerta" />
            <SidebarMenu link={`${match.url}/Tabs`} title="Tabs" />
            <SidebarMenu
              link={`${match.url}/VirtualKeyboard`}
              title="Virtual Keyboard"
            />
            <SidebarMenu link={`${match.url}/Grid`} title="Grids" />
            <SidebarMenu link={`${match.url}/Form`} title="Formulário" />
          </Content>
        </Scroll>
        <Footer>Atualizado em 17/05/2019</Footer>
      </Container>
    );
  }
}

export default withRouter(Sidebar);

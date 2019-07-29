import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../../components/Header';
import { Tab, TabList, Tabs, TabPanel } from '../../../components/Tabs';
import { StyledContainer, StyledTabListContainer } from './style';

class TabScreen extends Component {
  render() {
    return (
      <Tabs>
        <StyledContainer>
          <Header title="Tabs" subtitle="Componente de Tabs (abas) padrão" />
          <article>
            <h2>Exemplo</h2>
            <blockquote>
              Componente com dependência externa:
              <a
                target="noreferrer"
                href="https://github.com/reactjs/react-tabs"
              >
                https://github.com/reactjs/react-tabs
              </a>
            </blockquote>
            <p>Exemplo de uso do componente:</p>
            <section>
              <StyledTabListContainer>
                <TabList>
                  <Tab>TabItem 1</Tab>
                  <Tab>TabItem 2</Tab>
                </TabList>
              </StyledTabListContainer>
              <TabPanel>
                <h3>Any content 1</h3>
                Exemplo de estrutura de um content interno
              </TabPanel>
              <TabPanel>
                <h3>Any content 2</h3>
                Exemplo de estrutura de um content interno
              </TabPanel>
              <pre className="code">
                <span>CODE</span>
                <code>
                  {`
import { Tab, TabList, Tabs, TabPanel } from '../../../components/Tabs';

class TabExample extends Component {
  render() {
    return (
      <Tabs>
        <AnyContainer>
          <TabList>
            <Tab>TabItem 1</Tab>
            <Tab>TabItem 2</Tab>
          </TabList>
        </AnyContainer>
        <AnyContainer>
          <TabPanel>
              <h3>Any content 1</h3>
              Exemplo de estrutura de um content interno
            </TabPanel>
            <TabPanel>
              <h3>Any content 2</h3>
              Exemplo de estrutura de um content interno
            </TabPanel>
        </AnyContainer>
      </Tabs>
    );
  }
}
                `}
                </code>
              </pre>
            </section>
          </article>
        </StyledContainer>
      </Tabs>
    );
  }
}

export default withRouter(TabScreen);

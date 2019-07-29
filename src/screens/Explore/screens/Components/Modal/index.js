import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../../components/Header';
import Modal from '../../../components/Modal';
import StyledContainer from './style';

class ModalScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  handleState = () => {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible,
    }));
  };

  render() {
    const { isVisible } = this.state;
    return (
      <StyledContainer>
        <Header
          title="Modal"
          subtitle="Componente de modal padrão para alertas e conteúdos"
        />
        <article>
          <h2>Exemplos</h2>
          <p>
            Exemplos de uso com
            <code>callbacks</code>
            com alguns formatos simples:
          </p>
          <section>
            <button type="button" onClick={this.handleState}>
              Abrir Modal
            </button>
            {isVisible && (
              <Modal
                btConfirm={this.handleState}
                btCancel={this.handleState}
                btClose={this.handleState}
              />
            )}
            <pre className="code">
              <span>CODE</span>
              <code>
                {`
import Modal from '../../../components/Modal';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  handleState = () => {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible,
    }));
  };
  
  render() {
    const { isVisible } = this.state;
    return (
      <>
        <Modal 
          btConfirm={this.handleState}
          btCancel={this.handleState}
          btClose={this.handleState}
        />
      </>
    );
  }
}
                `}
              </code>
            </pre>
          </section>
          <h2>Props</h2>
          <table>
            <thead>
              <tr>
                <th>Attributes</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>title</td>
                <td>
                  <code>string</code>
                </td>
                <td>-</td>
                <td>Título do Header</td>
              </tr>
              <tr>
                <td>subtitle</td>
                <td>
                  <code>string</code>
                </td>
                <td>-</td>
                <td>Subtitulo do Header</td>
              </tr>
              <tr>
                <td>children</td>
                <td>
                  <code>function</code>
                </td>
                <td>
                  <code>false</code>
                </td>
                <td>Corpo (Conteúdo) desejado para complementar o Modal</td>
              </tr>
              <tr>
                <td>Footer</td>
                <td>
                  <code>function</code>
                </td>
                <td>
                  <code>false</code>
                </td>
                <td>Container reservado para o Footer do Modal</td>
              </tr>
              <tr>
                <td>btConfirm</td>
                <td>
                  <code>function</code>
                </td>
                <td>
                  <code>false</code>
                </td>
                <td>Callback para o botão padrão de Confirmar</td>
              </tr>
              <tr>
                <td>btCancel</td>
                <td>
                  <code>function</code>
                </td>
                <td>
                  <code>false</code>
                </td>
                <td>Callback para o botão padrão de Cancelar</td>
              </tr>
              <tr>
                <td>btClose</td>
                <td>
                  <code>function</code>
                </td>
                <td>
                  <code>false</code>
                </td>
                <td>Callback para o botão de Fechar o Modal</td>
              </tr>
            </tbody>
          </table>
        </article>
      </StyledContainer>
    );
  }
}

export default withRouter(ModalScreen);

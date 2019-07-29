import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import Icon from '../../../assets/img/button-icon.png';
import StyledContainer from './style';

class ButtonScreen extends Component {
  render() {
    return (
      <StyledContainer>
        <Header
          title="Botão"
          subtitle="Componente simples de botão com suas variáveis"
        />
        <article>
          <h2>Exemplos</h2>
          <p>Exemplos de uso com algumas pequenas variações</p>
          <section>
            <Button>Primary</Button>
            <pre className="code">
              <span>CODE</span>
              <code>{`<Button onClick={props}>Primary</Button>`}</code>
            </pre>
            <Button secondary>Secondary</Button>
            <pre className="code">
              <span>CODE</span>
              <code>{`<Button onClick={props} secondary>Secondary</Button>`}</code>
            </pre>
            <Button icon={Icon}>Icon Button</Button>
            <pre className="code">
              <span>CODE</span>
              <code>{`<Button onClick={props} icon={src}>Icon Button</Button>`}</code>
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
                <td>onClick</td>
                <td>
                  <code>function</code>
                </td>
                <td>-</td>
                <td>Callback d uma função onClick</td>
              </tr>
              <tr>
                <td>secondary</td>
                <td>
                  <code>boolean</code>
                </td>
                <td>false</td>
                <td>Altera o estilo do botão</td>
              </tr>
              <tr>
                <td>icon</td>
                <td>
                  <code>string</code>
                </td>
                <td>-</td>
                <td>Informar a url da imagem para o ícone</td>
              </tr>
            </tbody>
          </table>
        </article>
      </StyledContainer>
    );
  }
}

export default withRouter(ButtonScreen);

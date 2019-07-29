import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../../components/Header';
import Alert from '../../../components/Alert';
import StyledContainer from './style';

class AlertScreen extends Component {
  render() {
    return (
      <StyledContainer>
        <Header
          title="Alerta"
          subtitle="Componente de alertas com mensagens e estilos pré-definidas"
        />
        <article>
          <h2>Exemplos</h2>
          <p>
            Exemplos de uso com
            <code>callbacks</code>
            com alguns formatos simples:
          </p>
          <section>
            <Alert tipo="sucesso">Mensagem padrão!</Alert>
            <pre className="code">
              <span>CODE</span>
              <code>{` <Alert tipo="sucesso" onClick={props}>Mensagem padrão!</Alert>`}</code>
            </pre>
            <Alert tipo="error">Mensagem padrão de erro!</Alert>
            <Alert tipo="success">Mensagem padrão de sucesso!</Alert>
            <Alert tipo="alert">Mensagem padrão de alerta!</Alert>
            <pre className="code">
              <span>CODE</span>
              <code>
                {`<Alert tipo="error">Mensagem padrão de erro!</Alert>
<Alert tipo="success">Mensagem padrão de sucesso!</Alert>
<Alert tipo="alert">Mensagem padrão de alerta!</Alert>`}
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
                <td>tipo</td>
                <td>
                  <code>string</code>
                </td>
                <td>-</td>
                <td>
                  Tipos de estilos de alertas,
                  <code>error</code>
                  <code>success</code>
                  <code>alert</code>
                  <code>defult</code>
                </td>
              </tr>
              <tr>
                <td>onClick</td>
                <td>
                  <code>function</code>
                </td>
                <td>-</td>
                <td>Callback para botão fechar</td>
              </tr>
              <tr>
                <td>fixed</td>
                <td>
                  <code>boolean</code>
                </td>
                <td>
                  <code>false</code>
                </td>
                <td>
                  Posição do alerta fica com a posição fixed no canto superior
                </td>
              </tr>
            </tbody>
          </table>
        </article>
      </StyledContainer>
    );
  }
}

export default withRouter(AlertScreen);

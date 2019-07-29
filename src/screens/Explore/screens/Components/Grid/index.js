import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../../components/Header';
import { Row, Col } from '../../../components/Grid';
import StyledContainer from './style';

class GridScreen extends Component {
  render() {
    return (
      <StyledContainer>
        <Header
          title="Grid"
          subtitle="Componente de sistema de grid simples com colunas e rows"
        />
        <article>
          <h2>Exemplos</h2>
          <p>
            Exemplo de utilização das colunas, linhas e suas respectivas
            propriedades
          </p>
          <section>
            <Row>
              <Col size={8}>8 column</Col>
              <Col size={4}>4 column</Col>
            </Row>
            <Row>
              <Col size={6}>5 column</Col>
              <Col size={6}>5 column</Col>
            </Row>
            <Row center>
              <Col size={4}>4 column - center</Col>
              <Col size={4}>4 column - center</Col>
            </Row>
            <Row right>
              <Col size={4}>4 column - right</Col>
              <Col size={4}>4 column - right</Col>
            </Row>
            <Row>
              <Col size={4}>4 column</Col>
              <Col offset={4} size={4}>
                4 column - offset
              </Col>
            </Row>
            <pre className="code">
              <span>CODE</span>
              <code>
                {`
import { Row, Col } from '../../../components/Grid';
class Example extends Component {
  render() {
    return (
      <>
        <Row>
          <Col size={8}>8 column</Col>
          <Col size={4}>4 column</Col>
        </Row>
        <Row>
          <Col size={6}>5 column</Col>
          <Col size={6}>5 column</Col>
        </Row>
        <Row center>
          <Col size={4}>4 column</Col>
          <Col size={4}>4 column</Col>
        </Row>
        <Row right>
          <Col size={4}>4 column</Col>
          <Col size={4}>4 column</Col>
        </Row>
        <Row>
          <Col size={4}>4 column</Col>
          <Col offset={4} size={4}>
            4 column
          </Col>
        </Row>
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
                <th>Rows</th>
              </tr>
              <tr>
                <td>column</td>
                <td>
                  <code>boolean</code>
                </td>
                <td>false</td>
                <td>Alterar linha para columnas</td>
              </tr>
              <tr>
                <td>center, right ou left</td>
                <td>
                  <code>boolean</code>
                </td>
                <td>-</td>
                <td>Alinhamento horizontal</td>
              </tr>
              <tr>
                <th>Columns</th>
              </tr>
              <tr>
                <td>size</td>
                <td>
                  <code>number</code>
                </td>
                <td>1</td>
                <td>
                  Tamanhos das columnas <code>1/12</code>
                </td>
              </tr>
              <tr>
                <td>offset</td>
                <td>
                  <code>number</code>
                </td>
                <td>-</td>
                <td>Margin lateral da coluna</td>
              </tr>
            </tbody>
          </table>
        </article>
      </StyledContainer>
    );
  }
}

export default withRouter(GridScreen);

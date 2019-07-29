import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../../components/Header';
import {
  FormInput,
  FormSelect,
  FormTextArea,
  FormCheckbox,
  FormRadiobox,
} from '../../../components/Form';
import StyledContainer from './style';

class FormScreen extends Component {
  render() {
    return (
      <StyledContainer>
        <Header
          title="Formulário"
          subtitle="Compilado de componentes de formulário"
        />
        <article>
          <h2>Exemplos</h2>
          <p>Exemplo de utilização de inputs e selects</p>
          <section>
            <FormInput type="text" label="Input text" />
            <FormInput
              type="password"
              label="Input Password"
              text="Exemplo de texto explicativo"
            />
            <FormSelect
              label="Select box"
              options="one, two, three, option four, five"
            />
            <FormTextArea label="Textarea" />
            <FormCheckbox label="Checkbox" />
            <FormCheckbox disabled label="Checkbox disabled" />
            <FormRadiobox label="Radiobox" />
            <pre className="code">
              <span>CODE</span>
              <code>
                {`
import {
  FormInput,
  FormSelect,
  FormTextArea,
  FormCheckbox,
  FormRadiobox,
} from '../../../components/Form';

class Example extends Component {
  render() {
    return (
      <>
        <FormInput type="text" label="Input text" />
        <FormInput
          type="password"
          label="Input Password"
          text="Exemplo de texto explicativo"
        />
        <FormSelect
          label="Select box"
          options="one, two, three, option four, five"
        />
        <FormTextArea label="Textarea" />
        <FormCheckbox label="Checkbox" />
        <FormCheckbox disabled label="Checkbox disabled" />
        <FormRadiobox label="Radiobox" />
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
                <td>props</td>
                <td>
                  <code>-</code>
                </td>
                <td>-</td>
                <td>Todos os campos aceitam atribuições extras</td>
              </tr>
              <tr>
                <td>label</td>
                <td>
                  <code>string</code>
                </td>
                <td>-</td>
                <td>Label do campo</td>
              </tr>
              <tr>
                <td>text</td>
                <td>
                  <code>string</code>
                </td>
                <td>-</td>
                <td>Texto de observação do campo</td>
              </tr>
              <tr>
                <td>value</td>
                <td>
                  <code>string</code>
                </td>
                <td>-</td>
                <td>Valor do campo</td>
              </tr>
              <tr>
                <td>id</td>
                <td>
                  <code>string</code>
                </td>
                <td>-</td>
                <td>Atribui um id ao campo e ao for do label</td>
              </tr>
              <tr>
                <td>name</td>
                <td>
                  <code>string</code>
                </td>
                <td>-</td>
                <td>Atribui nome ao campo</td>
              </tr>
              <tr>
                <td>required</td>
                <td>
                  <code>boolean</code>
                </td>
                <td>false</td>
                <td>Campo se torna obrigatório</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>
                  <code>boolean</code>
                </td>
                <td>false</td>
                <td>Desabilita a edição do campo</td>
              </tr>
              <tr>
                <th>FormInput</th>
              </tr>
              <tr>
                <td>type</td>
                <td>
                  <code>string</code>
                </td>
                <td>text</td>
                <td>
                  Tipos do campo padrão html: <code>text</code>,
                  <code>password</code>, <code>number</code>, <code>email</code>
                  ...
                </td>
              </tr>
              <tr>
                <td>placeholder</td>
                <td>
                  <code>string</code>
                </td>
                <td>-</td>
                <td>Texto do placeholder do campo</td>
              </tr>
              <tr>
                <td>max, min</td>
                <td>
                  <code>number</code>
                </td>
                <td>-</td>
                <td>Valor máximo ou mínimo de caracteres</td>
              </tr>
              <tr>
                <td>autoFocus</td>
                <td>
                  <code>boolean</code>
                </td>
                <td>false</td>
                <td>Foco automático no campo</td>
              </tr>
              <tr>
                <td>ref</td>
                <td>
                  <code>function</code>
                </td>
                <td>-</td>
                <td>Referência do campo</td>
              </tr>
              <tr>
                <th>FormSelect</th>
              </tr>
              <tr>
                <td>options</td>
                <td>
                  <code>string</code>
                </td>
                <td>-</td>
                <td>
                  Valores das opções a ser selecionados
                  <code>{`<FormSelect options="valor1, valor2, ..." />`}</code>
                </td>
              </tr>
              <tr>
                <th>FormTextArea</th>
              </tr>
              <tr>
                <td>rows, cols</td>
                <td>
                  <code>number</code>
                </td>
                <td>-</td>
                <td>Quantidade de linhas ou colunas</td>
              </tr>
            </tbody>
          </table>
        </article>
      </StyledContainer>
    );
  }
}

export default withRouter(FormScreen);

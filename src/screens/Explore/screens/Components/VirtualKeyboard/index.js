import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../../components/Header';
import VirtualKeyboard from '../../../components/VirtualKeyboard';
import StyledContainer from './style';

class VirtualKeyboardScreen extends Component {
  constructor(props) {
    super(props);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  state = {
    layoutName: 'default',
    inputName: 'input1',
    input: {},
  };

  componentDidMount() {
    document.addEventListener('keydown', this.onChangeInput, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onChangeInput, false);
  }

  onChangeAll = inputObj => {
    this.setState({
      input: inputObj,
    });
  };

  onKeyPress = button => {
    if (button === '{shift}' || button === '{lock}') this.handleShift();
  };

  handleShift = () => {
    const { layoutName } = this.state;
    this.setState({
      layoutName: layoutName === 'default' ? 'shift' : 'default',
    });
  };

  onChangeInput = event => {
    const inputVal = event.target.value;
    const { input, inputName } = this.state;
    const updatedInputObj = {
      ...input,
      [inputName]: inputVal,
    };

    this.setState({
      input: updatedInputObj,
    });

    if (!event.keyCode === event.keyCode) {
      this.setState(() => {
        this.keyboardRef.keyboard.setInput(inputVal);
      });
    }
  };

  setActiveInput = inputName => {
    this.setState({
      inputName,
    });
  };

  render() {
    const { input, inputName, layoutName } = this.state;
    return (
      <StyledContainer>
        <Header
          title="Virtual Keyboard"
          subtitle="Componente de Teclado Virtual Touchscreen estilizadado"
        />
        <article>
          <h2>Exemplo</h2>
          <blockquote>
            Componente com dependência externa:
            <a
              target="noopener"
              href="https://github.com/hodgef/simple-keyboard"
            >
              https://github.com/hodgef/simple-keyboard
            </a>
          </blockquote>
          <section>
            <input
              onFocus={() => this.setActiveInput('input1')}
              value={input.input1 || ''}
              placeholder="Input 1"
              onChange={e => this.onChangeInput(e)}
            />
            <input
              onFocus={() => this.setActiveInput('input2')}
              value={input.input2 || ''}
              placeholder="Input 2"
              onChange={e => this.onChangeInput(e)}
            />
            <VirtualKeyboard
              ref={r => {
                this.keyboardRef = r;
              }}
              inputName={inputName}
              layoutName={layoutName}
              onChangeAll={inputObj => this.onChangeAll(inputObj)}
              onKeyPress={button => this.onKeyPress(button)}
            />
            <pre className="code">
              <span>CODE</span>
              <code>
                {`
class VirtualKeyboardScreen extends Component {
  constructor(props) {
    super(props);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  state = {
    layoutName: 'default',
    inputName: 'input1',
    input: {},
  };

  componentDidMount() {
    document.addEventListener('keydown', this.onChangeInput, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onChangeInput, false);
  }

  onChangeAll = inputObj => {
    this.setState({
      input: inputObj,
    });
  };

  onKeyPress = button => {
    if (button === '{shift}' || button === '{lock}') this.handleShift();
  };

  handleShift = () => {
    const layoutName = this.state.layoutName;
    this.setState({
      layoutName: layoutName === 'default' ? 'shift' : 'default',
    });
  };

  onChangeInput = event => {
    const inputVal = event.target.value;
    const updatedInputObj = {
      ...this.state.input,
      [this.state.inputName]: inputVal,
    };

    this.setState({
      input: updatedInputObj,
    });

    if (!event.keyCode === event.keyCode) {
      this.setState(() => {
        this.keyboardRef.keyboard.setInput(inputVal);
      });
    }
  };

  setActiveInput = inputName => {
    this.setState({
      inputName: inputName,
    });
  };

  render() {
    const { input, inputName, layoutName } = this.state;
    return (
        <section>
          <input
            onFocus={() => this.setActiveInput('input1')}
            value={input.input1 || ''}
            placeholder="Input 1"
            onChange={e => this.onChangeInput(e)}
          />
          <input
            onFocus={() => this.setActiveInput('input2')}
            value={input.input2 || ''}
            placeholder="Input 2"
            onChange={e => this.onChangeInput(e)}
          />
          <VirtualKeyboard
            ref={r => (this.keyboardRef = r)}
            inputName={inputName}
            layoutName={layoutName}
            onChangeAll={inputObj => this.onChangeAll(inputObj)}
            onKeyPress={button => this.onKeyPress(button)}
          />
        </section>
    );
  }
}

export default VirtualKeyboardScreen;
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
                <td>layout</td>
                <td>
                  <code>array</code>
                </td>
                <td>-</td>
                <td>
                  <code>
                    {`layout={{ 'default': [' 1 2 3 4 5 6 7 8 9 0 - = {bksp}', '{tab} q w e r t y u i o p [ ] \\', '{lock} a s d f g h j k l ; ' {enter}', '{shift} z x c v b n m , . / {shift}', '.com @ {space}'],`}
                    {`'shift': ['~ ! @ # $ % ^ & * ( ) _ + {bksp}', '{tab} Q W E R T Y U I O P { } |', '{lock} A S D F G H J K L : " {enter}', '{shift} Z X C V B N M < > ? {shift}', '.com @ {space}']}}`}
                  </code>
                </td>
              </tr>
              <tr>
                <td>layoutName</td>
                <td>
                  <code>string</code>
                </td>
                <td>-</td>
                <td>
                  Specifies which layout should be used.
                  <code>{`layoutName={'default'}`}</code>
                </td>
              </tr>
              <tr>
                <td>display</td>
                <td>
                  <code>array</code>
                </td>
                <td>-</td>
                <td>
                  Replaces variable buttons with a human-friendly name (e.g.:
                  “delete”).
                  <code>{`display={{'{bksp}': 'delete', '{enter}': '< enter', '{shift}': 'shift', ...}} `}</code>
                </td>
              </tr>
            </tbody>
          </table>
        </article>
      </StyledContainer>
    );
  }
}

export default withRouter(VirtualKeyboardScreen);

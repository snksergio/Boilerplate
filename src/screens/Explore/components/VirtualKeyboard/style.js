import styled from 'styled-components';

const KeyboardContainer = styled.div`
  .Keytheme {
    background: #d4d7dd;
    border-radius: 10px;
    padding: 30px 15px;
  }
  .hg-button {
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    background: #fff;
    width: 55x;
    height: 62px;
    line-height: 62px;
    border-radius: 12px;
    text-align: center;
    font-weight: 500;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
    color: #434343;
    transition: all ease 0.15s;
  }
  .hg-button:hover {
    transform: translateY(-3px);
  }
  .hg-row div.hg-button:not(:last-child) {
    margin-right: 10px;
  }
  div.hg-row:not(:last-child) {
    margin-bottom: 10px;
  }
  .hg-button.hg-button-bksp,
  .hg-button.hg-button-tab,
  .hg-button.hg-button-lock,
  .hg-button.hg-button-enter,
  .hg-button.hg-button-shift,
  .hg-button.hg-button-shift,
  .hg-button.hg-button-space {
    max-width: none;
    background: #aab0ba;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  }
  .hg-button.hg-button-bksp,
  .hg-button.hg-button-tab,
  .hg-button.hg-button-lock,
  .hg-button.hg-button-enter,
  .hg-button.hg-button-shift,
  .hg-button.hg-button-shift {
    max-width: 200px;
  }
  .hg-button.hg-button-space {
    flex: 12;
  }
  .hg-button.hg-button-enter {
    color: #FFF;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.palette.background.lineardark},
      ${({ theme }) => theme.palette.background.linearlight}
    );
  }
  .dark.Keytheme {
    background: #272b2c;
    .hg-button {
      background: #2f3336;
      box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.7);
      color: #71D4FE;
      text-shadow: 0px 0px 40px #71d4fe, 0px 0px 80px #71d4fe;
    }
  }
`;

export { KeyboardContainer };

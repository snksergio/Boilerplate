import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  
  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.main};
    user-select: none;  
    font-size: 1.4rem;
  };

  a {
    text-decoration: none;
  };

  body,
  html {
    overflow-x: hidden;
  };

  ::-webkit-scrollbar {
      -webkit-appearance: none;
  }
  ::-webkit-scrollbar:vertical {
      width: 12px;
  }
  ::-webkit-scrollbar:horizontal {
      height: 12px;
  }
  ::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, .5);
      border-radius: 10px;
      border: 2px solid #ffffff;
  }
  ::-webkit-scrollbar-track {
      border-radius: 10px;  
      background-color: #ffffff; 
  }

  article {
    max-width: 1000px;
    align-self: flex-start;
    width: 100%;
  }

  article section {
    width: 100%;
    border: solid 1px ${({ theme }) => theme.palette.border.main};
    border-radius: 10px;
    box-sizing: border-box;
    padding: 20px;
    overflow-x: hidden;
  }

  h2 {
    font-size: 2.4rem;
    line-height: 2.4rem;
    font-weight: 700;
    margin: 0;
    margin-top: 50px;
    margin-bottom: 20px;
    position: relative;
  }

  h2:before {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0px;
    width: 40px;
    height: 3px;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.palette.background.lineardark},
      ${({ theme }) => theme.palette.background.linearlight}
    );
  }

  h3 {
    font-size: 1.8rem;
    line-height: 2rem;
    font-weight: 700;
    margin: 0;
    margin-top: 30px;
    margin-bottom: 20px;
    position: relative;
  }
  

  article > h2:first-child {
    margin-top: 0;
  }

  article p {
    font-size: 1.5rem;
    text-rendering: optimizeLegibility;
    font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;
    line-height: 2.2rem;
    color: #24292e;
    font-weight: 400;
  }

  article p code,
  table code {
    background-color: rgba(27,31,35,.05);
    border-radius: 3px;
    color: inherit;
    font-family: SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;
    font-size: 85%;
    margin: 0;
    padding: 3.2px 6.4px;
  }

  article section pre.code {
    margin-top: 40px;
    margin-bottom: 40px;
    margin-left: -21px;
    margin-right: -21px;
    width: auto;
    border-radius: 0;
  }
  article section pre.code:last-child {
    margin-bottom: -20px;
    border-bottom: none;
  }

  pre {
    background: #333;
    white-space: pre;
    word-wrap: break-word;
    overflow: auto;
    width: 100%;
  }

  pre + pre.code {
    margin-top: 15px;
  }

  pre.code {
      margin: 0px;
      border-radius: 4px;
      border: 1px solid #292929;
      position: relative;
      box-sizing: border-box; 
      user-select: text;
  }

  pre.code span {
      font-family: sans-serif;
      font-weight: bold;
      font-size: 0.9rem;
      color: #ddd;
      position: absolute;
      left: 1px;
      top: 15px;
      text-align: center;
      width: 60px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      pointer-events: none;
  }

  pre.code code {
      font-family: "Inconsolata","Monaco","Consolas","Andale Mono","Bitstream Vera Sans Mono","Courier New",Courier,monospace;
      display: block;
      margin: 0 0 0 60px;
      padding: 15px 16px 14px;
      border-left: 1px solid #555;
      overflow-x: auto;
      font-size: 13px;
      line-height: 19px;
      color: #ddd;
      overflow: auto;
  }

  pre::after {
      content: "double click to selection";
      padding: 0;
      width: auto;
      height: auto;
      position: absolute;
      right: 18px;
      top: 14px;
      font-size: 12px;
      color: #ddd;
      line-height: 20px;
      overflow: hidden;
      -webkit-backface-visibility: hidden;
      transition: all 0.3s ease;
  }

  pre:hover::after {
      opacity: 0;
      visibility: visible;
  }

  pre.code-struture code {
    font-size: 11px;
  }

  pre.code-css code {
      color: #91a7ff;
  }

  pre.code-html code {
      color: #aed581;
  }

  pre.code-javascript code {
      color: #ffa726;
  }

  pre.code-jquery code {
      color: #4dd0e1;
  }

  blockquote {
    border-left: .25em solid #dfe2e5;
    color: #6a737d;
    padding: 2rem 1.5rem;
    margin-left: 0;
    margin-right: 0;
    background-color: #f6f8fa;
  }

  blockquote a {
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.palette.background.lineardark},
      ${({ theme }) => theme.palette.background.linearlight}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    font-weight: 500;
    position: relative;
    margin-left: 5px;
    &:before {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(
        to right,
        ${({ theme }) => theme.palette.background.lineardark},
        ${({ theme }) => theme.palette.background.linearlight}
      );
      width: 0px;
      transition: all ease 0.2s;
    }
    &:hover:before {
      width: 100%;
    }
  }

  table {
    width: 100%;
    margin-top: 40px;
    font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;
    border-collapse: collapse;
    border-spacing: 0;
  }

  table th {
    border: 1px solid #dfe2e5;
    padding: 6px 13px;
    text-align: left;
    font-weight: 500;
  }

  table td {
    border: 1px solid #dfe2e5;
    padding: 6px 13px;
  }

  input {
    border: solid 1px ${({ theme }) => theme.palette.border.main};
    border-radius: 8px;
    height: 50px;
    margin-right: 15px;
    margin-bottom: 15px;
    padding:0 20px;
    font-size: 15px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }

`;

export default globalStyle;

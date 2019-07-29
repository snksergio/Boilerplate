import styled from 'styled-components';

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 25px;
  & small {
    margin-top: 10px;
    color: ${({ theme }) => theme.palette.secondary.light};
    display: block;
  }
`;

const InputStyled = styled.input`
  width: 100%;
  outline: none;
  box-sizing: border-box;
  border: solid 1px #e8ecf4;
  border-radius: 8px;
  height: 50px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-top: 0px;
  padding: 0 15px;
  font-size: 15px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  transition: all ease 0.15s;
  background: #fff;
  &:focus {
    border-color: ${({ theme }) => theme.palette.primary.main};
    box-shadow: 0 10px 15px -10px rgba(89, 54, 114, 0.3);
    color: ${({ theme }) => theme.palette.primary.main};
  }
  &::placeholder {
    color: ${({ theme }) => theme.palette.secondary.light};
    font-size: 15px;
    font-weight: 500;
  }
`;

const SelectStyled = styled.select`
  width: 100%;
  outline: none;
  box-sizing: border-box;
  border: solid 1px #e8ecf4;
  border-radius: 8px;
  height: 50px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-top: 0px;
  padding: 0 10px;
  font-size: 15px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  transition: all ease 0.15s;
  background: #fff;
  &:focus {
    border-color: ${({ theme }) => theme.palette.primary.main};
    box-shadow: 0 10px 15px -10px rgba(89, 54, 114, 0.3);
    color: ${({ theme }) => theme.palette.primary.main};
  }
  &::placeholder {
    color: ${({ theme }) => theme.palette.secondary.light};
    font-size: 15px;
    font-weight: 500;
  }
`;

const TextAreaStyled = styled.textarea`
  width: 100%;
  outline: none;
  box-sizing: border-box;
  border: solid 1px #e8ecf4;
  border-radius: 8px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-top: 0px;
  padding: 15px 15px;
  font-size: 15px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  transition: all ease 0.15s;
  background: #fff;
  resize: none;
  &:focus {
    border-color: ${({ theme }) => theme.palette.primary.main};
    box-shadow: 0 10px 15px -10px rgba(89, 54, 114, 0.3);
    color: ${({ theme }) => theme.palette.primary.main};
  }
  &::placeholder {
    color: ${({ theme }) => theme.palette.secondary.light};
    font-size: 15px;
    font-weight: 500;
  }
`;

const CheckboxStyled = styled.div`
  display: flex;
  & label {
    display: flex;
    cursor: pointer;
    align-items: center;
    padding: 5px 0;
  }
  & p {
    font-weight: 500;
    font-size: 14px;
    text-transform: capitalize;
    margin: 0;
    padding: 0;
  }
  & input {
    width: 1px;
    height: 1px;
    visibility: hidden;
    text-indent: -999px;
    position: absolute;
    left: 0;
    top: 0;
  }
  & span {
    width: 15px;
    height: 15px;
    border-radius: 3px;
    border: solid 1px ${({ theme }) => theme.palette.border.main};
    display: block;
    transition: all ease 0.2s;
    margin-right: 8px;
  }
  & input:checked + span {
    background: ${({ theme }) => theme.palette.primary.main};
    border-color: ${({ theme }) => theme.palette.primary.main};
    box-shadow: 0 1px 8px 0px rgba(89, 54, 114, 0.5),
      inset 0px 0px 0px 2px rgba(255, 255, 255, 1);
  }
  & input:disabled ~ p {
    color: ${({ theme }) => theme.palette.secondary.light};
  }
`;

const RadioboxStyled = styled.div`
  display: flex;
  & label {
    display: flex;
    cursor: pointer;
    align-items: center;
    padding: 5px 0;
  }
  & p {
    font-weight: 500;
    font-size: 14px;
    text-transform: capitalize;
    margin: 0;
    padding: 0;
  }
  & input {
    width: 1px;
    height: 1px;
    visibility: hidden;
    text-indent: -999px;
    position: absolute;
    left: 0;
    top: 0;
  }
  & span {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: solid 1px ${({ theme }) => theme.palette.border.main};
    display: block;
    transition: all ease 0.2s;
    margin-right: 8px;
    position: relative;
  }
  & input:checked + span {
    background: ${({ theme }) => theme.palette.primary.main};
    border-color: ${({ theme }) => theme.palette.primary.main};
    box-shadow: 0 1px 8px 0px rgba(89, 54, 114, 0.5),
      inset 0px 0px 0px 2px rgba(255, 255, 255, 1);
  }
  & input:disabled ~ p {
    color: ${({ theme }) => theme.palette.secondary.light};
  }
`;

const Label = styled.label`
  color: ${({ theme }) => theme.palette.primary.dark};
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
  font-size: 13px;
`;
export {
  Label,
  InputContainer,
  InputStyled,
  SelectStyled,
  TextAreaStyled,
  CheckboxStyled,
  RadioboxStyled,
};

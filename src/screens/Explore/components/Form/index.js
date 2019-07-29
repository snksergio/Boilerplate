import React from 'react';
import PropTypes from 'prop-types';
import {
  Label,
  InputContainer,
  InputStyled,
  SelectStyled,
  TextAreaStyled,
  CheckboxStyled,
  RadioboxStyled,
} from './style';

const FormInput = props => {
  const {
    label,
    type,
    text,
    placeholder,
    defaultValue,
    id,
    max,
    min,
    name,
    required,
    ref,
    autoFocus,
    disabled,
  } = props;

  return (
    <InputContainer>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputStyled
        autoFocus={autoFocus}
        type={type || 'text'}
        placeholder={placeholder}
        defaultValue={defaultValue}
        id={id}
        max={max}
        min={min}
        name={name}
        required={required}
        ref={ref}
        disabled={disabled}
        {...props}
      />
      {text && <small>{text}</small>}
    </InputContainer>
  );
};

FormInput.defaultProps = {
  label: null,
  text: null,
  autoFocus: false,
  type: 'text',
  placeholder: null,
  defaultValue: '',
  id: null,
  max: null,
  min: null,
  name: null,
  required: false,
  ref: null,
  disabled: false,
};

FormInput.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
  autoFocus: PropTypes.bool,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  id: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  required: PropTypes.bool,
  ref: PropTypes.any,
  disabled: PropTypes.bool,
};

const FormSelect = props => {
  const {
    label,
    text,
    id,
    name,
    required,
    options,
    disabled,
    defaultValue,
  } = props;
  const selectOptions = options.split(', ');
  const selectOptionsList = selectOptions.map((selectOption, index) => {
    return (
      <option key={selectOption} value={index}>
        {selectOption}
      </option>
    );
  });

  return (
    <InputContainer>
      {label && <Label htmlFor={id}>{label}</Label>}
      <SelectStyled
        defaultValue={defaultValue}
        id={id}
        name={name}
        required={required}
        disabled={disabled}
        {...props}
      >
        <option value="" disabled>
          Selecione uma opção
        </option>
        {selectOptionsList}
      </SelectStyled>
      {text && <small>{text}</small>}
    </InputContainer>
  );
};

FormSelect.defaultProps = {
  label: null,
  text: null,
  defaultValue: '',
  options: null,
  id: null,
  name: null,
  required: false,
  disabled: false,
};

FormSelect.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
  defaultValue: PropTypes.string,
  options: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

const FormTextArea = props => {
  const { label, text, id, name, required, rows, cols } = props;

  return (
    <InputContainer>
      {label && <Label htmlFor={id}>{label}</Label>}
      <TextAreaStyled
        cols={cols}
        id={id}
        name={name}
        required={required}
        rows={rows}
        {...props}
      ></TextAreaStyled>
      {text && <small>{text}</small>}
    </InputContainer>
  );
};

FormTextArea.defaultProps = {
  label: null,
  text: null,
  id: null,
  name: null,
  rows: null,
  cols: null,
  required: false,
  disabled: false,
};

FormTextArea.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

const FormCheckbox = props => {
  const { label, id, name, required, disabled } = props;

  return (
    <CheckboxStyled>
      <label htmlFor={id} label={label}>
        <input
          id={id}
          name={name}
          required={required}
          disabled={disabled}
          type="checkbox"
          {...props}
        />
        <span />
        <p>{label}</p>
      </label>
    </CheckboxStyled>
  );
};

FormCheckbox.defaultProps = {
  label: null,
  id: null,
  name: null,
  required: false,
  disabled: false,
};

FormCheckbox.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

const FormRadiobox = props => {
  const { label, id, name, required, disabled } = props;

  return (
    <RadioboxStyled>
      <label htmlFor={id} label={label}>
        <input
          id={id}
          name={name}
          required={required}
          disabled={disabled}
          type="checkbox"
          {...props}
        />
        <span />
        <p>{label}</p>
      </label>
    </RadioboxStyled>
  );
};

FormRadiobox.defaultProps = {
  label: null,
  id: null,
  name: null,
  required: false,
  disabled: false,
};

FormRadiobox.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

export { FormInput, FormSelect, FormTextArea, FormCheckbox, FormRadiobox };

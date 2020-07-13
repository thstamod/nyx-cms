import React, { useRef } from 'react';
import useValidator from '../../../hooks/useValidator';

const Input = ({
  id,
  labelFor,
  labelText,
  type,
  validationRules,
  onFocusHandler,
  onClickHandler,
  onChangeHandler,
  placeholder,
  disabled,
  value,
}) => {
  const ref = useRef(() => value || null);
  const [valid, errors] = useValidator(ref.current, validationRules);
  console.log(valid, errors);

  const change = (e) => {
    onChangeHandler(e);
  };

  return (
    <>
      <label htmlFor={labelFor}>{labelText}</label>
      <input
        ref={ref}
        id={id}
        type={type}
        disabled={disabled}
        onFocus={onFocusHandler}
        onChange={(e) => change(e)}
        onClick={onClickHandler}
        placeholder={placeholder}
      />
      {errors && errors.map((er) => <span>{er}</span>)}
    </>
  );
};

export default Input;

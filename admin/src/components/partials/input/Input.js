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
  ...props
}) => {
  const ref = useRef(() => value || null);
  const [valid, errors] = useValidator(ref, validationRules);
  console.log(valid, errors);

  const change = (e) => {
    onChangeHandler(e);
  };

  const focus = () => {
    ref.current.touched = true;
    if (typeof onFocusHandler === 'function') {
      onFocusHandler();
    }
  };

  return (
    <>
      <label htmlFor={labelFor}>{labelText}</label>
      <input
        ref={ref}
        id={id}
        type={type}
        disabled={disabled}
        onFocus={focus}
        onChange={(e) => change(e)}
        onClick={onClickHandler}
        placeholder={placeholder}
        {...props}
      />
      {errors && errors.map((er) => <span>{er}</span>)}
    </>
  );
};

export default Input;

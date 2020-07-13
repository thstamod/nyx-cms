/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import builtInValidators from '../utils/validator/builtInValidators';

export default (input, settings) => {
  console.log('settings', settings);
  console.log('input', input);
  const [isValid, setValid] = useState(false);
  const [errors, setErrors] = useState(null);
  const [touched, setTouched] = useState(false);
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line no-debugger
    // debugger;
    if (!touched) {
      return;
    }
    if (!settings.validationOnChange) {
      return;
    }
    if (settings.email && !builtInValidators.email(input.value)) {
      setValid(false);

      setErrors([errors && [...errors], 'not valid email']);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input.value]);

  return [isValid, errors];
};

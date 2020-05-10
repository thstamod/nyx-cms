/* eslint-disable react/destructuring-assignment */
import React from 'react';

// eslint-disable-next-line arrow-body-style
const TextAreaDataType = (props) => {
  return (
    <>
      <input type="text" required value={props.name} />
      <textarea rows="4" cols="50" value={props.value} />
    </>
  );
};

export default TextAreaDataType;

/* eslint-disable react/destructuring-assignment */
import React from 'react';

// eslint-disable-next-line arrow-body-style
const TextAreaDataType = (props) => {
  return (
    <>
      <input
        type="text"
        onChange={() => console.log('test')}
        required
        value={props.name}
      />
      <textarea
        rows="4"
        cols="50"
        value={props.value}
        onChange={() => console.log('test')}
      />
    </>
  );
};

export default TextAreaDataType;

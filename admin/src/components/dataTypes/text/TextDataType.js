/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  setDataType,
  removeDataTypeFromDocType,
} from '../../../state/actions/contentPageActions';

// eslint-disable-next-line no-unused-vars
const TextDataType = ({
  dataTypeId,
  options,
  value,
  title,
  type,
  dispatch,
  sid,
}) => {
  const onChangeHandler = (event) => {
    // TODO: fix event target
    const data = {
      [sid]: {
        value: { val: event.target.value },
        options,
        title,
        type,
        dataTypeId,
      },
    };
    dispatch(setDataType(data));
  };
  const removeDocType = () => {
    dispatch(removeDataTypeFromDocType(sid));
  };

  // if (!datatypes) {
  //   return <div>Loading</div>;
  // }

  return (
    <div>
      <input type="text" onChange={onChangeHandler} required value={title} />
      <br />
      <input type="text" onChange={onChangeHandler} value={value.val} />
      <button type="button" onClick={removeDocType}>
        Remove
      </button>
    </div>
  );
};

export default TextDataType;

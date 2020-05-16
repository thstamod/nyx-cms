/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useContentPageState } from '../../../context/ContentPageContext';
import {
  setDataType,
  removeDataTypeFromDocType,
} from '../../../state/actions/contentPageActions';

// eslint-disable-next-line no-unused-vars
const TextDataType = ({ dataTypeId, options, value, title, type }) => {
  const [{ datatypes }, dispatch] = useContentPageState();
  console.log('datatypes', datatypes);
  const onChangeHandler = (event) => {
    // TODO: fix event target
    const data = {
      [dataTypeId]: {
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
    dispatch(removeDataTypeFromDocType(dataTypeId));
  };

  if (!datatypes) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <input
        type="text"
        onChange={onChangeHandler}
        required
        value={datatypes[dataTypeId].title}
      />
      <br />
      <input
        type="text"
        onChange={onChangeHandler}
        value={datatypes[dataTypeId].value.val}
      />
      <button type="button" onClick={removeDocType}>
        Remove
      </button>
    </div>
  );
};

export default TextDataType;

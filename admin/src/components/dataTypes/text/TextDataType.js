/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useContentPageState } from '../../../context/ContentPageContext';
import { setDataType } from '../../../state/actions/contentPageActions';

// eslint-disable-next-line no-unused-vars
const TextDataType = ({ _id, options, value, title }) => {
  const [state, dispatch] = useContentPageState();

  const onChangeHandler = (event) => {
    //  console.log();
    const data = {
      [_id]: { value: { val: event.target.value }, options, title },
    };
    dispatch(setDataType(data));
  };

  if (!state.datatypes) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <input
        type="text"
        onChange={onChangeHandler}
        required
        value={state.datatypes[_id].title}
      />
      <br />
      <input
        type="text"
        onChange={onChangeHandler}
        value={state.datatypes[_id].value.val}
      />
    </div>
  );
};

export default TextDataType;

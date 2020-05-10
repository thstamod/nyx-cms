// /* eslint-disable react/destructuring-assignment */
// import React from 'react';

// const TextDataType = (props) => {

//   console.log(props);

//   return (
//     <>
//       <input
//         type="text"
//         // onChange={(e) => props.getData(e.target.value)}
//         required
//         // value={props.name}
//       />
//       <br />
//       <input type="text" value={props.value} />
//     </>
//   );
// };

// export default TextDataType;

/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { useContentPageState } from '../../../context/ContentPageContext';
import { changeDataType } from '../../../state/actions/contentPageActions';

const TextDataType = ({ _id, options, value, title }) => {
  const [state, dispatch] = useContentPageState();
  console.log('state', state);

  useEffect(() => {
    // TODO: set state on init
  }, []);

  const onChangeHandler = () => {
    // const data = props;
    const data = { [_id]: { value, options, title } };
    dispatch(changeDataType(data));
  };

  return (
    <>
      <input type="text" required value={state[_id].title} />
      <br />
      <input
        type="text"
        onChange={onChangeHandler}
        value={state[_id].value.val}
      />
    </>
  );
};

export default TextDataType;

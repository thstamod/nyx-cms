import React, { useState } from 'react';
import _ from 'lodash/lang';
import { Item, WrapperSubmenu } from './ListViewItem.styles.tw';

const ListViewItem = ({ data, handleClick }) => {
  const [isOpen, setOpen] = useState(false);

  const setDescendants = () =>
    !_.isEmpty(data.descendants) &&
    data.descendants.map(({ documentType }) => (
      <ListViewItem
        key={documentType._id}
        handleClick={handleClick}
        data={documentType}
      />
    ));

  return (
    <Item key={data._id}>
      <span
        onClick={() => {
          setOpen(!isOpen);
          handleClick(data._id);
        }}
      >
        {data.name}
        {!_.isEmpty(data.descendants) && '+'}
      </span>
      <WrapperSubmenu open={isOpen}>{setDescendants()}</WrapperSubmenu>
    </Item>
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
};

export default React.memo(ListViewItem);

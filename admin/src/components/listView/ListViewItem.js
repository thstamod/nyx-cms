/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import _ from 'lodash/lang';
import { Item, WrapperSubmenu } from './ListViewItem.styles.tw';
import { useContentPageState } from '../../context/ContentPageContext';
import { selectDocType } from '../../state/actions/contentPageActions';

// TODO: refactor runs multiple times after dispatch

const ListViewItem = ({ data }) => {
  const [state, dispatch] = useContentPageState();
  console.log(state);
  const [isOpen, setOpen] = useState(false);
  const setDescendants = () =>
    !_.isEmpty(data.descendants) &&
    data.descendants.map(({ documentType }) => (
      <ListViewItem key={documentType._id} data={documentType} />
    ));
  return (
    <Item key={data._id}>
      <span
        onClick={() => {
          setOpen(!isOpen);
          dispatch(selectDocType(data._id));
        }}
      >
        {data.name}
        {!_.isEmpty(data.descendants) && '+'}
      </span>
      <WrapperSubmenu open={isOpen}>{setDescendants()}</WrapperSubmenu>
    </Item>
  );
};

export default React.memo(ListViewItem);

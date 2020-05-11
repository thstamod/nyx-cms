import React, { useState, useMemo } from 'react';
import _ from 'lodash/lang';
import { Item, WrapperSubmenu } from './ListViewItem.styles.tw';
import { useContentPageState } from '../../context/ContentPageContext';
import { selectDocType } from '../../state/actions/contentPageActions';

const ListViewItem = ({ data }) => {
  const [, dispatch] = useContentPageState();

  const [isOpen, setOpen] = useState(false);
  const setDescendants = () =>
    !_.isEmpty(data.descendants) &&
    data.descendants.map(({ documentType }) => (
      <ListViewItem key={documentType._id} data={documentType} />
    ));

  return useMemo(
    () => (
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
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isOpen]
  );
};

export default ListViewItem;

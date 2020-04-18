/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import _ from 'lodash/lang';
// import SubMenu from './SubMenu';

const Item = styled('div')`
  font-family: ${(props) => props.theme.fonts[1]};
  width: 100%;
  color: ${(props) => props.theme.colors.powderWhite};
`;

const WrapperSubmenu = styled.div`
  max-height: ${(props) => (props.open ? '100%' : '0')};
  overflow: hidden;
  transition: all 0.3s ease-out;
  padding-left: 10px;
`;
const ListViewItem = ({ data }) => {
  const [isOpen, setOpen] = useState(false);
  const setDescendants = () =>
    !_.isEmpty(data.descendants) &&
    data.descendants.map(({ documentType }) => (
      <ListViewItem key={documentType._id} data={documentType} />
    ));
  return (
    <Item key={data._id}>
      <span onClick={() => setOpen(!isOpen)}>
        {data.name}
        {!_.isEmpty(data.descendants) && '+'}
      </span>
      <WrapperSubmenu open={isOpen}>{setDescendants()}</WrapperSubmenu>
    </Item>
  );
};

export default ListViewItem;

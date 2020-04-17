/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import SubMenu from './SubMenu';

const Item = styled('div')`
  font-family: ${(props) => props.theme.fonts[1]};
  width: 100%;
  color: ${(props) => props.theme.colors.powderWhite};
`;

const WrapperSubmenu = styled.div`
  max-height: ${(props) => (props.open ? '100%' : '0')};
  overflow: hidden;
  transition: all 0.3s ease-out;
`;
const ListViewItem = ({ data }) => {
  const [isOpen, setOpen] = useState(false);
  const setDescendants = () =>
    !!data.descendants.length && (
      <WrapperSubmenu open={isOpen}>
        <SubMenu data={data.descendants} />
      </WrapperSubmenu>
    );
  return (
    <Item key={data._id}>
      <span onClick={() => setOpen(!isOpen)}>
        {data.name}
        {!!data.descendants.length && '+'}
      </span>
      {setDescendants()}
    </Item>
  );
};

export default ListViewItem;

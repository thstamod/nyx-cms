/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import SubMenu from './SubMenu';

const Text = styled('div')`
  font-family: ${(props) => props.theme.fonts[1]};
  width: 100%;
  color: ${(props) => props.theme.colors.powderWhite};
`;

const ListViewItem = ({ data }) => {
  console.log(data);
  return (
    <Text key={data._id}>
      <span>{data.name}</span>
      {data.descendants && <SubMenu data={data.descendants} />}
    </Text>
  );
};

export default ListViewItem;

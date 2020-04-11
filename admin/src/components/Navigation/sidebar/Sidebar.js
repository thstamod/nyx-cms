import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import ListView from '../../listView/ListView';

const SidebarWrapper = styled('aside')`
  padding: 15px 10px;
  background: ${(props) => props.theme.colors.darkGrey};
  color: ${(props) => props.theme.colors.powderWhite};
  height: 100%;
  overflow: hidden;
`;
const ListViewWrapper = styled('aside')`
  height: 100%;
  overflow-y: auto;
  scrollbar-color: red green;
  scrollbar-width: thin;
`;

const Sidebar = ({ data }) => (
  <SidebarWrapper data-testid="sidebar">
    <ListViewWrapper>
      <ListView data={data} />
    </ListViewWrapper>
  </SidebarWrapper>
);

Sidebar.propTypes = {
  data: propTypes.object,
};

export default Sidebar;

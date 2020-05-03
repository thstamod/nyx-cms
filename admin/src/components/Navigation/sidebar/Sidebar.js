import React from 'react';
import ListView from '../../listView/ListView';
import { SidebarWrapper, ListViewWrapper } from './Sidebar.styles.tw';

const Sidebar = ({ data, selector }) => (
  <SidebarWrapper data-testid="sidebar">
    <ListViewWrapper>
      <ListView selector={selector} data={data} />
    </ListViewWrapper>
  </SidebarWrapper>
);

export default Sidebar;

import React from 'react';
import ListView from '../../listView/ListView';
import { SidebarWrapper, ListViewWrapper } from './Sidebar.styles.tw';

const Sidebar = ({ data }) => (
  <SidebarWrapper data-testid="sidebar">
    <ListViewWrapper>
      <ListView data={data} />
    </ListViewWrapper>
  </SidebarWrapper>
);

export default React.memo(Sidebar);

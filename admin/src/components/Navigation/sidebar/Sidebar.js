import React from 'react';
import ListView from '../../listView/ListView';
import styles from './styles.module.scss';

const Sidebar = ({ data }) => (
  <aside className={styles.sidebarWrapper} data-testid="sidebar">
    <div className={styles.listViewWrapper}>
      <ListView data={data} />
    </div>
  </aside>
);

export default React.memo(Sidebar);

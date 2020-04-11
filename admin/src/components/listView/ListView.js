import React from 'react';
import { Nav } from 'react-bootstrap';
import ListViewItem from './ListViewItem';

const ListView = ({ data }) => {
  const showListViewItems = () => {
    if (!data) {
      return null;
    }

    const list = data.documentTypes.map(
      (el) =>
        el && (
          <ListViewItem
            data-testid="content-list-menu-item"
            key={el._id}
            data={el}
          />
        )
    );
    return list;
  };
  return (
    <Nav
      defaultActiveKey="/home"
      className="flex-column"
      data-testid="content-list-menu"
    >
      {showListViewItems()}
    </Nav>
  );
};

export default ListView;

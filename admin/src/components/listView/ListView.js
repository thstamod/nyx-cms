import React from 'react';
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
  return <div data-testid="content-list-menu">{showListViewItems()}</div>;
};

export default ListView;

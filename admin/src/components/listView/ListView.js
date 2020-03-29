/* eslint-disable react/prop-types */
import React from 'react';
import { Nav } from 'react-bootstrap';
import ListViewItem from './ListViewItem';

const ListView = ({ data }) => {
  const showListViewItems = () => {
    const list = data.documentTypes.map(
      (el) => el && <ListViewItem key={el._id} data={el} />
    );
    return list;
  };
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      {showListViewItems()}
    </Nav>
  );
};

export default ListView;

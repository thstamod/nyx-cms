import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Test = styled('div')`
  font-size: 14px;
  padding-left: 10px;
`;

const SubMenu = ({ data }) => {
  const showSubmenu = (d) => {
    // eslint-disable-next-line arrow-body-style
    const list = d.map(({ documentType }) => {
      console.log(documentType);
      return (
        documentType && <Test key={documentType._id}>{documentType.name}</Test>
      );
    });
    return list;
  };

  return <div>{showSubmenu(data)}</div>;
};

SubMenu.propTypes = {
  data: propTypes.array,
};

export default SubMenu;

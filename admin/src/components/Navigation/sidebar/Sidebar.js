import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import ListView from '../../listView/ListView';

const SidebarWrapper = styled('aside')`
  padding: 15px 10px;
  background: ${(props) => props.theme.colors.darkGrey};
  color: ${(props) => props.theme.colors.powderWhite};
  height: 100%;
`;

const Sidebar = ({ data }) => {
  console.log(data);
  return (
    <SidebarWrapper>
      <ListView data={data} />
    </SidebarWrapper>
  );
};

Sidebar.propTypes = {
  data: propTypes.object,
};

export default Sidebar;

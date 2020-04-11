import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Test = styled('div')`
  font-size: 14px;
  padding-left: 10px;
`;

const WrapperSubmenu = styled.div`
  max-height: ${(props) => (props.open ? '100%' : '0')};
  overflow: hidden;
  transition: all 0.3s ease-out;
`;

const SubMenu = ({ data }) => {
  const [isOpen, setOpen] = useState(false);
  console.log(data);
  const showSubmenu = (d) => {
    // eslint-disable-next-line arrow-body-style
    const list = d.map(({ documentType }) => {
      console.log(documentType);
      return (
        documentType && (
          <Test key={documentType._id} onClick={() => setOpen(!isOpen)}>
            {documentType.name}
            {documentType.descendants && '+'}
            {documentType.descendants && (
              <WrapperSubmenu open={isOpen}>
                <SubMenu data={documentType.descendants} />
              </WrapperSubmenu>
            )}
          </Test>
        )
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

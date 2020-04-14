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
  padding-left: 10px;
`;

const SubMenu = ({ data }) => {
  const [isOpen, setOpen] = useState(false);
  const showSubmenu = (d) => {
    // eslint-disable-next-line arrow-body-style
    const list = d.map(({ documentType }) => {
      return (
        documentType && (
          <>
            <Test key={documentType._id} onClick={() => setOpen(!isOpen)}>
              {documentType.name}
              {documentType.descendants && '+'}
            </Test>
            {documentType.descendants && (
              <WrapperSubmenu open={isOpen}>
                <SubMenu data={documentType.descendants} />
              </WrapperSubmenu>
            )}
          </>
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

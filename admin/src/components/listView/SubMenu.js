import React, { useState } from 'react';
import styled from 'styled-components';

const SubmenuTitle = styled('div')`
  font-size: 14px;
  padding-left: 10px;
`;

const WrapperSubmenu = styled.div`
  max-height: ${(props) => (props.open ? '100%' : '0')};
  overflow: hidden;
  transition: all 0.3s ease-out;
  padding-left: 10px;
`;
// TODO: fix click bubble
const SubMenu = ({ data }) => {
  const [isOpen, setOpen] = useState(false);
  const showSubmenu = (d) => {
    // eslint-disable-next-line arrow-body-style
    const list = d.map(({ documentType }) => {
      return (
        documentType && (
          <div key={documentType._id}>
            <SubmenuTitle onClick={() => setOpen(!isOpen)}>
              {documentType.name}
              {!!documentType.descendants.length && '+'}
            </SubmenuTitle>
            {!!documentType.descendants.length && (
              <WrapperSubmenu open={isOpen}>
                <SubMenu data={documentType.descendants} />
              </WrapperSubmenu>
            )}
          </div>
        )
      );
    });
    return list;
  };

  return <>{showSubmenu(data)}</>;
};

export default SubMenu;

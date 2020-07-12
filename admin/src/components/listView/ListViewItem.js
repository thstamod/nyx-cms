import React, { useState } from 'react';
import _ from 'lodash/lang';
import cx from 'classnames';
import styles from './styles.module.scss';

const ListViewItem = ({ data, handleClick }) => {
  const [isOpen, setOpen] = useState(false);

  const setDescendants = () =>
    !_.isEmpty(data.descendants) &&
    data.descendants.map(({ documentType }) => (
      <ListViewItem
        key={documentType._id}
        handleClick={handleClick}
        data={documentType}
      />
    ));

  return (
    <div className={styles.item} key={data._id}>
      <span
        onClick={() => {
          setOpen(!isOpen);
          handleClick(data._id);
        }}
      >
        {data.name}
        {!_.isEmpty(data.descendants) && '+'}
      </span>
      <div
        className={
          isOpen
            ? cx(styles.wrapperSubmenu, styles.open)
            : styles.wrapperSubmenu
        }
        open={isOpen}
      >
        {setDescendants()}
      </div>
    </div>
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
};

export default React.memo(ListViewItem);

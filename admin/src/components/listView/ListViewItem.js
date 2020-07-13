import React, { useState } from 'react';
import _ from 'lodash/lang';
// import cx from 'classnames';
import { Transition } from 'react-transition-group';
import styles from './styles.module.scss';
import { defaultStyle, transitionStyles } from './transitions';

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

      <Transition in={isOpen} timeout={500}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
            className={styles.wrapperSubmenu}
            open={isOpen}
          >
            {setDescendants()}
          </div>
        )}
      </Transition>
    </div>
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
};

export default React.memo(ListViewItem);

import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

const withFullContainer = (Component) => (props) => (
  <div className={cx('row', styles.fullContainer)} data-testid="main-container">
    <Component {...props} />
  </div>
);

export default withFullContainer;

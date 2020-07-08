import React from 'react';
import styles from './styles.module.scss';

const withFullContainer = (Component) => (props) => (
  <div className={styles.fullContainer} data-testid="main-container">
    <Component {...props} />
  </div>
);

export default withFullContainer;

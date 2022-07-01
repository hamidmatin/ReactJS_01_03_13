import React from 'react';
import styles from './button-box.module.css';

const ButtomBox = ({ children }) => {
  return <div className={styles['button-box']}>{children}</div>;
};

export default ButtomBox
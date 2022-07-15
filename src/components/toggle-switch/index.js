import React from 'react';
import styles from './toggle-switch.module.css'

export const ToggleSwitch = ({onLable='On', offLable='Off', onToggleSwitch}) => {
  return (
    <label className={styles['switch']}>
      <input className={styles['switch-input']} type='checkbox' onChange={onToggleSwitch}/>
      <span className={styles['switch-label']} data-on={onLable} data-off={offLable}></span>
      <span className={styles['switch-handle']}></span>
    </label>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './new-form-button.module.css'

export const NewFormButtonn = () => {
  return (
    <div className={styles['wrapper']}>
      <Link to={'new'} title='New'>
        <i className='material-symbols-outlined'>post_add</i>
      </Link>
    </div>
  );
};

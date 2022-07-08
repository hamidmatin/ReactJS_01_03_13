import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './page-not-found.module.css';
import notFountPic from './notfound.webp';

export const PageNotFound = () => {
  const navigate = useNavigate();

  const backClickHandler = () => {
    navigate(-1);
  };
  return (
    <div className={styles['wrapper']}>
      <img src={notFountPic} alt='not found' className={styles['not-found-img']} />
      <div>
        <Link to={`/`} className={styles['button']}>
          Home
        </Link>
        <button className={styles['button']} onClick={backClickHandler}>
          Back
        </button>
      </div>
    </div>
  );
};

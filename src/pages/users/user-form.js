import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './user-form.module.css';

const UserForm = ({ user, onSave }) => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
  });

  const cancelHandler = () => {
    console.log('sds');
    navigate(-1);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    /* after check validation */
    onSave(data);
    navigate(-1);
  };

  // const nameChangeHandler = e => {
  // 	console.log(e.target)
  // 	setData({
  // 		...data,
  // 		name: e.target.value
  // 	})
  // }
  // const usernameChangeHandler = e => {
  // 	console.log(e.target)
  // 	setData({
  // 		...data,
  // 		username: e.target.value
  // 	})
  // }

  const changeHandler = (e) => {
    // console.log(e.target)
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setData(user);
  }, [user]);

  return (
    <form className={styles['user-form']} onSubmit={submitHandler}>
      <div className={styles['form-group']}>
        <label htmlFor='name' className={styles['form-lable']}>
          Name
        </label>
        <input
          id='name'
          name='name'
          type={'text'}
          className={styles['from-control']}
          autoComplete='off'
          value={data.name}
          // onChange={nameChangeHandler}
          onChange={changeHandler}
        />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor='user-name' className={styles['form-lable']}>
          User Name
        </label>
        <input
          id='user-name'
          name='username'
          type={'text'}
          className={styles['from-control']}
          autoComplete='off'
          value={data.username}
          // onChange={usernameChangeHandler}
          onChange={changeHandler}
        />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor='email' className={styles['form-lable']}>
          E-Mail
        </label>
        <input
          id='email'
          name='email'
          type={'text'}
          className={styles['from-control']}
          autoComplete='off'
          value={data.email}
          onChange={changeHandler}
        />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor='phone' className={styles['form-lable']}>
          Phone
        </label>
        <input
          id='phone'
          name='phone'
          type={'text'}
          className={styles['from-control']}
          autoComplete='off'
          value={data.phone}
          onChange={changeHandler}
        />
      </div>
      <div className={styles['form-footer']}>
        <button
          className={`${styles['btn']} ${styles['btn-cancel']}`}
          type='button'
          onClick={cancelHandler}
        >
          Cancel
        </button>
        <button className={`${styles['btn']} ${styles['btn-save']}`} type='submit'>
          Save
        </button>
      </div>
    </form>
  );
};

export default UserForm;

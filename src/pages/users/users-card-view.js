import React from 'react';
import { Link } from 'react-router-dom';
import { ListIsEmpty } from '../../components/list-is-empty';
import styles from './users.module.css';

const UsersCardView = ({ users, onDelete }) => {
  //   console.log(users);
  return (
    <div className='row'>
      {users && users.length > 0 ? (
        users.map((user) => (
          <div key={user.id} className='col-md-4' style={{ marginBottom: '16px' }}>
            <div className={styles['card']}>
              <div className={styles['card-title']}>
                <h3>{user.name}</h3>
              </div>
              <div className={styles['card-text']}>
                User Name: <strong>{user.username}</strong>
              </div>
              <div className={styles['card-text']}>
                E-mail: <strong>{user.email}</strong>
              </div>
              <div className={styles['card-text']}>
                Phone: <strong>{user.phone}</strong>
              </div>
              <div className={styles['card-footer']}>
                <button className={styles['icon-button']} onClick={()=>{onDelete(user.id)}}>
                  <i className='material-symbols-outlined'>delete</i>
                </button>
                <Link to={`edit/${user.id}`} className={styles['icon-button']}>
                  <i className='material-symbols-outlined'>edit</i>
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <ListIsEmpty />
      )}
    </div>
  );
};

export default UsersCardView;

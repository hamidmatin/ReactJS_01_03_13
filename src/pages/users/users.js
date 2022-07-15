import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BasePage } from '../../components/base-page/base-page';
import { Container } from '../../components/container';
import { NewFormButtonn } from '../../components/new-form-button';
import UsersCardView from './users-card-view';
import { ToggleSwitch } from '../../components/toggle-switch';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [view, setView] = useState('card');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((result) => {
      // console.log(result)
      setUsers(result.data);
    });
  }, []);

  const deleteUserHandler = (id) => {
    console.log('delete user id ', id);
  };

  const viewChangeHandler = () => {
    setView(view === 'card' ? 'table' : 'card')
  }
  return (
    <Container>
      <BasePage
        title={'Users'}
        description='Get All Users From https://jsonplaceholder.typicode.com/'
      >
        <ToggleSwitch onLable='Table View' offLable='Card View' onToggleSwitch={viewChangeHandler}/>
        <NewFormButtonn />

        {view === 'card' ? (
          <UsersCardView users={users} onDelete={deleteUserHandler} />
        ) : (
          <p>Table View Not Generated</p>
        )}
      </BasePage>
    </Container>
  );
};

export default UsersPage;

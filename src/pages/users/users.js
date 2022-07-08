import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { BasePage } from '../../components/base-page/base-page';
import { Container } from '../../components/container';
import { NewFormButtonn } from '../../components/new-form-button';
import UsersCardView from './users-card-view';

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(result => {
        // console.log(result)
        setUsers(result.data)
      })
  }, [])

  const deleteUserHandler = (id) =>{
    console.log('delete user id ' , id)
  }

  return (
    <Container>
      <BasePage
        title={'Users'}
        description='Get All Users From https://jsonplaceholder.typicode.com/'
      >
        <NewFormButtonn />

        <UsersCardView users={users} onDelete={deleteUserHandler}/>
      </BasePage>
    </Container>
  );
};

export default UsersPage;

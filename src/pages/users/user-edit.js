import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BasePage } from '../../components/base-page/base-page';
import UserForm from './user-form';
import { useState } from 'react';

const UserEditPage = () => {
  const { id } = useParams();

  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((result) => {
      // console.log(result.data)
      setUser(result.data);
    });
  }, [id]);

  const updateUserHandler = (updateUser) => {
    // console.log('user updated');
    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateUser).then((result) => {
      console.log(result.data);
    });
  };
  return (
    <BasePage title={'Edit User'} className='container'>
      <UserForm user={user} onSave={updateUserHandler} />
    </BasePage>
  );
};

export default UserEditPage;

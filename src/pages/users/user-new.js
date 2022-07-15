import React from 'react';
import { BasePage } from '../../components/base-page/base-page';
import UserForm from './user-form';
import axios from 'axios';

const UserNewPage = () => {
  const user = {
    name: '',
    username: '',
    email: '',
    phone: '',
  };

  const addNewUserHandler = (newUser) => {
    // console.log(newUser);
    axios
			.post('https://jsonplaceholder.typicode.com/users', newUser)
			.then(result => {
				console.log(result.data)
			})
  };
  return (
    <BasePage title={'New User'} className='container'>
      <UserForm user={user} onSave={addNewUserHandler} />
    </BasePage>
  );
};

export default UserNewPage;

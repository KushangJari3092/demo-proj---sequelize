import React, { useContext, useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import ErrorModal from './components/ErrorModal';
import UserList from './components/UserList';
import { Context } from './context/context';


const App = () => {
  const { isShowUsers, isAddUser } = useContext(Context)

  return (
    <div className='container'>
      <ErrorModal />
      {isAddUser && <UserForm />}
      {isShowUsers && <UserList />}

    </div>
  );
}

export default App;

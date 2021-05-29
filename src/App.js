import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';


function App() {

  const[userList, setUserList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUserList ((prevUserStage) => {
      return [...prevUserStage, {name: uName, age: uAge, id: Math.random().toString()}]
    })
  }

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList}/>
    </>
  );
}

export default App;

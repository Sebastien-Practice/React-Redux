import React, {useEffect, useState} from 'react';
import LifecycleComponent from './components/LifecycleComponent';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() { 
  const [usersList, setUsersList] = useState([]);

  const [title, setTitle] = useState("LifeCycle Component");

  const addUserHandler = (userName: string, userAge: number) => {
    setUsersList((prevUsersList: any[]): any => {
      return [...prevUsersList, {name: userName, age: userAge, id: Math.random().toString()}];
    })
  }

  const incrementOnClick = (): void => {
    setTitle("Title Changed!");
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList} />
      <LifecycleComponent title={title}/>
      <button onClick={incrementOnClick}>Change title</button>
    </div>
  );
}

export default App;

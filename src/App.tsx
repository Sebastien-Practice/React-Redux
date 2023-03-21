import React, {useState} from 'react';
import LifecycleComponent from './components/LifecycleComponent';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() { 
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName: string, userAge: number) => {
    setUsersList((prevUsersList: any[]): any => {
      return [...prevUsersList, {name: userName, age: userAge, id: Math.random().toString()}];
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList} />
      <LifecycleComponent title="LifeCycle Component"/>
    </div>
  );
}

export default App;

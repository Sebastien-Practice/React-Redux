import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import { useDispatch } from 'react-redux';
import './AddUser.module.css';
import { saveUser } from '../../store/actions/action';

const AddUser = (props: any) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredUserAge, setEnteredUserAge] = useState('');

    const dispatch = useDispatch(); //for store

    let user: {name: string, age: string}[] = [];

    const handleAddUser = (e: React.SyntheticEvent) =>{
        e.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredUserAge.trim().length === 0){
            return;
        }

        if(+enteredUserAge < 1){
            return;
        };

        user = [{name: enteredUsername, age: enteredUserAge}]

        dispatch(saveUser(user))

        props.onAddUser(enteredUsername, enteredUserAge);
        setEnteredUsername('');
        setEnteredUserAge('');
    }

    const usernameChangeHandler = (e: any) => {
        setEnteredUsername(e.target.value);
    }

    const ageChangeHandler = (e: any) => {
        setEnteredUserAge(e.target.value);
    }

    return (
        <div>
            <Card className="input" >
                <form onSubmit={handleAddUser}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}></input>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={enteredUserAge} onChange={ageChangeHandler}></input>
                    <button type="submit">Add User</button>
                </form>
                <Button />
            </Card>
        </div>
    )
}
export default AddUser;

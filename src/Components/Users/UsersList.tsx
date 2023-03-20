import React from 'react';

import Card from '../UI/Card';

const UsersList = (props:any) => {

    return (
        <div>
            <Card>
                <ul>
                    {props.users.map((user: any) => {
                        return <li>{user.name} ({user.age} years old) </li>
                    })}
                </ul>
            </Card>
        </div>
    )
}

export default UsersList;

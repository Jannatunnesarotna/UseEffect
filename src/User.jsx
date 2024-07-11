import React from 'react';

const User = ({user}) => {
    const {name, email} = user
    return (
        <div>
            <h1>name: {name}</h1>
            <h3>E-mail: {email}</h3>
        </div>
    );
};

export default User;
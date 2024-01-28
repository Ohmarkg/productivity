'use client'
import React from 'react';
import { useState } from 'react';

const User = () =>{
    const [user, setUser] = useState({name: 'John', age: 20});
    return (
        <>
            <h1>{user.name}</h1>
            <h1>{user.age}</h1>
        </>
        
    );
}
export default User;
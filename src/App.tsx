import './App.css'
import {Total} from "./components/total";
import {Empty} from "./components/empty";
import React, {useEffect, useState} from "react";
import {User} from "./models/user";
import axios from "axios";

const usersInitialState: Partial<User>[] = [
    {id: 1, name: 'Fabio'},
    {id: 2, name: 'Lorenzo'},
    {id: 3, name: 'Silvia'}
];

export const App = () => {
    const [totalProducts, setTotalProducts] = useState(0);
    const [users, setUsers] = useState(usersInitialState);
    const inc = () => setTotalProducts(s => s + 1);
    // const addUser = () => setUsers(s=>[...s,{id:Date.now(),name:`U${`${Date.now()}`.slice(-4)}`}])
    const addUser = () =>
        axios.post<User>('https://jsonplaceholder.typicode.com/users',{name: `U${`${Date.now()}`.slice(-4)}`})
            .then(({data:addedUser})=>setUsers(s=>[...s,addedUser]))
    
    useEffect(() => {
        axios.get<User[]>('https://jsonplaceholder.typicode.com/users').then(({data:users})=>setUsers(users))
    }, [])
    useEffect(() => console.log('totalChanged'), [totalProducts])
    
    return (
        <>
            {totalProducts ? <Total total={totalProducts}/> : <Empty/>}
            <button onClick={inc}>Add</button>
            {users.map(user => <li key={user.id}>{user.id}-{user.name}</li>)}
            <button onClick={addUser}>Add</button>
        </>
    )
}

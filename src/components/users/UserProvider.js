import React, { useState, createContext } from "react"

export const UserContext = createContext()
//Nothing is stored in the context when it's defined. At this point, 
//it's just an empty warehouse waiting to be filled.

export const UserProvider = (props) => {
const [users, setUsers] = useState([])

console.log('users: ', users);
// useState to set the initial state of users to and empty array and setUsers to
//update the state with an array of objects (users)


    const getUsers = () =>{
        return fetch("http://localhost:8088/users")
        .then(res => res.json())
        .then(setUsers)
    }


    return ( 
        <UserContext.Provider value={{
            users, getUsers
        }}>
            {props.children}
        </UserContext.Provider>
    )
    //You return a context provider which has the `users` state, `getUsers` function,
    // etc. function as keys. This allows any child elements to access them.
}
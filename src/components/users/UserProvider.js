import React, { useState, createContext } from "react"


export const UserContext = createContext()
//Nothing is stored in the context when it's defined. At this point, 
//it's just an empty warehouse waiting to be filled.

export const UserProvider = (props) => {
    const [users, setUsers] = useState([])
    const [ searchTerms, setSearchTerms ] = useState("")

//useState hook to define a variable that holds the state of the component, 
//and a function that updates it.
    const getUsers = () => {
        return fetch("http://localhost:8088/users")
        .then(res => res.json())
        .then(setUsers)
    }

    const getUserById = (userId) => {
        return fetch(`http://localhost:8088/users/${userId}`)
        .then(res => res.json())
    }

    return (
        <UserContext.Provider value={{
            users, getUsers, searchTerms, setSearchTerms, getUserById
        }}>
            {props.children}
        </UserContext.Provider>
    )
    //You return a context provider which has the `users` state, `getUsers` function,
    // etc. function as keys. This allows any child elements to access them.
}
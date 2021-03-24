import React, { useContext, useEffect, useState } from "react"
import { FriendContext } from "../friends/FriendProvider"
import { UserCard } from "./UserCard"
import { UserContext } from "./UserProvider"

export const UserList = () => {

    const { users, getUsers, searchTerms } = useContext(UserContext)
    // console.log('users: ', users);
    const [ filteredUsers, setFiltered ] = useState([])
    
    //import the context object created in the provider component so that 
    // the Context hook can access the objects it exposes.
    // This state changes when `getUsers()` is invoked below
    useEffect(() => {
        getUsers()
    }, [])
    useEffect(() => {
        // console.log("FriendList")
        if (searchTerms !== "") {
            const subset = users.filter(user => user.name.toLowerCase().includes(searchTerms.toLowerCase()))
            setFiltered(subset)
        } else {
            setFiltered([])
            //If search field is empty display all users
        }
    }, [searchTerms, users])
//   The useEffect hook allows the component to reach out into the world for anything 
//   that cannot be handled during render. In this case, it is the API call for the friends.

    const { friends, getFriends } = useContext(FriendContext)
    // console.log('userFriends: ', friends);
    
    useEffect(() => {
        // console.log("FriendList")
        getFriends()
    }, [])
    // Use the .map() array method to iterate the array of animals and 
    // generate HTML for each one by invoking the FriendCard component function.

    
    return (
        <div className="users">
            {/* {console.log("friends list render", friends)} */}
            
            {   
                filteredUsers.map(user => {
                    return <UserCard key={user.id} user={user} friends={friends} />
                })
            }
        </div>
    )
}
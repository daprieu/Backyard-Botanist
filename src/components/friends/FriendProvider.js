import React, { useState, createContext } from "react"

export const FriendContext = createContext()
//Nothing is stored in the context when it's defined. At this point, 
//it's just an empty warehouse waiting to be filled.

export const FriendProvider = (props) => {
    
    const [friends, setFriends] = useState([])
    

    
    //useState() hook to define a variable that holds the state 
    //of the component, and a function that updates it.

    const getFriends = () => {
        return fetch(`http://localhost:8088/friends/?currentUserId=${(parseInt(sessionStorage.getItem("app_user_id")))}&_expand=user`)
        .then(res => res.json())
        .then(setFriends)
    }

    const getPlantByFriendId = (id) => {
        return fetch(`http://localhost:8088/users/${id}?_embed=plants`)
        .then(res => res.json())

    }

    return (
        <FriendContext.Provider value={{
            friends, getFriends, getPlantByFriendId
            
        }}>
            {props.children}
        </FriendContext.Provider>
    )
    //You return a context provider which has the `friends` state, `getFriends` function,
    // etc. function as keys. This allows any child elements to access them.

}
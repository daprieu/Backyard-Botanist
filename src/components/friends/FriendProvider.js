import React, { useState, createContext } from "react"

export const FriendContext = createContext()
//Nothing is stored in the context when it's defined. At this point, 
//it's just an empty warehouse waiting to be filled.

export const FriendProvider = (props) => {
    
    const [friends, setFriends] = useState([])
    const [friendPlants, setFriendPlants] = useState([])
    

    
    //useState() hook to define a variable that holds the state 
    //of the component, and a function that updates it.

    const getFriends = () => {
        return fetch(`https://backyard-botanist-api.herokuapp.com/friends/?currentUserId=${(parseInt(sessionStorage.getItem("app_user_id")))}&_expand=user`)
        .then(res => res.json())
        .then(setFriends)
    }

    const getPlantsByFriendId = (id) => {
        return fetch(`https://backyard-botanist-api.herokuapp.com/users/${id}?_embed=plants`)
        .then(res => res.json())
        .then(setFriendPlants)
    }
    const addFriend = friendObj => {
        return fetch("https://backyard-botanist-api.herokuapp.com/friends", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(friendObj)
        })
        .then(getFriends)
    }
    const deleteFriend = friendId => {
        return fetch(`https://backyard-botanist-api.herokuapp.com/friends/${friendId}`, {
            method: "DELETE"
        })
        .then(getFriends)
    }

    return (
        <FriendContext.Provider value={{
            friends, getFriends, friendPlants, getPlantsByFriendId, addFriend,
            deleteFriend
        }}>
            {props.children}
        </FriendContext.Provider>
    )
    //You return a context provider which has the `friends` state, `getFriends` function,
    // etc. function as keys. This allows any child elements to access them.

}
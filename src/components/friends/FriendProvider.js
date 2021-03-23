import React, { useState, createContext } from "react"

export const FriendPlantContext = createContext()
//Nothing is stored in the context when it's defined. At this point, 
//it's just an empty warehouse waiting to be filled.

export const FriendProvider = (props) => {
    
    const [plants, setPlants] = useState([])

    
    //useState() hook to define a variable that holds the state 
    //of the component, and a function that updates it.


    const getFriendPlants = () => {
        return fetch(`http://localhost:8088/plants/?_expand=user&/?userId=${(parseInt(sessionStorage.getItem("app_user_id")))}`)
        .then(res => res.json())
        .then(setPlants)
    }

    return (
        <FriendPlantContext.Provider value={{
            getFriendPlants, plants
            
        }}>
            {props.children}
        </FriendPlantContext.Provider>
    )
    //You return a context provider which has the `friends` state, `getFriends` function,
    // etc. function as keys. This allows any child elements to access them.

}
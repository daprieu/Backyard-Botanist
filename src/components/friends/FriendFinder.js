import React, { useContext } from "react"
import { UserContext } from "../users/UserProvider"



export const FriendFinder = () => {
    const { setSearchTerms } = useContext(UserContext)

    return (
        <div className="d-flex justify-content-center flex-wrap pl-5 pt-2 col-example ">
        <h4>Find a new friend:</h4>
        
        <input type="text"
            className="input--wide"
            onKeyUp={(event) => setSearchTerms(event.target.value)}
            placeholder="Search for a user" /></div>
        
    )
}
import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { FriendContext } from "../friends/FriendProvider"
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'



export const UserCard = ({ user, friends }) => {
    // console.log('friends: ', friends);
    // console.log('user: ', user);
    const {addFriend} = useContext(FriendContext)
    const currentUser = parseInt(sessionStorage.getItem("app_user_id"))


    
    const filterFriends = friends.filter(userfriend => userfriend.userId === user.id)
    console.log('filterFriends: ', filterFriends);
    let showButton = true
    if (filterFriends.length > 0) {
        user.name = ""
        showButton = false
        
    }
    //if array of filtered friends is greater than 0 then leave whatever returned filtered search as blank.
    if (user.id === currentUser) {
        user.name = ""
        showButton = false
    } 
    const history = useHistory()

    const handleSaveFriend = () => {
            addFriend({
            userId: user.id,
            currentUserId: currentUser
        })
        .then(() => {
            history.push("/friends")
        })
    
    }

    // this event handler tells the button below that if clicked to add the friend to the 
    // array of friends as an object with the defined key variables above.
    
    return (
    
<Card  className="m-1" style={{ width: '20rem', borderRadius: 25}}>
        
        { showButton === false ? '' :<Card.Body className="d-flex flex-row justify-content-around">
    { showButton === false ? '' :<Card.Title>{user.name} </Card.Title> 
    }{ showButton === false ? '' :<Link to={`/friends/friendplants/${friends.userId}`}>
    <Button id={user.id}  onClick={handleSaveFriend} variant="success">Add Friend</Button></Link>}
    
    </Card.Body>}
  </Card> 

)}
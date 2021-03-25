import React, {useContext} from "react"
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { FriendContext } from "./FriendProvider";






export const FriendCard = ({ friend }) => {
    const {deleteFriend} = useContext(FriendContext)
    

    const HandleDeleteFriend = () => {

    deleteFriend(friend.id)
    }

    return (

        
    <Card  className="m-1" style={{ width: '20rem', borderRadius: 25}}>
        
        <Card.Body className="d-flex flex-row justify-content-around">
        <Card.Title>{friend.user.name} </Card.Title> 
        </Card.Body>
        <Card.Body className="d-flex flex-row justify-content-around">
        <Link to={`/friends/friendplants/${friend.userId}`}>
            <Button variant="success">View Plants</Button></Link>
        <Button onClick={HandleDeleteFriend} variant="danger">Delete</Button>
        </Card.Body>
      </Card>


    )
} 
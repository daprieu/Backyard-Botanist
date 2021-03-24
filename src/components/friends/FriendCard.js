import React from "react"
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'





export const FriendCard = ({ friend }) => {



    return (

        
    <Card  className="m-1" style={{ width: '20rem', borderRadius: 25}}>
        
        <Card.Body className="d-flex flex-row justify-content-around">
        <Card.Title>{friend.user.name} </Card.Title> 
        <Link to={`/friends/friendplants/${friend.userId}`}>
            <Button variant="success">View Plants</Button></Link>
        </Card.Body>
      </Card>


    )
} 
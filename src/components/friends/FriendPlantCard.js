import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import { FriendPlantContext } from "./FriendProvider";
import { PlantContext } from "../plants/PlantsProvider";


const styles = {
cardImage: {
    objectFit: 'cover',
    borderRadius: 25,
    height: '20rem'
  }
}

export const FriendPlantCard = ({ plant }) => {
    
    

    return (
        
        // <section>
        //     <div>{plant.scientificName}</div>
            
        // </section>
    <Card style={{ width: '45rem', borderRadius: 25}}>
        <Card.Body>
        <Card.Title>{plant.user.name}'s </Card.Title> 
        <Card.Img variant="top" src={plant.image} style={styles.cardImage} />
          <Card.Title>{plant.scientificName}</Card.Title>
          <Card.Text>{ plant.commonName }</Card.Text>
          <Card.Text>Location Found: { plant.location }</Card.Text>
          {/* <Link to={`/friends/friendplants/${friend.id}`}><Button variant="success">
              View Plants</Button></Link> */}
        </Card.Body>
      </Card>
      
      
    )
}
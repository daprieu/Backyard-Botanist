import React from "react"
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'



export const PlantCard = ({ plant }) => {
    
    return (
        
        
        <Card style={{ width: '14rem' }}>
        <Card.Img variant="top" src={plant.image}  />
        <Card.Body>
          <Card.Title>{plant.scientificName}</Card.Title>
          <Card.Text>{ plant.commonName }</Card.Text>
          <Link to={`/myplants/notes/${plant.id}`}><Button variant="success">
              Plant Notes</Button></Link>
        </Card.Body>
      </Card>
      
      
    )
}


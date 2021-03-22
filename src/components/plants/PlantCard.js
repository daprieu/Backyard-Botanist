import React from "react"
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

const styles = {
cardImage: {
    objectFit: 'cover',
    borderRadius: 25,
    height: '16rem'
  }
}

export const PlantCard = ({ plant }) => {
    
    return (
        
        
        <Card style={{ width: '14rem', borderRadius: 25}}>
        <Card.Img variant="top" src={plant.image} style={styles.cardImage} />
        <Card.Body>
          <Card.Title>{plant.scientificName}</Card.Title>
          <Card.Text>{ plant.commonName }</Card.Text>
          <Link to={`/myplants/notes/${plant.id}`}><Button variant="success">
              Plant Notes</Button></Link>
        </Card.Body>
      </Card>
      
      
    )
}


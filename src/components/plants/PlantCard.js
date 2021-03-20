import React from "react"
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

export const PlantCard = ({ plant }) => {
    
    return (
        
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={plant.image} />
        <Card.Body>
          <Card.Title>{plant.scientificName}</Card.Title>
          <Card.Text>{ plant.commonName }</Card.Text>
          <Link to={`/myplants/notes/${plant.id}`}><Button variant="primary">
              Plant Notes</Button></Link>
        </Card.Body>
      </Card>
    )
}
{/* <section className="mb-3" style={{color: "#000"}}>
        <Link to={`/myplants/notes/${plant.id}`}>
            <img src={plant.image} height={200}
      alt="new" />
            <h3 className="plant__name">
      { plant.commonName }
    </h3>
            <div>{plant.scientificName}</div>
        </Link>
        
        </section> */}
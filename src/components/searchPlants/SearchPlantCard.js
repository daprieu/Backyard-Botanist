import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

export const SearchPlantCard = ({plant}) => (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={plant.image_url} size="20%" />
    <Card.Body variant="bot">
    <Card.Text>{ plant.scientific_name }</Card.Text>
    <Card.Text>{ plant.common_name }</Card.Text>
    <Link to={`/search/addplant/${plant.id}`}><Button variant="success">
              Add Plant</Button></Link>
    </Card.Body>
    </Card>
)

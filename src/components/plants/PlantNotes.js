
import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { PlantContext } from "./PlantsProvider"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

export const PlantNote = () => {

    const {getPlantsById, deletePlant} = useContext(PlantContext)
    const [plants, setPlants] = useState({})
    // console.log('plants: ', plants);

    const {plantId} = useParams()
    // console.log('plantId: ', plantId);
    // useParams from react-router-dom allows the app to read a parameter from the URL.
    
    useEffect(() => {
        getPlantsById(plantId)
        .then((res) => {
            setPlants(res)
        })
    }, [])

    
    const history = useHistory()

    const releasePlant = () => {
        deletePlant(plants.id)
        .then(() => {
            history.push("/myplants")
        })
    }
    return (
        <>
        <Button onClick={() => {
            history.push(`/myplants`)
            }}>Back to My Plants</Button>
        <Container className="d-flex justify-content-center flex-wrap p-2 col-example ">
        <Row>
        <Col>
        <Card  style={{ width: '40rem' }}>
        <Card.Img variant="top" src={plants.image} />
        <Card.Body>
          <Card.Title>{plants.scientificName}</Card.Title>
          <Card.Title>{plants.commonName}</Card.Title>
          <Card.Text>Type: {plants.type}</Card.Text>
          <Card.Text>Fruit: {plants.fruit}</Card.Text>
          <Card.Text>Flower: {plants.flower}</Card.Text>
          <Card.Text>Location: {plants.location}</Card.Text>
          <Card.Text>Date Found: {plants.date}</Card.Text>
        </Card.Body>
        <Button onClick={() => {
            history.push(`/myplants/edit/${plants.id}`)
            }}>Edit</Button>
            <Button variant="danger" onClick={releasePlant}>Delete</Button>
        </Card>
        </Col>
        </Row>
        </Container>
        </>
        
    )
}


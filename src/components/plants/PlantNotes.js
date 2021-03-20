
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
        <Container>
        <Row>
        <Col>
        <Card style={{ width: '40rem' }}>
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
            <Button onClick={releasePlant}>Delete</Button>
      </Card>
      </Col>
      </Row>
      </Container>
      </>
        
    )
}

{/* <>
        <button onClick={() => {
            history.push(`/myplants`)
            }}>Back to My Plants</button>
        <section className="plant">
            <img src={plants.image} height={300} alt="new"/>
            <h3 className="plant__name">Name: {plants.commonName}</h3>
            <div className="plant__sName">Scientfic name: {plants.scientificName}</div>
            <div className="plant__type">Type: {plants.type}</div>
            <div className="plant__fruit">Fruit: {plants.fruit}</div>
            <div className="plant__flowerColor">Flower Color: {plants.flower}</div>
            <div className="plant__location">Location Found: {plants.location}</div>
            <div className="dateFound">Date Found: {plants.date}</div>
            <button onClick={() => {
            history.push(`/myplants/edit/${plants.id}`)
            }}>Edit</button>
            <button onClick={releasePlant}>Delete</button>
        </section>
        </> */}
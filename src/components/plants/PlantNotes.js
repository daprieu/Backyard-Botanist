
import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { PlantContext } from "./PlantsProvider"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

export const PlantNote = () => {
    
    const styles = {
        cardImage: {
            objectFit: 'cover',
            borderRadius: '1rem',
            height: '25rem'
          },
        text: {
            fontWeight: "bold"
            
        }
        }

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
        <Container className="d-flex justify-content-center flex-wrap p-2 col-example ">
        <Row>
        <Col>
        <Card className="shadow p-3 mb-5 bg-body rounded bg-dark text-white rounded" style={{ width: '50rem'}}>
        <Card.Img variant="top" src={plants.image} style={styles.cardImage}/>
        <Card.Text className="d-flex"><div className="pr-2" style={styles.text}>Native Distributions:</div> {plants.nDist}</Card.Text>
        <Card.Body>
          <Card.Text className="d-flex"><div className="pr-2" style={styles.text}>Scientific name:</div> {plants.scientificName}</Card.Text>
          <Card.Text className="d-flex"><div className="pr-2" style={styles.text}>Common name:</div> {plants.commonName}</Card.Text>
          <Card.Text className="d-flex"><div className="pr-2" style={styles.text}>Type:</div> {plants.type}</Card.Text>
          <Card.Text className="d-flex"><div className="pr-2" style={styles.text}>Fruit:</div> {plants.fruit}</Card.Text>
          <Card.Text className="d-flex"><div className="pr-2" style={styles.text}>Flower:</div> {plants.flower}</Card.Text>
          <Card.Text className="d-flex"><div className="pr-2" style={styles.text}>Location:</div> {plants.location}</Card.Text>
          <Card.Text className="d-flex"><div className="pr-2" style={styles.text}>Date Found:</div> {plants.date}</Card.Text>
        </Card.Body>
        <Card.Body className="d-flex justify-content-around">
            <Button onClick={() => {history.push(`/myplants`)}}>Back to My Plants</Button>
            <Button onClick={() => {history.push(`/myplants/edit/${plants.id}`)}}>Edit</Button>
            <Button variant="danger" onClick={releasePlant}>Delete</Button>
        </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>
        </>
        
    )
}


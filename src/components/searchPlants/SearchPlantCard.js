import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

const styles = {
    cardImage: {
        objectFit: 'cover',
        borderRadius: 25,
        height: '16rem'
      }
    }

    
export const SearchPlantCard = ({plant}) => (
    <Card className="m-2 shadow p-1 bg-body" style={{ width: '18rem', borderRadius: 25 }}>
    { plant.image_url ? <Card.Img variant="top" src={plant.image_url} style={styles.cardImage}/>
    : <Card.Img variant="top" src={"./goot.jpg"} style={styles.cardImage}/>}
    <Card.Body >
    <Card.Text>{ plant.scientific_name }</Card.Text>
    <Card.Text>{ plant.common_name }</Card.Text>
    <Link to={`/search/addplant/${plant.slug}`}><Button variant="primary">
              Add Plant</Button></Link>
    </Card.Body>
    </Card>
)

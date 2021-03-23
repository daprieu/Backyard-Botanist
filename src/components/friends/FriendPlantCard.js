import React from "react"
import Card from 'react-bootstrap/Card';



const styles = {
cardImage: {
    objectFit: 'cover',
    borderRadius: 25,
    height: '20rem'
  }
}

export const FriendPlantCard = ({ plant }) => {
    // passed a destructed obj so we are able to get the data
    

    return (
        
        
    <Card className="m-2" style={{ width: '45rem', borderRadius: 25}}>
        <Card.Body>
        {/* <Card.Title>{plant.name}'s </Card.Title>  */}
        <Card.Img variant="top" src={plant.image} style={styles.cardImage} />
          <Card.Title>{plant.scientificName}</Card.Title>
          <Card.Text>{ plant.commonName }</Card.Text>
          <Card.Text>Location Found: { plant.location }</Card.Text>
        </Card.Body>
      </Card>
      
      
    )
}
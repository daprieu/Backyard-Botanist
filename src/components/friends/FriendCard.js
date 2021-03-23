import React from "react"
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'



// const styles = {
// cardImage: {
//     objectFit: 'cover',
//     borderRadius: 25,
//     height: '16rem'
//   }
// }

export const FriendCard = ({ friend }) => {



    return (

        // <section>
        //     <div>{plant.scientificName}</div>

        // </section>
    <Card style={{ width: '14rem', borderRadius: 25}}>
        {/* <Card.Img variant="top" src={plant.image} style={styles.cardImage} /> */}
        <Card.Body>
        <Card.Title>{friend.user.name} </Card.Title> 
          {/* <Card.Title>{plant.scientificName}</Card.Title>
          <Card.Text>{ plant.commonName }</Card.Text> */}
          <Link to={`/friends/friendplants/${friend.id}`}><Button variant="success">
              View Plants</Button></Link>
        </Card.Body>
      </Card>


    )
} 
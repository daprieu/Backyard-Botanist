import React from "react"
import { Link } from "react-router-dom"
export const PlantCard = ({ plant }) => {
    
    return (
        <section className="plant"><Link to={`/myplants/notes/${plant.id}`}>
            <img src={plant.image} height={200}
      alt="new" />
            <h3 className="plant__name">
      { plant.commonName }
    </h3>
            <div>{plant.scientificName}</div>
        </Link></section>
    )
}
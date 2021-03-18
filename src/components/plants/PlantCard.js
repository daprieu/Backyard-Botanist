import React from "react"
import { Link } from "react-router-dom"
export const PlantCard = ({ plant }) => {
    
    return (
        <section className="plant">
            <img src={plant.image} height={200}
      alt="new" />
            <h3 className="plant__name"><Link to={`/myplants/notes/${plant.id}`}>
      { plant.commonName }
    </Link></h3>
            <div>{plant.scientificName}</div>
        </section>
    )
}
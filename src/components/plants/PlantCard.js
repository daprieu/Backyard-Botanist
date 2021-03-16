import React from "react"

export const PlantCard = ({ plant }) => {
    
    return (
        <section className="plant">
            <h3 className="plant__name">{plant.commonName}</h3>
            <div>{plant.scientificName}</div>
        </section>
    )
}
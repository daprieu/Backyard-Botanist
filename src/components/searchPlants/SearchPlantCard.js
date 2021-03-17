import React from "react"
import { Link } from "react-router-dom"

export const SearchPlantCard = ({plant}) => (
    <section className="quePlant">
        <Link to={`/plants/add/`}>
    <img 
      src={plant.image_url}
      alt="new"
      />
      </Link>
    <h3 className="plant__name">
        { plant.common_name }
    </h3>
    <div className="plant__sName">{ plant.scientific_name }</div>
    </section>

)
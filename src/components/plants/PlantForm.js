import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { SearchPlantsContext } from "../searchPlants/SearchPlantsProvider";
import { PlantContext, PlantProvider } from "./PlantsProvider";


export const PlantForm = () => {
    const { addAPlant } = useContext(PlantContext)
    const {treflePlant, getSPlantsById, setTreflePlant} = useContext(SearchPlantsContext)
    // const [ ] = useState({})
    console.log('treflePlant: ', treflePlant);

    const [plant, setPlant] = useState({
        userId: parseInt(sessionStorage.getItem("app_user_id")),
        image: "",
        commonName: "",
        scientificName: "",
    })
    const { trefleId } = useParams()
    console.log('trefleId: ', trefleId);
    const history = useHistory()

    useEffect(() => {
        getSPlantsById(trefleId)
    }, [])

    const handleSavePlant = () => {

        addAPlant({
        image: treflePlant.image_url,
        commonName: treflePlant.common_name,
        scientificName: treflePlant.scientific_name,
        userId: plant.userId
        })
    }

    return(
        <form className="plantForm">
            <img src={treflePlant.image_url} height={400} alt="new"/>
        <fieldset>
        <div className="form-group">
        <label htmlFor="plantName">Plant Name: </label>
            <input type="text" id="name" required autoFocus className="form-control"
            readOnly={treflePlant.common_name}/>
        </div>
        </fieldset>
        <fieldset>
        <div className="form-group">
        <label htmlFor="plantName">Plant Scientfic Name: </label>
            <input type="text" id="sname" required autoFocus className="form-control"
            readOnly={treflePlant.scientific_name}/>
        </div>
        </fieldset>
        <fieldset>
        <div className="form-group">
        <label htmlFor="plantName">Type: </label>
            <input type="text" id="type" required autoFocus className="form-control"
            value={plant.type}/>
        </div>
        </fieldset>
        <fieldset>
        <div className="form-group">
        <label htmlFor="plantName">Fruit: </label>
            <input type="text" id="fruit" required autoFocus className="form-control"
            value={plant.fruit}/>
        </div>
        </fieldset>
        <fieldset>
        <div className="form-group">
        <label htmlFor="plantName">flower: </label>
            <input type="text" id="flower" required autoFocus className="form-control"
            value={plant.flower}/>
        </div>
        </fieldset>
        <fieldset>
        <div className="form-group">
        <label htmlFor="plantName">location: </label>
            <input type="text" id="location" required autoFocus className="form-control"
            value={plant.location}/>
        </div>
        </fieldset>
        <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date Found: </label>
                    <input type="date" id="dateFound"  required className="form-control" placeholder="Date found" value={plant.date} />
                </div>
            </fieldset> 
        <button className="btn btn-primary" 
        onClick={event => {
            event.preventDefault()
            handleSavePlant()
        }}>
        Post
        </button>
    </form>
    )
}

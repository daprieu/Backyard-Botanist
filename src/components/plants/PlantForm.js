import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { SearchPlantsContext } from "../searchPlants/SearchPlantsProvider";
import { PlantContext, PlantProvider } from "./PlantsProvider";


export const PlantForm = () => {
    const { addAPlant, addPlantNote, getPlants } = useContext(PlantContext)
    const {treflePlant, getSPlantsById } = useContext(SearchPlantsContext)
    // const [ ] = useState({})
    console.log('treflePlant: ', treflePlant);

    const [plant, setPlant] = useState({
        userId: parseInt(sessionStorage.getItem("app_user_id")),
        image: "",
        commonName: "",
        scientificName: "",
        type: "",
        fruit: "",
        flower: "",
        location: "",
        date: ""
    })
    console.log('plant: ', plant);
    
    const { trefleId } = useParams()
    console.log('trefleId: ', trefleId);
    const history = useHistory()

    useEffect(() => {
        getSPlantsById(trefleId)
        
    }, [])
    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
       const newPlant = { ...plant }
       let selectedVal = event.target.value
       
       /* location is an object with properties.
       Set the property to the new value
       using object bracket notation. */
       newPlant[event.target.id] = selectedVal
       // update state
       setPlant(newPlant)
     }

    const handleSavePlant = () => {

        addAPlant({
        image: treflePlant.image_url,
        commonName: treflePlant.common_name,
        scientificName: treflePlant.scientific_name,
        userId: plant.userId,
        type: plant.type,
        fruit: plant.fruit,
        flower: plant.flower,
        location: plant.location,
        date: plant.date
        })
        .then(() => history.push("/myplants"))
    }

    return(
        <form className="plantForm">
            <img src={treflePlant.image_url} height={400} alt="new"/>
        <fieldset>
        <div className="form-group">
        <label htmlFor="plantName">Plant Name: </label>
            <input type="" id="commonName" required autoFocus className="form-control"
            defaultValue={treflePlant.common_name}/>
        </div>
        </fieldset>
        <fieldset>
        <div className="form-group">
        <label htmlFor="plantName">Plant Scientfic Name: </label>
            <input type="text" id="scientificName" onChange={handleControlledInputChange} required autoFocus className="form-control"
            defaultValue={treflePlant.scientific_name}/>
        </div>
        </fieldset>
        <fieldset>
        <div className="form-group">
        <label htmlFor="plantType">Type: </label>
            <input type="text" id="type" onChange={handleControlledInputChange} required autoFocus className="form-control"
            value={plant.type}/>
        </div>
        </fieldset>
        <fieldset>
        <div className="form-group">
        <label htmlFor="plantFruit">Fruit: </label>
            <input type="text" id="fruit" onChange={handleControlledInputChange} required autoFocus className="form-control"
            value={plant.fruit}/>
        </div>
        </fieldset>
        <fieldset>
        <div className="form-group">
        <label htmlFor="plantFlower">flower: </label>
            <input type="text" id="flower" onChange={handleControlledInputChange} required autoFocus className="form-control"
            value={plant.flower}/>
        </div>
        </fieldset>
        <fieldset>
        <div className="form-group">
        <label htmlFor="plantLocation">location: </label>
            <input type="text" id="location" onChange={handleControlledInputChange} required autoFocus className="form-control"
            value={plant.location}/>
        </div>
        </fieldset>
        <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date Found: </label>
                    <input type="date" id="date" onChange={handleControlledInputChange} required className="form-control" placeholder="Date found" value={plant.date} />
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

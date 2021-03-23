import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { SearchPlantsContext } from "../searchPlants/SearchPlantsProvider";
import { PlantContext } from "./PlantsProvider";


export const PlantForm = () => {
        const { addAPlant, updatePlant, getPlantsById } = useContext(PlantContext)
        const {treflePlant, getSPlantsById } = useContext(SearchPlantsContext)
        
        // console.log('treflePlant: ', treflePlant);

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
        // console.log('plant: ', plant);
        
        
        const { trefleId, plantId } = useParams()
        // console.log('plantId: ', plantId);
        // console.log('trefleId: ', trefleId);
        
        const history = useHistory()

        
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
            if (plantId) {
                updatePlant({
                    id: plant.id,
                    userId: plant.userId,
                    image: plant.image,
                    commonName: plant.commonName,
                    scientificName: plant.scientificName,
                    type: plant.type,
                    fruit: plant.fruit,
                    flower: plant.flower,
                    location: plant.location,
                    date: plant.date
                })
            .then(() => history.push(`/myplants/notes/${plant.id}`))
            } else {
                addAPlant({
                    userId: plant.userId,
                    image: treflePlant.image_url,
                    commonName: treflePlant.common_name,
                    scientificName: treflePlant.scientific_name,
                    type: plant.type,
                    fruit: plant.fruit,
                    flower: plant.flower,
                    location: plant.location,
                    date: plant.date
        })
        .then(() => history.push("/myplants"))
    }
    }

    useEffect(() => {
        if (plantId) {
            getPlantsById(plantId)
            .then(plant => {
                setPlant(plant)
            })
        } else { 
            getSPlantsById(trefleId)
        }
    }, [])


    return(
        <section className="d-flex justify-content-center  p-3">
        <form className="plantForm p-3 mb-6 bg-dark text-white rounded" style={{ width: '45rem'}}>
            <h2 className="plantForm__title">{plantId ? "Edit Plant" : "AddPlant"}</h2>
             {plantId ? <img src={plant.image} height={400} alt="new"/> :
             <img src={treflePlant.image_url} height={400} alt="new"/>}
        <fieldset>
        <div className="form-group">
        <label htmlFor="plantName">Plant Name: </label>
            {plantId ? <input type="text" id="commonName" onChange={handleControlledInputChange} required autoFocus className="form-control"
            value={plant.commonName}/> :
            <input type="text" id="commonName" onChange={handleControlledInputChange} required autoFocus className="form-control"
            value={treflePlant.common_name}
            />}
            
        </div>
        </fieldset>
        <fieldset>
        <div className="form-group">
        <label htmlFor="plantName">Plant Scientfic Name: </label>
        {plantId ? <input type="text" id="scientificName" onChange={handleControlledInputChange} required autoFocus className="form-control"
            value={plant.scientificName}/> :
            <input type="text" id="scientificName" onChange={handleControlledInputChange} required autoFocus className="form-control"
            
            value={treflePlant.scientific_name}
            />}
            
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
        {plantId ? "Save" : "AddPlant"}
        </button>
    </form>
    </section>
    )
}

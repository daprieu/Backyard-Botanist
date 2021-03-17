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
        scientificName: ""
    })
    const { trefleId } = useParams()
    console.log('trefleId: ', trefleId);
    const history = useHistory()

    useEffect(() => {
        getSPlantsById(trefleId)
        // .then((res) => {
            
        //     setTreflePlant(res)
        // })
        
    }, [])

    const handleSavePlant = () => {

        addAPlant({
            image: plant.image_url,
            name: treflePlant.common_name,

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
            <input type="text" id="name" required autoFocus className="form-control"
            readOnly={treflePlant.scientific_name}/>
        </div>
        </fieldset>
        <button className="btn btn-primary" >
        Post
        </button>
    </form>
    )
}
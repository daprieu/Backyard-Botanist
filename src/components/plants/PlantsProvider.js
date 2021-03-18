import React, { useState, createContext } from "react"

export const PlantContext = createContext()
//Nothing is stored in the context when it's defined. At this point, 
//it's just an empty warehouse waiting to be filled.

export const PlantProvider = (props) => {
    const [plants, setPlants] = useState([])
    
    // console.log('plants: ', plants);
    
    //useState() hook to define a variable that holds the state 
    //of the component, and a function that updates it.

    const getPlants = () => {
        return fetch(`http://localhost:8088/plants?userId=${(parseInt(sessionStorage.getItem("app_user_id")))}`)
        .then(res => res.json())
        .then(setPlants)
    }

    const getPlantsById = (id) => {
        return fetch(`http://localhost:8088/plants/${id}?_embed=plantnotes`)
        .then(res => res.json())
        
    }


    const addAPlant = (plantObj) => {
        return fetch("http://localhost:8088/plants/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(plantObj)
        })
            .then(() => getPlants(parseInt(sessionStorage.getItem("app_user_id"))))
    }

    return (
        <PlantContext.Provider value={{
            plants, getPlants, getPlantsById, addAPlant
        }}>
            {props.children}
        </PlantContext.Provider>
    )
}
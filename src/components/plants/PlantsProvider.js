import React, { useState, createContext } from "react"

export const PlantContext = createContext()
//Nothing is stored in the context when it's defined. At this point, 
//it's just an empty warehouse waiting to be filled.

export const PlantProvider = (props) => {
    const [plants, setPlants] = useState([])
    console.log('plants: ', plants);
    
    //useState() hook to define a variable that holds the state 
    //of the component, and a function that updates it.

    const getPlants = () => {
        return fetch(`http://localhost:8088/plants?userId=${(parseInt(sessionStorage.getItem("nutshell_user")))}&completed=false`)
        .then(res => res.json())
        .then(setPlants)
    }

    return (
        <PlantContext.Provider value={{
            plants, getPlants
        }}>
            {props.children}
        </PlantContext.Provider>
    )
}
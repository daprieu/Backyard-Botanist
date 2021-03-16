import React, { useContext, useEffect } from "react"
import { PlantCard } from "./PlantCard"

import { PlantContext } from "./PlantsProvider"

export const PlantList = () => {

    const currentUser = sessionStorage.getItem("BB_userName")
    // console.log('currentUser: ', currentUser);

    const { plants, getPlants } = useContext(PlantContext)
    // console.log('userPlants: ', plants);
    //import the context object created in the provider component so that 
    // the Context hook can access the objects it exposes.
    // This state changes when `getFriends()` is invoked below
    
    useEffect(() => {
        
        getPlants()
    }, [])
//   The useEffect hook allows the component to reach out into the world for anything 
//   that cannot be handled during render. In this case, it is the API call for the plants.

    // Use the .map() array method to iterate the array of plants and 
    // generate HTML for each one by invoking the PlantCard component function.
    return (
        <>
        <h3>{currentUser}'s Plants</h3>
        <div className="plants">
            {/* {console.log("friends list render", friends)} */}
            {   
                plants.map(plant => {
                    return <PlantCard key={plant.id} plant={plant} />
                })
            }
        </div>
        </>
    )
}
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
    // This state changes when `getPlants()` is invoked below
    
    useEffect(() => {
        
        getPlants()
    }, [])
    // debugger
    //   The useEffect hook allows the component to reach out into the world for anything 
//   that cannot be handled during render. In this case, it is the API call for the plants.
// Use the .map() array method to iterate the array of plants and 
// generate HTML for each one by invoking the PlantCard component function.
const styles = {
    plantList: {
        color: "#000"
      }
    }

return (
    <>
        <h3 style={styles.plantList} >{currentUser}'s Plants</h3>
        <section  className="container">
            
        <div className="d-flex justify-content-center flex-wrap p-2 col-example">
            
            {   
                plants.map(plant => {
                    return <PlantCard key={plant.id} plant={plant} />
                })
            }
        </div>
        </section>
            
        </>
    )
}
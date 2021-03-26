import React, { useContext, useEffect } from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { PlantCard } from "./PlantCard"
import { PlantContext } from "./PlantsProvider"


export const PlantList = () => {

    

    const { plants, getPlants } = useContext(PlantContext)
    console.log('userPlants: ', plants);
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
        <section  className="container align-middle pb-5">
        <h3 className="pt-3" style={styles.plantList} >Viewing your plants</h3>
        <div className="d-flex justify-content-center flex-wrap p-2 col-example ">
            
            {   
                plants.map(plant => {
                    return <PlantCard key={plant.id} plant={plant} />
                })
            }
        </div>
        {plants.length !== 0 ? "" : <><h4 style={styles.plantList} className="align-middle">It does not look like you have any plants saved.</h4>
        <Button variant="primary"><Link style={styles.plantList} className="nav-link" to="/search">Search for plants</Link></Button></>}
        </section>
            
        </>
    )
}
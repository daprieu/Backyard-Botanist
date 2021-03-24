import React, { useContext, useEffect, useState } from "react"
import { SearchPlantCard } from "./SearchPlantCard"
import { SearchPlantsContext } from "./SearchPlantsProvider"

export const SearchablePlantList = () => {

    const {searchablePlants, getSearchablePlants, searchTerms} = useContext(SearchPlantsContext)
    console.log('searchablePlants: ', searchablePlants);
    // console.log('searchTerms: ', searchTerms);

    const [filteredPlants, setFiltered] = useState([])
    
    

    // the first useEffect takes the fetchcall function and passes the searchterms from the 
    // search bar to it
    //then searchablePlants that has been updated by the getSearchablePlants
    //sets the filteredPlants array with the new information
    // when there are no search terms available the filteredPlants is just set 
    // to and empty array
    useEffect(() => {
        
        if (searchTerms !== "") {
            getSearchablePlants(searchTerms)
            .then(setFiltered(searchablePlants))
        } else {
            setFiltered([])
        }
        }, [searchTerms])


    return (
        <>
        <div className="d-flex justify-content-center flex-wrap p-2 col-example">
            {
                filteredPlants.map(plant => <SearchPlantCard key={plant.id} plant={plant} />)
            }
        </div>
        </>
    )
}

import React, { useContext, useEffect, useState } from "react"
import { SearchPlantCard } from "./SearchPlantCard"
import { SearchPlantsContext } from "./SearchPlantsProvider"

export const SearchablePlantList = () => {

    const {searchablePlants, getSearchablePlants, searchTerms} = useContext(SearchPlantsContext)
    console.log('searchTerms: ', searchTerms);

    const [filteredPlants, setFiltered] = useState([])
    console.log('filteredPlants: ', filteredPlants);
    
    useEffect(() => {
        
        if (searchTerms !== "") {
        getSearchablePlants(searchTerms)
        .then(a => console.log('a: ', a))
        
        
    }
    
    }, [searchTerms])

    useEffect(() => {
        if (searchTerms !== "") {
            const results = searchablePlants
            
            setFiltered(results)
        } else {
            setFiltered(searchablePlants)
        }
    }, [searchTerms, searchablePlants])

    return (
        <>
        <div className="searchedPlants">
            {
                filteredPlants.map(plant => <SearchPlantCard key={plant.id} plant={plant} />)
            }
        </div>
        </>
    )
}
import React, { useContext, useEffect, useState } from "react"
import { SearchPlantCard } from "./SearchPlantCard"
import { SearchPlantsContext } from "./SearchPlantsProvider"

export const SearchablePlantList = () => {

    const {searchablePlants, getSearchablePlants, searchTerms} = useContext(SearchPlantsContext)

    const [filteredPlants, setFiltered] = useState([])
    console.log('filteredPlants: ', filteredPlants);
    
    useEffect(() => {
        getSearchablePlants()
    }, [])

    useEffect(() => {
        if (searchTerms !== "") {
            const query = searchablePlants.filter(plant => plant.scientific_name.includes(searchTerms))
            console.log('query: ', query);
            setFiltered(query)
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
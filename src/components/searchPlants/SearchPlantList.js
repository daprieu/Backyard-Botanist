import React, { useContext, useEffect, useState } from "react"
import { SearchPlantsContext, SearchPlantsProvider } from "./SearchPlantsProvider"

export const SearchablePlantList = () => {

    const {searchablePlants, getSearchablePlants, searchTerms} = useContext(SearchPlantsContext)

    const [filteredPlants, setFiltered] = useState([])
    console.log('filteredPlants: ', filteredPlants);
    
    useEffect(() => {
        getSearchablePlants()
    }, [])

    useEffect(() => {
        if (searchTerms !== "") {
            const query = searchablePlants.filter(plant => plant.name.toLowerCase().includes(searchTerms))
            setFiltered(query)
        } else {
            setFiltered(searchablePlants)
        }
    }, [searchTerms, searchablePlants])

    return (
        <>
        <div className="searchedPlants">
            {
                filteredPlants.map(plant => {
                    
                })
            }
        </div>
        </>
    )
}
import React, { useContext, useEffect, useState } from "react"
import { SearchPlantCard } from "./SearchPlantCard"
import { SearchPlantsContext } from "./SearchPlantsProvider"

export const SearchablePlantList = () => {

    const {searchablePlants} = useContext(SearchPlantsContext)
    // console.log('searchablePlants: ', searchablePlants);
    // console.log('searchTerms: ', searchTerms);

    const [filteredPlants, setFiltered] = useState([])
    
    // the first useEffect takes the fetchcall function and passes the searchterms from the 
    // search bar to it
    //then searchablePlants that has been updated by the getSearchablePlants
    //sets the filteredPlants array with the new information
    // when there are no search terms available the filteredPlants is just set 
    // to and empty array
    useEffect(() => {
                setFiltered(searchablePlants)
        }, [searchablePlants])

        const { searchTerms, setSearchTerms, getSearchablePlants, getPlantsbyFLowerColor } = useContext(SearchPlantsContext)
        // const [filteredPlants, setFiltered] = useState([])
        // const {searchablePlants, getSearchablePlants, searchTerms} = useContext(SearchPlantsContext)
        const handleInputChange = (event) => {
            const plantTerms = event.target.value
            setSearchTerms(plantTerms)
            
        }
        
        const plantSearchByName = () => {
            
           
                getSearchablePlants(searchTerms)
                
            }
        const plantSearchByFlowerColor = () => {
            
                // console.log('searchTerms: ', searchTerms);
                    getPlantsbyFLowerColor(searchTerms)
                    
                }
    // on the dom in the search section when typing in the search bar
    //setSearchTerms grabs the data on keyup and updates the searchterms
        return (
        <>
            <div className="d-flex justify-content-center flex-wrap pl-5 pt-2 col-example ">
            <h4>Search for a plant by name:</h4>
            
            <input type="text"
              className="input--wide"
              id="plantSearchName"
              onChange={handleInputChange}
              placeholder="Search for an plant... " />
              <button className="primary" onClick={e => {
                    e.preventDefault()
                    plantSearchByName()}}>Search Plants</button>
            
            <h4>Or flower Color:</h4>
            
            <input type="text"
              className="input--wide"
              id="plantSearchFC"
              onChange={handleInputChange}
              placeholder="Search for an plant... " />
              <button className="primary" onClick={e => {
                    e.preventDefault()
                    plantSearchByFlowerColor()}}>Search Plants</button>
              </div>
        
        <div className="d-flex justify-content-center flex-wrap p-2 col-example">
            {
                filteredPlants.map(plant => <SearchPlantCard key={plant.id} plant={plant} />)
            }
        </div>
        </>
    )
}

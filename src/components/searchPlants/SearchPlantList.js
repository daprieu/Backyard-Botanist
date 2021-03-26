import React, { useContext, useEffect, useState } from "react"
import { Dropdown } from "react-bootstrap"
import { FlowerColorContext } from "../colorSelect/ColorProvider"
import { SearchPlantCard } from "./SearchPlantCard"
import { SearchPlantsContext } from "./SearchPlantsProvider"


export const SearchablePlantList = () => {


    const [filteredPlants, setFiltered] = useState([])
    console.log('filteredPlants: ', filteredPlants);
    
    // the first useEffect takes the fetchcall function and passes the searchterms from the 
    // search bar to it
    //then searchablePlants that has been updated by the getSearchablePlants
    //sets the filteredPlants array with the new information
    // when there are no search terms available the filteredPlants is just set 
    // to and empty array
    
    const { searchTerms, setSearchTerms, searchablePlants, getSearchablePlants, getPlantsbyFlowerColor } = useContext(SearchPlantsContext)
    console.log('searchablePlants: ', searchablePlants);
    console.log('searchTerms: ', searchTerms);
    const { colors, getFlowerColors } = useContext(FlowerColorContext)
    console.log('colors: ', colors);
    // const [filteredPlants, setFiltered] = useState([])
    const handleInputChange = (event) => {
        
        
        const plantTerms = event.target.value
        setSearchTerms(plantTerms)
    }
    
    const plantSearchByName = () => {
        if (searchTerms === ""){
            alert("Please enter a search term")
        } else {
        getSearchablePlants(searchTerms)}
    }
    useEffect(() => {
        getFlowerColors()
        
            .then(setFiltered(searchablePlants))
        }, [searchablePlants])
        
    // on the dom in the search section when typing in the search bar
    //setSearchTerms grabs the data on keyup and updates the searchterms
        return (
        <>
        <section className="container-xxl pb-5 mb-5">
            <div className="d-flex justify-content-center flex-wrap mt-2 col-example ">
            <h4 className="pr-2 ">Search for a plant by name:</h4>

            <form>
            <input 
                type="text"
                style={{ height: '2.3rem' }}
                className="input--wide "
                name="plantSearchName"
                onChange={handleInputChange}
                placeholder="Search for an plant... "
                />
                <button className="primary" style={{ height: '2.3rem' }} onClick={e => {
                    e.preventDefault()
                    plantSearchByName()}}>Search Plants</button>
            </form>

            <h4 className="pr-2 pl-2">Or</h4>{"  "}
            <Dropdown>
            <Dropdown.Toggle variant="warning" id="dropdown-basic">
            Flower Color
            </Dropdown.Toggle>
            <Dropdown.Menu>
            {colors.map (c => <Dropdown.Item key={c.color} eventKey={c.color} onSelect={e => {
                    getPlantsbyFlowerColor(e.toLowerCase())}} >{c.color}</Dropdown.Item>)}
            </Dropdown.Menu>
            </Dropdown>
            
            
              </div> 
        
        <div className="d-flex justify-content-center flex-wrap p-2 col-example">
            {
                filteredPlants.map(plant => <SearchPlantCard key={plant.id} plant={plant} />)
            }
        </div>
        </section>
        </>
    )
}

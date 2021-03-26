import React, { useState, createContext } from "react"
import { trefleAPI } from "../../Settings"

export const SearchPlantsContext = createContext()

export const SearchPlantsProvider = (props) => {
    const [searchablePlants, setSearchablePlants] = useState([])
    const [treflePlant, setTreflePlant] = useState([])
    const [ searchTerms, setSearchTerms ] = useState("")

    const getSearchablePlants = (plantName) => {
        
        return fetch(`https://powerful-plateau-15272.herokuapp.com/${trefleAPI.baseURL}${trefleAPI.apiKey}&q=${plantName}`)
        .then(res => res.json())
        .then(data => setSearchablePlants(data.data))
        
    }
    const getSPlantsById =  (id) => {
        return fetch(`https://powerful-plateau-15272.herokuapp.com/https://trefle.io/api/v1/plants/${id}?token=${trefleAPI.apiKey}`)
        .then(res => res.json())
        .then(data => setTreflePlant(data.data))
    }
    const getPlantsbyFlowerColor = (flowerColor) => {
        console.log('flowerColor: ', flowerColor);
        return fetch(`https://powerful-plateau-15272.herokuapp.com/https://trefle.io/api/v1/species?filter%5Bflower_color%5D=${flowerColor}&token=${trefleAPI.apiKey}`)
        .then(res => res.json())
        .then(data => setSearchablePlants(data.data))
    }

    return (
        <SearchPlantsContext.Provider value={{
            searchablePlants, setSearchablePlants, searchTerms, setSearchTerms, getSearchablePlants, 
            getSPlantsById, treflePlant, getPlantsbyFlowerColor
        }}>
            {props.children}
        </SearchPlantsContext.Provider>
    )
}
// https://trefle.io/api/v1/species?filter%5Bflower_color%5D=blue&token=

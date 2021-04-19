import React, { useState, createContext } from "react"


export const SearchPlantsContext = createContext()

export const SearchPlantsProvider = (props) => {
    const [searchablePlants, setSearchablePlants] = useState([])
    const [treflePlant, setTreflePlant] = useState([])
    const [ searchTerms, setSearchTerms ] = useState("")
    const url = process.env.REACT_APP_BASEURL 
    const key = process.env.REACT_APP_APIKey

    const getSearchablePlants = (plantName) => {
        
        return fetch(`https://powerful-plateau-15272.herokuapp.com/${url}${key}&q=${plantName}`)
        .then(res => res.json())
        .then(data => setSearchablePlants(data.data))
        
    }
    const getSPlantsById =  (slug) => {
        return fetch(`https://powerful-plateau-15272.herokuapp.com/https://trefle.io/api/v1/species/${slug}?token=${key}`)
        .then(res => res.json())
        .then(data => setTreflePlant(data.data))
    }
    const getPlantsbyFlowerColor = (flowerColor) => {
        // console.log('flowerColor: ', flowerColor);
        return fetch(`https://powerful-plateau-15272.herokuapp.com/https://trefle.io/api/v1/species?filter%5Bflower_color%5D=${flowerColor}&token=${key}`)
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
//https://trefle.io/api/v1/plants/
// https://trefle.io/api/v1/species?filter%5Bflower_color%5D=blue&token=
// https://trefle.io/api/v1/species/quercus-rotundifolia?

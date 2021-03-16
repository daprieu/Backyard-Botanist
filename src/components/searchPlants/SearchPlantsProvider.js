import React, { useState, createContext } from "react"
import { trefleAPI } from "../../Settings"

export const SearchPlantsContext = createContext()

export const SearchPlantsProvider = (props) => {
    const [searchablePlants, setSearchablePlants] = useState("")
    const [ searchTerms, setSearchTerms ] = useState("")

    const getSearchablePlants = () => {
        return fetch(`${trefleAPI.baseURL}${trefleAPI.apiKey}`)
        .then(res => res.json())
        .then(setSearchablePlants)
    }

    return (
        <SearchPlantsContext.Provider value={{
            searchablePlants, setSearchablePlants, searchTerms, setSearchTerms, getSearchablePlants
        }}>
            {props.children}
        </SearchPlantsContext.Provider>
    )
}
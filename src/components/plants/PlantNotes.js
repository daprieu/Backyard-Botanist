import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import { PlantContext } from "./PlantsProvider"

export const PlantNote = () => {

    const {getPlantById} = useContext(PlantContext)
    const [plants, setPlants] = useState({})
    // console.log('plants: ', plants);

    const {plantId} = useParams()
    // console.log('plantId: ', plantId);
    // useParams from react-router-dom allows the app to read a parameter from the URL.
    
    useEffect(() => {
        getPlantById(plantId)
        .then((res) => {
            
            setPlants(res)
        })
        
    }, [])

    const timeConverter = (UNIX_timestamp) => {
        var dateVar = new Date(UNIX_timestamp * 1000).toLocaleDateString("en-US") 
        const time = `${dateVar}`
        return time;
    }

    return (
        <section className="plant">
            <h3 className="plant__name">Name: {plants.commonName}</h3>
            <div className="plant__sName">Scientfic name: {plants.scientificName}</div>
            <div className="plant__type">Type: {plants.plantnotes?.type}</div>
            <div className="plant__fruit">Fruit: {plants.plantnotes?.fruit}</div>
            <div className="plant__flowerColor">Flower Color: {plants.plantnotes?.flowerColor}</div>
            <div className="plant__location">Location Found: {plants.plantnotes?.location}</div>
            <div className="dateFound">Date Found: {timeConverter(plants.plantnotes?.date)}</div>
        </section>
    )
}
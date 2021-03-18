import React from "react"
import { Route } from "react-router-dom"
import { PlantForm } from "./plants/PlantForm"
import { PlantList } from "./plants/PlantList"
import { PlantNote } from "./plants/PlantNotes"
import { PlantProvider } from "./plants/PlantsProvider"
import { SearchablePlantList } from "./searchPlants/SearchPlantList"
import { PlantSearch } from "./searchPlants/SearchPlants"
import { SearchPlantsProvider } from "./searchPlants/SearchPlantsProvider"

export const AppViews = () => {
    return (
        <>
        <PlantProvider>
        <SearchPlantsProvider>
            <Route exact path="/myplants">
                <PlantList />
            </Route>
            <Route exact path="/myplants/notes/:plantId(\d+)">
                <PlantNote />
            </Route>
            <Route exact path="/search">
                <PlantSearch />
                <SearchablePlantList />
            </Route>
            <Route exact path="/search/addplant/:trefleId(\d+)">
                <PlantForm />
            </Route>
        </SearchPlantsProvider>
        </PlantProvider>
        </>
    )
}
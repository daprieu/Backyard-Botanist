import React from "react"
import { Route } from "react-router-dom"
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
            <Route exact path="/myplants">
                <PlantList />
            </Route>
            <Route exact path="/myplants/notes/:plantId(\d+)">
                <PlantNote />
            </Route>
        </PlantProvider>
        <SearchPlantsProvider>
            <Route exact path="/search">
                <PlantSearch />
                <SearchablePlantList />
            </Route>
        </SearchPlantsProvider>
        </>
    )
}
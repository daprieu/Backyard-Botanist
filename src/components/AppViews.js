import React from "react"
import { Route } from "react-router-dom"
import { FriendList } from "./friends/FriendList"


import { FriendProvider } from "./friends/FriendProvider"
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
            <Route exact path="/myplants/edit/:plantId(\d+)">
                <PlantForm />
            </Route>
        
        
        
        <FriendProvider>
            <Route exact path="/friends">
                <FriendList />
            </Route>
        </FriendProvider>
        </SearchPlantsProvider>
        </PlantProvider>
        </>
    )
}
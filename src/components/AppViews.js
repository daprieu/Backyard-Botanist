import React from "react"
import { Route } from "react-router-dom"
import { PlantList } from "./plants/PlantList"
import { PlantProvider } from "./plants/PlantsProvider"

export const AppViews = () => {
    return (
        <>
            <Route exact path="/myplants">
                <PlantProvider>
                    <PlantList />
                </PlantProvider>
            </Route>
        </>
    )
}
import React from "react"
import { Route } from "react-router-dom"
import { PlantProvider } from "./plants/PlantsProvider"

export const AppViews = () => {
    return (
        <>
            <Route exact path="/">
                <PlantProvider>
                    
                </PlantProvider>
            </Route>
        </>
    )
}
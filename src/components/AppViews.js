import React from "react"
import { Route } from "react-router-dom"
import { FlowerColorProvider } from "./colorSelect/ColorProvider"
import { FriendFinder } from "./friends/FriendFinder"
import { FriendList } from "./friends/FriendList"
import { FriendPlantList } from "./friends/FriendPlantList"
import { FriendProvider } from "./friends/FriendProvider"
import { PlantForm } from "./plants/PlantForm"
import { PlantList } from "./plants/PlantList"
import { PlantNote } from "./plants/PlantNotes"
import { PlantProvider } from "./plants/PlantsProvider"
import { SearchablePlantList } from "./searchPlants/SearchPlantList"
import { PlantSearch } from "./searchPlants/SearchPlants"
import { SearchPlantsProvider } from "./searchPlants/SearchPlantsProvider"
import { UserList } from "./users/UserList"
import { UserProvider } from "./users/UserProvider"



export const AppViews = () => {
    return (
        <>
        <PlantProvider>
        <FlowerColorProvider>
        <SearchPlantsProvider>

            <Route exact path="/myplants">
                <PlantList />
            </Route>

            <Route exact path="/myplants/notes/:plantId(\d+)">
                <PlantNote />
            </Route>

            <Route exact path="/search">
                {/* <PlantSearch /> */}
                <SearchablePlantList />
            </Route>

            <Route exact path="/search/addplant/:trefleId">
                <PlantForm />
            </Route>

            <Route exact path="/myplants/edit/:plantId(\d+)">
                <PlantForm />
            </Route>

        <FriendProvider>

            <Route exact path="/friends">
                <FriendList />
            </Route>

            <Route exact path="/friends/friendplants/:friendId(\d+)">
                <FriendPlantList />
            </Route>
        <UserProvider>
            <Route exact path="/friends/search">
                <FriendFinder />
                <UserList />
            </Route>
        </UserProvider>
        </FriendProvider>
        </SearchPlantsProvider>
        </FlowerColorProvider>
        </PlantProvider>
        </>
    )
}
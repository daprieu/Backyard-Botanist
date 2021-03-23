import React, { useContext, useEffect } from "react"

import { FriendPlantCard } from "./FriendPlantCard"
import { FriendPlantContext } from "./FriendProvider"

export const FriendPlantList = () => {
// useContext to get context from the friendProvider friendPlantContext
    const { plants, getFriendPlants } = useContext(FriendPlantContext)
    console.log('plants: ', plants);

    //gets Friend plants and current user plants fetch call and sets plants
useEffect(() => {
    getFriendPlants()
    
}, [])
    // since the user plants come with the fetch call I filtered out plants specific to user id
    const friendPlants = plants.filter(p => p.userId !== parseInt(sessionStorage.getItem("app_user_id")))
    console.log('friendPlants: ', friendPlants);
    const currentUser = sessionStorage.getItem("BB_userName")
return (
    <>
    <h3>{currentUser}'s friends plants</h3>
    <section  className="d-flex justify-content-center">     
    <div className="d-flex flex-column justify-content-center p-2">
        {   
            friendPlants.map(plant => {
                return <FriendPlantCard key={plant.id} plant={plant}/>
            })
        }
    </div>
    </section>
        
    </>
)

}
import React, { useContext, useEffect } from "react"
import { UserContext } from "../users/UserProvider"
import { FriendPlantCard } from "./FriendPlantCard"
import { FriendPlantContext } from "./FriendProvider"

export const FriendPlantList = () => {

    const { plants, getFriendPlants } = useContext(FriendPlantContext)
    console.log('plants: ', plants);

useEffect(() => {
    getFriendPlants()
    
}, [])
    const friendPlants = plants.filter(p => p.userId !== parseInt(sessionStorage.getItem("app_user_id")))
    console.log('friendPlants: ', friendPlants);

return (
    <>
    {/* <h3>{currentUser}'s Friends</h3> */}
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
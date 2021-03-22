import React, { useContext, useEffect } from "react"

import { SearchPlantsContext } from "../searchPlants/SearchPlantsProvider"
import { FriendPlantContext } from "./FriendProvider"
import { FriendCard } from './FriendCard'
import { PlantContext } from "../plants/PlantsProvider"

export const FriendList = () => {
    
    

    const currentUser = sessionStorage.getItem("BB_userName")
    // console.log('currentUser: ', currentUser);
    
    const { plants, getAllPlants } = useContext(PlantContext)
    console.log('plants: ', plants);
    // const { plants, getPlants } = useContext(SearchPlantsContext)
    // console.log('friendPlants: ', plants);
    //import the context object created in the provider component so that 
    // the Context hook can access the objects it exposes.
    // This state changes when `getFriends()` is invoked below

    
    

    const { friends, getFriends } = useContext(FriendPlantContext)
    console.log('friends: ', friends);
    
    
    useEffect(() => {
        getFriends()
        
        
        
    }, [])
        
    // let friendIds = []
    // friendIds = userFriends.userId
    // console.log('friendIds: ', friendIds);
    // const friendPlants = plants.filter(plant => (userFriends.userId).includes(plant))
    
    // debugger
    // console.log('friendPlants: ', friendPlants);
//   The useEffect hook allows the component to reach out into the world for anything 
//   that cannot be handled during render. In this case, it is the API call for the plants.

    // Use the .map() array method to iterate the array of plants and 
    // generate HTML for each one by invoking the PlantCard component function.
    return (
        <>
        <h3>{currentUser}'s Friends</h3>
        <section  className="container">
            
        <div className="d-flex justify-content-center flex-wrap p-2 col-example">
            
            
            {   
                friends.map(friend => {
                    
                    return <FriendCard key={friend.id} friend={friend}/>
                })
            }
        </div>
        </section>
            
        </>
    )
}
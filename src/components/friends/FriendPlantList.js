import React, { useContext, useEffect } from "react"
import { useHistory, useParams } from "react-router"
import { FriendPlantCard } from "./FriendPlantCard"
import { FriendContext } from "./FriendProvider"
import Button from 'react-bootstrap/Button'


export const FriendPlantList = () => {
// // useContext to get context from the friendProvider friendPlantContext
    const { friendPlants, getPlantsByFriendId } = useContext(FriendContext)
   

const {friendId} = useParams()
//     //gets Friend plants and current user plants fetch call and sets plants
useEffect(() => {
    getPlantsByFriendId(friendId)
    
}, [])

let fPlantArr = friendPlants.plants
// console.log('fPlantArr: ', fPlantArr);

const history = useHistory()

return (
    <>
     <h3>You are viewing {friendPlants.name}'s plants</h3> 
     <Button onClick={() => {
            history.push(`/friends`)
            }}>Back to friend list</Button>
            
     <section  className="d-flex  justify-content-center">     
     <div className="d-flex flex-column  justify-content-center p-2">
       {  
             fPlantArr?.map(plant => {
                 return <FriendPlantCard key={plant.id} plant={plant}/>
             })
         }
     </div>
     </section>
        
    </>
 )

}
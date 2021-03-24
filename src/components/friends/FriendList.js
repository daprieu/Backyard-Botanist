import React, { useContext, useEffect } from "react"
import { FriendContext } from "./FriendProvider"
import { FriendCard } from './FriendCard'

export const FriendList = () => {

const { friends, getFriends } = useContext(FriendContext)
// console.log('friends: ', friends);

useEffect(() => {
    getFriends()
}, [])

return (
    <>
    <h3>Your friends list</h3>
    <section  className="d-flex justify-content-center">

    <div className="d-flex flex-column justify-content-center p-2">

        {   
            friends.map(friend => {
                return <FriendCard key={friend.id} friend={friend}/>
            })
        }
    </div>
    </section>
    </>
)}
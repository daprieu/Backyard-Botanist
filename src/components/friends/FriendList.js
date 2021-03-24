import React, { useContext, useEffect } from "react"
import { FriendContext } from "./FriendProvider"
import { FriendCard } from './FriendCard'
import { Link } from 'react-router-dom'

export const FriendList = () => {

const { friends, getFriends } = useContext(FriendContext)
// console.log('friends: ', friends);

useEffect(() => {
    getFriends()
}, [])

return (
    <>
    <Link to={`/friends/search`}>
        <button>Add a Friend</button>
        </Link>
    <section  className="d-flex flex-cloumn justify-content-center">
    <h3 className="p-3">Your friends list:</h3>
    

    <div className="d-flex flex-column justify-content-center p-2 col-example">

        {   
            friends.map(friend => {
                return <FriendCard key={friend.id} friend={friend}/>
            })
        }
    </div>
    </section>
    </>
)}
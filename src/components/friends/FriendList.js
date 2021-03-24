import React, { useContext, useEffect } from "react"
import { FriendContext } from "./FriendProvider"
import { FriendCard } from './FriendCard'
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap"

export const FriendList = () => {

const { friends, getFriends } = useContext(FriendContext)
// console.log('friends: ', friends);

useEffect(() => {
    getFriends()
}, [])

return (
    <>
    
    <section  className="d-flex flex-cloumn justify-content-center">
    <h3 className="p-3">Your friends list:</h3>
    

    <div className="d-flex flex-column justify-content-center p-2 col-example">

        {   
            friends.map(friend => {
                return <FriendCard key={friend.id} friend={friend}/>
            })
        }
    </div>
    <h3 className="p-3">Or:</h3>
        <Link className="pt-3" to={`/friends/search`}>
        <Button>Add a Friend</Button>
        </Link>
    </section>
    </>
)}
import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

export const NavBar = (props) => {
    return (
        <nav>

        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
            <Link className="nav-link" to="/myplants">My Plants</Link>
            </li>
            <li className="nav-item" role="presentation">
            <Link className="nav-link" to="/search">Search</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/friends">Friends</Link>
            </li>
            <li>
            <Link className="nav-link" to="/">Log Out</Link>    
            </li>
        </ul>
        </nav>
    )
}
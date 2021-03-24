import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"


export const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Backyard Botanist</Navbar.Brand>
        <Nav className="mr-auto">
            <Link className="nav-link" to="/myplants">My Plants</Link>
            <Link className="nav-link" to="/search">Search</Link>
            <Link className="nav-link" to="/friends">Friends</Link>
        </Nav>
        <Nav>
            <Link className="nav-link" to="/logout">Log Out</Link>    
        </Nav>
        </Navbar>
    )
}
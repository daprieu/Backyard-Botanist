import React, { useState } from "react"
import { Nav, Navbar, Image, Dropdown, FormControl } from "react-bootstrap"
import { Link } from "react-router-dom"


export const NavBar = () => {
    const currentUser = sessionStorage.getItem("BB_userName")
    // console.log('currentUser: ', currentUser);
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
          href=""
          ref={ref}
          
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        >
          {children}
          {/* &#x25bc; */}
        </a>
      ));
      
      // forwardRef again here!
      // Dropdown needs access to the DOM of the Menu to measure it
      const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
          const [value, setValue] = useState("");
      
          return (
            <div
              ref={ref}
              style={style}
              className={className}
              aria-labelledby={labeledBy}
            >
              <ul className="list-unstyled">
                {React.Children.toArray(children).filter(
                  (child) =>
                    !value || child.props.children.toLowerCase().startsWith(value),
                )}
              </ul>
            </div>
          );
        },
      );
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
        
        <Navbar.Brand>
        <Image
        src="./BackyardBotanistLogo.png"
        width="28"
        height="32"
        className="d-inline-block align-top"
        alt="Backyard Botanist logo"
        />{" "}
        Backyard Botanist
        </Navbar.Brand>
        <Nav className="mr-auto">
            <Link className="nav-link" to="/myplants">My Plants</Link>
            <Link className="nav-link" to="/search">Search</Link>
            <Link className="nav-link" to="/friends">Friends</Link>
        </Nav>
        <Nav>
        <Dropdown>
        <Navbar.Text>
        Signed in as: <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        {currentUser}
        </Dropdown.Toggle>
        </Navbar.Text>
        <Dropdown.Menu as={CustomMenu}>
        <Dropdown.Item eventKey="1"><Link className="" style={{color: "#000"}} to="/logout">Log Out</Link></Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </Nav>
        </Navbar>
    )
}
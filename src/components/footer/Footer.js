import React, { useState } from "react"
import { Nav, Navbar, Image, Dropdown, FormControl } from "react-bootstrap"
import { Link } from "react-router-dom"


export const Footer = () => {

return (
<>
<Navbar className="fixed-bottom" bg="dark" variant="dark">
<Nav className="d-flex justify-content-center">
    <Navbar.Text>Checkout my GitHub:
    </Navbar.Text>
    <Nav.Item>
        <Nav.Link href="https://github.com/daprieu">@daprieu</Nav.Link>
    </Nav.Item>
    {/* <Nav.Item>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
    <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
</Nav.Item> */}
  </Nav>
  </Navbar>
  </>
)
}
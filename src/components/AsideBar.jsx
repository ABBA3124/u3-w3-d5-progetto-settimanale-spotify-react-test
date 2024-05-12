import logospotify from "../assets/logo/logo.png"
import { Container, Nav, Navbar, Col, Image, NavbarToggle, InputGroup, Form, Button } from "react-bootstrap"
import React, { useState } from "react"
import "../App.css"

const AsideBar = ({ onSearch }) => {
  const [query, setQuery] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <Col sm={2}>
      <Navbar expand="md" className="fixed-left justify-content-between" id="sidebar">
        <Container className="flex-column align-items-start">
          <Nav.Link className="navbar-brand" href="#home">
            <Image src={logospotify} alt="logo spotify" width="131" height="40" />
          </Nav.Link>
          <NavbarToggle
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav>
              <ul>
                <li>
                  <Nav.Link className=" d-flex align-items-center" href="#Home">
                    <i className="bi bi-house-door-fill"></i>&nbsp; Home
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="d-flex align-items-center" href="#">
                    <i className="bi bi-book-fill"></i>&nbsp; Your Library
                  </Nav.Link>
                </li>
                <li>
                  <InputGroup className="mt-3" onSubmit={handleSearch}>
                    <Form.Control
                      placeholder="Search"
                      aria-label="Search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                    <Button variant="outline-secondary" className="btn-sm h-100" onClick={handleSearch}>
                      GO
                    </Button>
                  </InputGroup>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="nav-btn">
          <button variant="" className=" signup-btn">
            Sign Up
          </button>
          <button variant="" className=" login-btn">
            Login
          </button>
          <Nav.Link href="#Cookie Policy">Cookie Policy</Nav.Link> | <Nav.Link href="#Privacy"> Privacy</Nav.Link>
        </div>
      </Navbar>
    </Col>
  )
}

export default AsideBar

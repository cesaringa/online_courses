import React, { Component } from 'react'
import {Navbar, Container,Nav, NavDropdown, Form, FormControl,Button} from 'react-bootstrap'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {Home} from './Home';
import {English} from './English';
import {German} from './German';
import {Spanish} from './Spanish';

export default class NavbarComp extends Component {
  render() {
    return (
        <BrowserRouter> 
      <div>
          <Navbar bg="dark" variant={"dark"} expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Online courses</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link as={Link} to="/home" href="#action1">Home</Nav.Link>
                    {/* <Nav.Link as={Link} to="/About" href="#action2">Link</Nav.Link> */}
                    <NavDropdown title="Courses" id="navbarScrollingDropdown">
                        <NavDropdown.Item as={Link} to="/english" >English course</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/german" >German course</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/spanish" >Spanish course</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                    </NavDropdown>
                    {/* <Nav.Link href="#" disabled>
                    Link
                    </Nav.Link> */}
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </div>

      <div>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                   
                <Route path="/english" element={<English/>}/>
                <Route path="/german" element={<German/>}/>
                <Route path="/spanish" element={<Spanish/>}/>
            </Routes>           
        </div>
      </BrowserRouter>
    )
  }
}

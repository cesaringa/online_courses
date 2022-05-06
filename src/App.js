import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import './App.css';
import { client } from './client';
// import Posts from './components/Posts'
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavbarComp from './components/NavbarComp'
import {Navbar, Container,Nav, NavDropdown, Form, FormControl,Button} from 'react-bootstrap'
import English from './components/English.js';
import Spanish from './components/Spanish.js';
import German from './components/German.js';
import Italian from './components/Italian';
import French from './components/French';
import NewPosts from './components/NewPost';
import myFooter from './myFooter';

import { Card } from 'react-bootstrap';

export default function App (){
  
  const [articles, setArticles] = useState([])

  useEffect(() => {
    client.getEntries({
    })
    .then((response) => {
      setArticles(response.items)
      console.log("Response",response.items)
    })
    .catch(console.error)
  }, [])

    return (
      <div className="App">
        
        <div className='container'>
          <header>
            <div className='wrapper'>
              {/* <span>React and Contentful</span> */}
              {/* <NavbarComp/> */}
              <Navbar bg="dark" variant={"dark"} expand="lg">
            <Container fluid>
                <Navbar.Brand as={Link} to="/" href="home">Language courses</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link as={Link} to="/" href="home">Home</Nav.Link>
                    {/* <Nav.Link as={Link} to="/About" href="#action2">Link</Nav.Link> */}
                    <NavDropdown title="Courses" id="navbarScrollingDropdown">
                        <NavDropdown.Item as={Link} to="/english" >English course</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/german" >German course</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/spanish" >Spanish course</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/italian" >Italian course</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/french" >French course</NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                        {/* <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item> */}
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
          </header>

          <main>
            <div className='wrapper'>
              <Routes>
                <Route path="/" element={<NewPosts posts={articles} />} />
                <Route path="/english" element={<English />}/>
                <Route path="/german" element={<German />}/>
                <Route path="/spanish" element={<Spanish />}/>
                <Route path="/italian" element={<Italian />}/>
                <Route path="/french" element={<French />}/>
              </Routes>
            </div>
            <div>
 
            </div>
          </main>

          <footer>
          <myFooter/> 
          </footer>

        </div>
      </div>
    );
  }




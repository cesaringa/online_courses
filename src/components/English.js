import React, { useState, useEffect } from 'react'
import { client } from "../client"
import { Card, ListGroup, ListGroupItem, Badge, Form, Row,Col, Button, CardGroup, Placeholder } from 'react-bootstrap'
import Calendar from "../images/calendar3.jpg"
import Location from "../images/location.jpg"
import Cost from "../images/cost2.jpg"
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

export default function English() {

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

  console.log("ARTICLES", articles)
  
  const englishArticles = articles.filter(article => article.fields.name.includes("English"))

  const englishArticlesList = englishArticles.map((article, index) =>
    <div className='post' key={index}>
      <h2 className='title'>{article.fields.name}</h2>
      {article.fields.image&&<img className='image' src={article.fields.image.fields.file.url} alt={article.fields.name} title={article.fields.name} />}
      {/* <section>{article.fields.description}</section> */}

      <Card className="text-center">
                  {/* <Card.Header>Learn {article.fields.name}</Card.Header> */}
                  <Card.Body>
                    {/* <Card.Title>Learn {article.fields.name}</Card.Title> */}
                    <Card.Text>
                    {/* Check the suitable option for you in our platform  */}
                      <>
                        {[
                        
                          'Light',
                   
                        ].map((variant) => (
                          <Card
                            bg={variant.toLowerCase()}
                            key={variant}
                            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                            style={{ width: '100%' }}
                            className="mb-2"
                          >
                            {/* <Card.Header>Header</Card.Header> */}
                            <Card.Body>
                              <Card.Title>About the {article.fields.name} course </Card.Title>
                              <Card.Text>
                              {article.fields.description}
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        ))}
                      </>

                    </Card.Text>
                    {/* <Button href={article.fields.path} variant="primary">More information</Button> */}
                    {/* <>
                      <Button href={article.fields.path} variant="danger">More Information</Button> 
                    </> */}
                  </Card.Body>
                  {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
                </Card>

                <Routes>
                    <Route path={article.fields.path} />
                 </Routes>

      <CardGroup>
        <Card>
          <Card.Img variant="top" src={Calendar} />
          <Card.Body>
            <Card.Title>When?</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 05.05.22</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={Location} />
          <Card.Body>
            <Card.Title>Where?</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 05.05.22</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={Cost} />
          <Card.Body>
            <Card.Title>Prices?</Card.Title>
            <Card.Text>
                <b>Preis pro Woche:</b><br></br>
                  100 EUR — 1 bis 4 Wochen<br></br>
                  90 EUR — 5 bis 11 Wochen<br></br>
                  80 EUR — 12 bis 19 Wochen<br></br>
                  75 EUR — 20 bis 39 Wochen<br></br>
                  70 EUR — ab 40 Wochen
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 05.05.22</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      
     <div>
       <br></br>
     </div>

      <div>
        <ListGroup>
      
          {/* <ListGroup.Item variant="light"></ListGroup.Item> */}
            <h2><Badge bg="primary">Contact us</Badge></h2>
            {/* <Badge bg="success">Success</Badge>
            <Badge bg="warning">Success</Badge>      */}
          </ListGroup>
      </div>

      <Form>
        <Row className="mb-3">

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name and Lastname</Form.Label>
            <Form.Control type="email" placeholder="Name and lastname" />
          </Form.Group>

          

          {/* <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group> */}
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          
        </Row> 
       
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control type="email" placeholder="Address" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>City</Form.Label>
            <Form.Control type="city" placeholder="City" />
          </Form.Group>
        </Row>
        {/* <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group> */}

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
            
          </Form.Group>

          {/* <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group> */}

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>
        {/* <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )

  // console.log("EnglishArticles", englishArticles)

  // console.log("HERE", articles[0].fields.name)
  
  return (
    <div>
      {englishArticlesList}
    </div>
  )
}

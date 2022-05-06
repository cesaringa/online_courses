import { Card, Button } from "react-bootstrap"
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

export default function NewPosts({posts}) {

    console.log("POSTS", posts)

    return (
      <div>
          {posts.map((article, index)=>
            <div className='post' key={article.fields.name}>
                <h2 className='title'>{article.fields.name}</h2>
                {article.fields.image&&<img className='image' src={article.fields.image.fields.file.url} alt={article.fields.name} title={article.fields.name} />}

                <Card className="text-center">
                  {/* <Card.Header>Learn {article.fields.name}</Card.Header> */}
                  <Card.Body>
                    {/* <Card.Title>Learn {article.fields.name}</Card.Title> */}
                    <Card.Text>
                    {/* Check the suitable option for you in our platform  */}
                      <>
                        {[
                        
                          'Secondary',
                   
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
                              <Card.Title>Learn {article.fields.name} </Card.Title>
                              <Card.Text>
                                Check the prices, where, when and what course suits you best
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        ))}
                      </>

                    </Card.Text>
                    {/* <Button href={article.fields.path} variant="primary">More information</Button> */}
                    <>
                      <Button href={article.fields.path} variant="danger">More Information</Button> 
                    </>
                  </Card.Body>
                  {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
                </Card>

                <Routes>
                    <Route path={article.fields.path} />

                 </Routes>
            </div>
            
          )}
      </div>
    )
  }
import React from 'react';
import './App.css';
import { client } from './client';
import Posts from './components/Posts'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp'

class App extends React.Component {
  state = {
    articles: []
  }

  componentDidMount() {
    client.getEntries()
    .then((response) => {
        console.log(response)
        this.setState({
          articles: response.items
        })
    })
    .catch(console.error)
  }

  render () {
    return (
      <div className="App">
        
        <div className='container'>
          <header>
            <div className='wrapper'>
              {/* <span>React and Contentful</span> */}
              <NavbarComp/>
            </div>
          </header>

          <main>
            <div className='wrapper'>
                <Posts posts = {this.state.articles} />
            </div>
          </main>

        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './Login';
import Home from './Home';
import About from './About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div className='App'>
           <Home/>
            <Route path='/login' component={Login}/>
            <Route path='/about' component={About}/>
        </div>

      </BrowserRouter>
    
    )
  }
}

export default App

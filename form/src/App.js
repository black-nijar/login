import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Login';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div className='App'>
           <Home/>
            <Route path='/login' component={Login}/>
        </div>

      </BrowserRouter>
    
    )
  }
}

export default App

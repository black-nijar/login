import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                <nav className='nav-wrapper blue darken-2'>
                    <div className='container'>
                    <div className='brand-logo'>
                        <Link to='/'>Home</Link>
                    </div>
                        <ul className='right'>
                          <Link to='/login'>Login</Link>
                        </ul>
                       
                    </div>
                  
                </nav>
                
            </div>
        )
    }
}

export default Home

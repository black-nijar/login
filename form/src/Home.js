import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
              <div>
                <nav className="nav-wrapper indigo">
                    <div className="container">

                        <Link to="" className="brand-logo">Home</Link>
                        <Link to="#" className="sidenav-trigger" data-target="mobile-links">
                            <i className="material-icons">menu</i>
                        </Link>

                        <ul className="right hide-on-med-and-down" style={{width: '50%'}}>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    </div>
                </nav>
              </div>
                <ul className="sidenav" id="mobile-links" style={{ width: '50%'}}>
                    <li><Link to="/home">    Home      <i className='material-icons'>home</i></Link></li>
                    <li><Link to="about">About     <i className='material-icons'>account_circle</i></Link></li>
                    <li><Link to="contact">Contact <i className='material-icons'>local_phone</i></Link></li>
                    <li><Link to="/login">Login    <i className='material-icons'>account_box</i></Link></li>
                </ul>
              
                
            </div>
        )
    }
}

export default Home;

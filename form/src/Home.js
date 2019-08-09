import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
              <div>
                <nav class="nav-wrapper indigo">
                    <div class="container">

                        <a href="/" class="brand-logo">Home</a>
                        <a href="#" class="sidenav-trigger" data-target="mobile-links">
                            <i class="material-icons">menu</i>
                        </a>

                        <ul class="right hide-on-med-and-down" style={{width: '50%'}}>
                            <li><a href="/home">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/login">Login</a></li>
                        </ul>
                    </div>
                </nav>
              </div>
                <ul class="sidenav" id="mobile-links" style={{ width: '50%'}}>
                    <li><a href="/">    Home      <i class='material-icons'>home</i></a></li>
                    <li><a href="about">About     <i class='material-icons'>account_circle</i></a></li>
                    <li><a href="contact">Contact <i class='material-icons'>local_phone</i></a></li>
                    <li><a href="/login">Login    <i class='material-icons'>account_box</i></a></li>
                </ul>
              
                
            </div>
        )
    }
}

export default Home;

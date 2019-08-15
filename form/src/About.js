import React, { Component } from 'react'
import { GoogleLogout } from 'react-google-login'
class About extends Component {

    state = {
        user: []
    }
    componentDidMount() {
        const { detail } = this.props.location
        //  console.log(detail);
        this.setState({
            user: detail
        })
    }
    render() {
        const { user } = this.state
        console.log(user);
        const Data = user ? (
            <div className='container' style={{ margin: '2em' }}>
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card">
                            <div className="card-image">
                                <img src={user.imageUrl} alt='null' style={{}} />
                                <div className="card-content">
                                    <h6>Username : {user.name}</h6>
                                    <h6>First name : {user.givenName}</h6>
                                    <h6>Last name : {user.familyName}</h6>
                                    <h6>E-mail   :      {user.email}</h6>
                                </div>
                                <div className="card-action">
                                    <a href="/login" className='btn blue'>Logout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
                <div className='center' style={{ margin: '5em' }}>
                    Not Signed yet...
                </div>
            )
        return (
            <div className='container'>
                {Data}
            </div>
        )
    }
}

export default About

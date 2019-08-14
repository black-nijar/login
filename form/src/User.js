import React, { Component } from 'react'
import GoogleSignOut from 'react-google-login'


class User extends Component {
    render() {
        // console.log(this.props);
        const { data } = this.props
        console.log(data);
        const user = data ? (
            <div className='border'>
                <h4>Profile:</h4>
                <div className='card-image'>
                    <img src={data.imageUrl} alt='null' className='circle' />
                </div>
                <div className='card-left'>
                    <h5>User name   : {data.name}</h5>
                    <h5>First name  : {data.givenName}</h5>
                    <h5>Last name   : {data.familyName}</h5>
                    <h5>E-mail      : {data.email}</h5><br />
                </div>
            </div>
        ) : (
                <div>not yet signed...</div>
            )
        return (
            <div>

                {user}
            </div>
        )
    }
}

export default User

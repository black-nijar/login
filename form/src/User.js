import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


class User extends Component {
    render() {
        // console.log(this.props);
        const { data } = this.props
        const user = data ? (
            <div>
                <Redirect to={{ pathname: '/about', detail: data} }/>
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

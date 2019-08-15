import React, { Component } from 'react'
import GoogleSign from 'react-google-login'
import User from './User';


class Login extends Component {
  state = {
    email: '',
    name: '',
    picture: '',
    det: ''
  }

  render() {
    const responseGoogle = (e) => {
      //  console.log(e.profileObj);
      this.setState({
        email: e.profileObj.email,
        name: e.profileObj.name,
        picture: e.profileObj.ImageUrl,
        det: e.profileObj
      })
    }
    return (
      <div className="container center">
        <div className='card-panel' style={{ margin: '3em' }}>
          <span>Login with Google</span>
          <div style={{ margin: '3em' }}>
            <GoogleSign
              clientId='733700047929-3fso2o8n83f7dlqo5du9bdep8lphv6n6.apps.googleusercontent.com'
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              buttonText='Login'
            />
          </div>
          <User data={this.state.det} />
        </div>
      </div>
    )
  }
}

export default Login
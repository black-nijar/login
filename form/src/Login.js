import React, { Component } from 'react'
import GoogleSign from 'react-google-login'

class Login extends Component {
  state = {
    loggedIn: false,
    email: '',
    name: '',
    picture: ''
  }
 
  
 
  render() {
    const responseGoogle=(e)=>{
      console.log(e.profileObj);
    }
   
    return (
      <div className="container center">

        <div className='card-panel' style={{ margin: '3em'}}>
          <span>Login with Google</span>
          <GoogleSign
            clientId='733700047929-3fso2o8n83f7dlqo5du9bdep8lphv6n6.apps.googleusercontent.com'
            onSuccess={ responseGoogle  }
            onFailure={ responseGoogle  }
          />
        </div>

      </div>
    )
  }
}

export default Login
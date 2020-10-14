import React, { useState, Component } from 'react'
import './Home.css'
import { connect } from 'react-redux'
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'
import UserPool from './UserPool'



export default () => {

  const mapStateToProps = state => {
    return { session: state.session }
  }

  const onSubmit = event => {
    // event.preventDefault();

    console.log('Inside')
    const user = new CognitoUser({
      Username: email,
      Pool: UserPool
    })

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password
    })

    user.authenticateUser(authDetails, {
      onSuccess: data => {
        console.log(data)
      },

      onFailure: err => {
        console.log(err)
      }, 

      newPasswordRequired: data=> {
        console.log('newPasswordRequired: ', data)
      }

    })


  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div className="Home">
      <div>Hello</div>
        <from onSubmit={onSubmit}>
          <input 
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <input 
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <button type='submit'> Login </button>
        </from>
    </div>
  )
}
  
// export default connect(mapStateToProps)(Home)

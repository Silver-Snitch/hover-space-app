import React, { useState, Component } from 'react'
import './Home.css'
import { connect } from 'react-redux'
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'
import UserPool from './UserPool'

const mapStateToProps = state => {
  return { session: state.session }
}

const onSubmit = event => {
  event.preventDefault();

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


class Home extends Component {
  constructor (props) {
    super(props)
    console.log("session: "+this.props.session.isLoggedIn)
    this.state = { apiStatus: 'Not called' }
  }
  render () {
    return (
      <div className="Home">
        <div>Hello</div>
        <header className="Home-header">
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
        </header>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Home)

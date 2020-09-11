import React, { Component } from 'react'
import logo from './logo.svg'
import './Home.css'
import { connect } from 'react-redux'
import cognitoUtils from '../lib/cognitoUtils'

const mapStateToProps = state => {
  return { session: state.session }
}
class Home extends Component {
  constructor (props) {
    super(props)
    this.state = { apiStatus: 'Not called' }
  }
  onSignOut = (e) => {
    e.preventDefault()
    cognitoUtils.signOutCognitoSession()
  }

  render () {
    return (
      console.log("dsfsd")
      <div className="Home">
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          { this.props.session.isLoggedIn ? (
            <div>
              <p>You are logged in as user {this.props.session.user.userName} ({this.props.session.user.email}).</p>
              <p></p>
              <div>
                <div>API status: {this.state.apiStatus}</div>
                <div className="Home-api-response">{this.state.apiResponse}</div>
              </div>
              <p></p>
              <a className="Home-link" href="#" onClick={this.onSignOut}>Sign out</a>
            </div>
          ) : (
            <div>
              <p>You are not logged in.</p>
              <a className="Home-link" href={cognitoUtils.getCognitoSignInUri()}>Sign in</a>
            </div>
          )}
          <div className="Home-details">
          </div>
        </header>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Home)

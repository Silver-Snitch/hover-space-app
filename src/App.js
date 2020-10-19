import React from 'react'
import {
  Router,
  Route
} from 'react-router-dom'
import { Account } from './routes/Accounts';
import Login from './routes/Login'
import Register from './routes/Register';
import Status from './routes/Status'


import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

const App = () => (
  <Account>
    <Status />
    <Router history={history}>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/" component={Login}/>
      <Route exact path="/register" component={Register} />
    </Router>
  </Account>

)

export default App

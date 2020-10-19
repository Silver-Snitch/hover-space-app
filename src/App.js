import React from 'react'
import {
  Router,
  Route
} from 'react-router-dom'
import Login from './routes/Login'
import Register from './routes/Register';


import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

const App = () => (
  <Router history={history}>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/" component={Login}/>
    <Route exact path="/register" component={Register} />
  </Router>

)

export default App

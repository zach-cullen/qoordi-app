import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../components/Home'
import LoginContainer from '../containers/LoginContainer'
import SignupContainer from '../containers/SignupContainer'
import UserContainer from '../containers/UserContainer'

const Routes = ({ session }) => {

  const loggedIn = session.authenticated

  return(
    <Switch>
      <Route exact path="/home" component={Home} />

      <Route exact path="/login">
        { loggedIn ? <Redirect to="/home" /> : <LoginContainer /> }
      </Route>

      <Route exact path="/signup">
        { loggedIn ? <Redirect to="/home" /> : <SignupContainer /> }
      </Route>

      <Route exact path="/app">
        { loggedIn ? < UserContainer /> : <Redirect to="/home" /> }
      </Route>

      <Route path="/">
        <Redirect exact to="/home" />
      </Route>

    </Switch>
  )
}

export default connect(state => ({ session: state.session }))(Routes)
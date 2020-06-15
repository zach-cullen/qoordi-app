import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../components/Home'
import LoginContainer from '../containers/LoginContainer'
import SignupContainer from '../containers/SignupContainer'
import UserContainer from '../containers/UserContainer'
import LogoutContainer from '../containers/LogoutContainer'

const Routes = ({ session }) => {

  const loggedIn = () => {
      return session.authenticated && Object.keys(session.user).length > 0
    }

  return(
    <Switch>
      <Route exact path="/home" component={ Home } />

      <Route exact path="/app" component={ loggedIn() ? UserContainer : Home } />

      <Route exact path="/login">
        { loggedIn() ? <Redirect to="/app" /> : <LoginContainer /> }
      </Route>

      <Route exact path="/signup">
        { loggedIn() ? <Redirect to="/app" /> : <SignupContainer /> }
      </Route>

      <Route exact path="/logout">
        { loggedIn() ? <LogoutContainer /> : <Redirect to="/home" />}
      </Route>

      <Route path="/" component={ loggedIn() ? UserContainer : Home } />

    </Switch>
  )
}

export default connect(state => ({ session: state.session }))(Routes)
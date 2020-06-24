import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import HomeContainer from '../containers/HomeContainer'
import LoginContainer from '../containers/LoginContainer'
import SignupContainer from '../containers/SignupContainer'
import DashboardContainer from '../containers/DashboardContainer'
import LogoutContainer from '../containers/LogoutContainer'

const Routes = ({ session }) => {

  // checks for both valid session and user object since they are created with separate promises that may race each other,
  // this prevents protected routes from mounting components prior to having user data
  const loggedIn = () => {
      return session.authenticated && Object.keys(session.user).length > 0
    }

  return(
    <Switch>
      <Route exact path="/" component={ HomeContainer } />

      <Route exact path="/app" component={ loggedIn() ? DashboardContainer : HomeContainer } />

      <Route exact path="/login">
        { loggedIn() ? <Redirect to="/app" /> : <LoginContainer /> }
      </Route>

      <Route exact path="/signup">
        { loggedIn() ? <Redirect to="/app" /> : <SignupContainer /> }
      </Route>

      <Route exact path="/logout">
        { loggedIn() ? <LogoutContainer /> : <Redirect to="/" />}
      </Route>

      <Route path="/" component={ loggedIn() ? DashboardContainer : HomeContainer } />

    </Switch>
  )
}

export default connect(state => ({ session: state.session }))(Routes)
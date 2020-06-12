import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../components/Home'
import LoginContainer from '../containers/LoginContainer'
import SignupContainer from '../containers/SignupContainer'
import UserContainer from '../containers/UserContainer'

const Routes = () => {
  return(
    <Switch>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/signup" component={SignupContainer} />
      <Route exact path="/app" component={UserContainer} />
      <Route path="/">
        <Redirect exact to="/home" />
      </Route>
    </Switch>
  )
}

export default Routes
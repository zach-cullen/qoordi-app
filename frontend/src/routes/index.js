import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import Signup from '../components/Signup'
import UserContainer from '../containers/UserContainer'

const Routes = () => {
  return(
    <Switch>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/app" component={UserContainer} />
      <Route path="/">
        <Redirect exact to="/home" />
      </Route>
    </Switch>
  )
}

export default Routes
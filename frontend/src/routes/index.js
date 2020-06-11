import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import Signup from '../components/Signup'
import UserContainer from '../containers/UserContainer'

const Routes = () => {
  return(
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/app" component={UserContainer} />
    </Switch>
  )
}

export default Routes
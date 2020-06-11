import React from 'react'
import { Switch, Route } from 'react-router-dom'

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
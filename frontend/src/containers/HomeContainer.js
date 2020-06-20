import React, { Component } from 'react'
import Home from '../components/views/Home/Home'
import NavBar from '../components/views/NavBar/NavBar'

class HomeContainer extends Component {

  render() {
    return(
      <div id="home-container">
        <NavBar />
        <Home />
      </div>
    )
  }

}

export default HomeContainer
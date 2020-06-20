import React from 'react'
import Moment from 'react-moment'

const DashGreeting = (props) => {



  const renderGreeting = (props) => {
    if (!!props.currentUser) {
      return(
        <h4>Hello, {props.currentUser.given_name}!</h4>
      )
    }
  }

  const renderDate = () => {
    return(<h6>Today: <Moment format="MMMM D, YYYY"/></h6>)
  }

  return(
    <div id="dash-greeting">
      { renderGreeting(props) }
      { renderDate()}
    </div>
  )

  

}

export default DashGreeting
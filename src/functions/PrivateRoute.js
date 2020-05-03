import React from 'react'
import {connect} from 'react-redux'
import { Route, Redirect} from 'react-router-dom';
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      props.loggedIn === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )
function mapStateToProps(state){
    return{
      loggedIn: state.users.loggedIn
    }
  }
export default connect(mapStateToProps)(PrivateRoute)
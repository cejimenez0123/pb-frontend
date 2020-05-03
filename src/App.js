import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import { connect} from "react-redux"
import HomeContainer from "./containers/HomeContainer"
import LogInForm from "./components/user/LogInForm"
import SignUpForm from "./components/user/SignUpForm"
import PrivateRoute from "./functions/PrivateRoute"
import ProfileContainer from './containers/ProfileContainer';
import {getUsers} from "./actions/UserActions"
class App extends React.Component{
  componentWillMount(){
    this.props.getUsers()
  }
  render(){
  return (
    <div className="App">
      < Router>
      
      <Route exact path="/" >
          <HomeContainer/>
        </Route>
        {this.props.loggedIn ? <Redirect to={`/users/${this.props.currentUser.id}`} /> : <Redirect to={window.location.pathname} />}
        < Switch>
          <Route path="/login">
            <LogInForm/>
          </Route>
          <Route path="/signup">
            <SignUpForm/>
          </Route>
        </Switch>
        <PrivateRoute path="/users/:userId" ><ProfileContainer/></PrivateRoute>
      </Router>
    </div>
  );
  }
}
function mapDispatchToProps(dispatch){
  return{ 
    getUsers: ()=>getUsers()
  }
}
function mapStateToProps(state){
  console.log(state.users)
  return{
    loggedIn: state.users.loggedIn,
    currentUser: state.users.currentUser
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);

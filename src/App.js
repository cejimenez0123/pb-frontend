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
import {savePage,getAllPages} from "./actions/PageActions"
import EditorContainer from './containers/EditorContainer';
class App extends React.Component{
  componentWillMount(){
    this.props.getUsers()
  }
  render(){
  return (
 
    <div className="App">
      
      
      <Route exact path="/" >
          <HomeContainer getAllPages={this.props.getAllPages}/>
        </Route>
        <Route path="/pages/:id/edit">
          <EditorContainer savePage={this.props.savePage} currentPage={this.props.currentPage}/>
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
        <PrivateRoute path="/users/:userId" ><ProfileContainer currentUser={this.props.currentUser}/></PrivateRoute>
     
    </div>
  );
  }
}
function mapDispatchToProps(dispatch){
  return{ 
    getUsers: ()=>dispatch(getUsers()),
    savePage: (data)=>dispatch(savePage(data)),
    getAllPages: ()=>dispatch(getAllPages())  
  }
}
function mapStateToProps(state){

  return{
    loggedIn: state.users.loggedIn,
    currentUser: state.users.currentUser,
    currentPage: state.pages.currentPage
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);

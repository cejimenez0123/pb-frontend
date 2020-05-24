import React, { useState } from 'react';
import { BrowserRouter,HashRouter, Route, Switch, Redirect,withRouter} from 'react-router-dom';
import './App.css';
import { connect} from "react-redux"
import HomeContainer from "./containers/HomeContainer"
import LogInForm from "./components/user/LogInForm"
import SignUpForm from "./components/user/SignUpForm"
import PrivateRoute from "./functions/PrivateRoute"
import ProfileContainer from './containers/ProfileContainer';
import {getUsers, useUserActions,LOG_IN,signUp} from "./actions/UserActions"
import {savePage,getAllPages} from "./actions/PageActions"
import EditorContainer from './containers/EditorContainer';
import {history} from "./history"

let bot
class App extends React.Component{
  componentDidMount(){
    this.props.getAllPages()
  }
  bot = useUserActions()

  render(){
  return (
 
    <div className="App">
      
  
      <Route exact path="/" >
          <HomeContainer getAllPages={this.props.getAllPages} pages={this.props.pages}/>
        </Route>
        
    
        < Switch>
        <Route exact path="/pages/:id/edit" render={()=><EditorContainer savePage={this.props.savePage} currentPage={this.props.currentPage}/>}/>
        
        
          <Route exact path="/login">
            <LogInForm logIn={this.props.logIn}/>
          </Route>
          <Route exact path="/signup">
            <SignUpForm/>
          </Route>
        </Switch>
        <PrivateRoute path="/users/:userId" ><ProfileContainer currentUser={this.props.currentUser}/></PrivateRoute>
     
    </div>
  )}
  }

function mapDispatchToProps(dispatch){
  return{ 
    signUp:(user)=>dispatch(signUp(user)),
    logIn:(user)=>dispatch(LOG_IN(user)),
    getUsers: ()=>dispatch(getUsers()),
    savePage: (data)=>dispatch(savePage(data)),
    getAllPages: ()=>dispatch(getAllPages())  
  }
}
function mapStateToProps(state){

  return{
    loggedIn: state.users.loggedIn,
    currentUser: state.users.currentUser,
    currentPage: state.pages.currentPage,
    pages: state.pages.pages
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)

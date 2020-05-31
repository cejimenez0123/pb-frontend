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
import {savePage,getAllPages, getInbox} from "./actions/PageActions"
import EditorContainer from './containers/EditorContainer';

import {history} from "./history"
import InboxContainer from './containers/InboxContainer';

let bot
class App extends React.Component{
  componentDidMount(){
    this.props.getAllPages()
    this.props.getUsers()
  }
  bot = useUserActions()

  render(){
  return (
 
    <div className="">
      
  
      <Route exact path="/" >
          <HomeContainer users={this.props.users} getAllPages={this.props.getAllPages} pages={this.props.pages}/>
        </Route>
        
    
       
        <PrivateRoute exact path="/users/:userId" ><ProfileContainer currentUser={this.props.currentUser} getInbox={this.props.getInbox}/></PrivateRoute>
        <Route exact path="/pages/:id/edit" render={()=><EditorContainer savePage={this.props.savePage} currentPage={this.props.currentPage}/>}/>
        <Route exact path="/users/:id/inbox" ><InboxContainer getInbox={this.props.getInbox} inbox={this.props.inbox}/></Route>
          
          <Route exact path="/login">
            <LogInForm logIn={this.props.logIn}/>
          </Route>
          <Route exact path="/signup">
            <SignUpForm/>
          </Route>
     
       
     
    </div>
  )}
  }

function mapDispatchToProps(dispatch){
  return{ 
    signUp:(user)=>dispatch(signUp(user)),
    logIn:(user)=>dispatch(LOG_IN(user)),
    getUsers: ()=>dispatch(getUsers()),
    savePage: (data)=>dispatch(savePage(data)),
    getAllPages: ()=>dispatch(getAllPages()),
    getInbox: ()=>dispatch(getInbox())  
  }
}
function mapStateToProps(state){

  return{
    users: state.users.users,
    loggedIn: state.users.loggedIn,
    currentUser: state.users.currentUser,
    currentPage: state.pages.currentPage,
    pages: state.pages.pages,
    inbox: state.pages.inbox
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)

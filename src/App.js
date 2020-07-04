import React, { useState } from 'react';
import { BrowserRouter,HashRouter, Route, Switch, Redirect,withRouter} from 'react-router-dom';
import './App.css';
import { connect} from "react-redux"
import HomeContainer from "./containers/HomeContainer"
import LogInForm from "./components/user/LogInForm"
import SignUpForm from "./components/user/SignUpForm"
import PrivateRoute from "./PrivateRoute"
import ProfileContainer from './containers/ProfileContainer';
import BookContainer from "./containers/BookContainer"
import {getUsers, useUserActions,LOG_IN,signUp,SET_CURRENT_USER,getUser} from "./actions/UserActions"
import {savePage,getAllPages, getInbox} from "./actions/PageActions"
import {getAllBooks,getBook,getBooksOfUser} from "./actions/BookActions"
import BookIndexContainer from "./containers/BookIndexContainer"
import {history} from "./history"
import InboxContainer from './containers/InboxContainer';
import UserContainer from "./containers/UserContainer"

let bot
class App extends React.Component{
  componentDidMount(){
    this.props.getAllBooks()
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
        
    
       
       
        {/* <Route exact path="/pages/:id/edit" render={()=><EditorContainer  loggedIn={this.props.loggedIn} currentPage={this.props.currentPage}/>}/> */}
        <Route exact path="/users/:id/inbox" >
          <InboxContainer getInbox={this.props.getInbox} users={this.props.users} inbox={this.props.inbox} setCurrentUser={this.props.setCurrentUser} currentUser={this.props.currentUser} loggedIn={this.props.loggedIn}/>
          </Route>
          <Switch>
           <PrivateRoute exact path={`/user/:id`} ><ProfileContainer currentUser={this.props.currentUser} getInbox={this.props.getInbox}/></PrivateRoute>
          <Route path ={'/users/:id'}>
            <UserContainer users={this.props.users} setCurrentUser={this.props.setCurrentUser} getUser={this.props.getUser} user={this.props.userInview} booksInView={this.props.booksInView} getBooksOfUser={this.props.getBooksOfUser}/>
          </Route>
          </Switch>
          <Route exact path="/books/:id">
            <BookContainer book={this.props.currentBook} allBooks={this.props.books} getBook={this.props.getBook}/>
          </Route>
          <Route exact path="/books">
              <BookIndexContainer books={this.props.books}/>
          </Route>
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
    getInbox: ()=>dispatch(getInbox()),
    setCurrentUser:()=>dispatch(SET_CURRENT_USER()),
    getAllBooks:()=>dispatch(getAllBooks()),
    getBook:(id)=>dispatch(getBook(id)),
    getUser:(id)=>dispatch(getUser(id)),
    getBooksOfUser:(id)=>dispatch(getBooksOfUser(id))
  }
}
function mapStateToProps(state){

  return{
    users: state.users.users,
    loggedIn: state.users.loggedIn,
    currentUser: state.users.currentUser,
    currentPage: state.pages.currentPage,
    currentBook: state.books.currentBook,
    pages: state.pages.pages,
    inbox: state.pages.inbox,
    books: state.books.books,
    userInview: state.users.userInview,
    booksInView: state.books.booksInView
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)

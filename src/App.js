import React, { useState } from 'react';
import { BrowserRouter,HashRouter, Route, Switch, Redirect,withRouter} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import EditBookContainer from "./containers/EditBookContainer"
import { connect} from "react-redux"
import BookDraftsContainer from "./containers/BookDraftsContainer"
import HomeContainer from "./containers/HomeContainer"
import LogInForm from "./components/user/LogInForm"
import SignUpForm from "./components/user/SignUpForm"
import PrivateRoute from "./PrivateRoute"
import ProfileContainer from './containers/ProfileContainer';
import BookContainer from "./containers/BookContainer"
import {getUsers, useUserActions,LOG_IN,signUp,SET_CURRENT_USER,getUser,followUser,updateUser} from "./actions/UserActions"
import {getFollowersOfLibrary,followLibrary,deleteFollowLibrary,getFollowedBooksOfUser} from "./actions/FollowActions"
import {getLibraryPages,getLibrary,getBooksOfLibrary,getBookLibraries,updateLibrary,deleteBookLibrary,getAllLibraries} from "./actions/LibraryAction"
import {savePage,getAllPages, getInbox,getDraftsOfBook,getPublicPages} from "./actions/PageActions"
import {getAllBooks,getBook,getBooksOfUser,getUserBookAccess} from "./actions/BookActions"
// import BookIndexContainer from "./containers/BookIndexContainer"
import ProfileSettingsContainer from "./containers/ProfileSettingsContainer"
import {history} from "./history"
import StreetContainer from "./containers/StreetContainer"

import PublicProfileContainer from "./containers/PublicProfileContainer"
import LocalLibraryContainer from "./containers/LocalLibraryContainer"
import LibraryContainer from "./containers/LibraryContainer"

let bot
class App extends React.Component{
  componentDidMount(){
    if(localStorage.getItem("currentUser") && localStorage.getItem("currentUser").length>0){
      this.props.setCurrentUser()
      this.props.getUserBookAccess()
    }
    this.props.getAllBooks()
    this.props.getAllPages()
    this.props.getUsers()
  
    // this.props.getBookLibraries()
  }
  
  bot = useUserActions()

  render(){
  return (
 
    <div className="app">
      <header>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <script defer src="https://use.fontawesome.com/releases/v5.14.0/js/all.js"></script>
      <script src="https://dhbhdrzi4tiry.cloudfront.net/cdn/sites/foundation.js"></script>
     <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
     <script src="node_modules/blueimp-file-upload/js/jquery.fileupload.js"></script>
<script data-ad-client="ca-pub-3452062624129177" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"/>
      </header>
  
  <Route exact path="/" >
    <HomeContainer users={this.props.users} getAllPages={this.props.getAllPages} pages={this.props.pages} pagesInView={this.props.pagesInView} getPublicPages={this.props.getPublicPages} loggedIn={this.props.loggedIn}/>
  </Route>
  
<Switch>
  <Route exact path="/library/1">
   <LocalLibraryContainer getAllLibraries={this.props.getAllLibraries} libraries={this.props.librariesInView} books={this.props.books} users={this.props.users} pages={this.props.pages}/>
  </Route>
  <Route exact path="/user/:id/settings">
    <ProfileSettingsContainer updateUser={this.props.updateUser} currentUser={this.props.currentUser}/>
  </Route>
    <Route exact path="/libraries/:id/edit" >
  
  </Route>
        <Route path="/libraries/:id">
            <LibraryContainer getLibraryPages={this.props.getLibraryPages} deleteBookLibrary={this.props.deleteBookLibrary} updateLibrary={this.props.updateLibrary}allBooks={this.props.books} getBooksOfUser={this.props.getBooksOfUser} getFollowersOfLibrary={this.props.getFollowersOfLibrary} books={this.props.booksInView} library={this.props.libraryInView} getAllPages={this.props.getAllPages} followLibrary={this.props.followLibrary} pages={this.props.pages}
            pagesInView={this.props.pagesInView} followedBooks={this.props.followedBooks} getLibrary={this.props.getLibrary} getBooksOfLib={this.props.getBooksOfLib} followers={this.props.libraryFollowers} deleteFollowLibrary={this.props.deleteFollowLibrary} booksOfUser={this.props.booksOfUser}/>
        </Route>
      </Switch>
         < Route exact path="/books/:id/edit">
            <EditBookContainer  book={this.props.currentBook} allBooks={this.props.books} getBook={this.props.getBook}/>
          </Route>
          <Switch>
           <PrivateRoute exact path={`/user/:id`} ><ProfileContainer currentUser={this.props.currentUser} getInbox={this.props.getInbox} booksInView={this.props.booksInView}/></PrivateRoute>
          <Route path ={'/users/:id'}>
            <PublicProfileContainer getFollowedBooksOfUser={this.props.getFollowedBooksOfUser}getUser={this.props.getUdrt} users={this.props.users} librariesInView={this.props.librariesInView} user={this.props.userInView} getUser={this.props.getUser} booksInView={this.props.booksInView} getBooksOfUser={this.props.getBooksOfUser} followUser={this.props.followUser}/>
          </Route>
          </Switch>
          <Route exact path="/books/:id">
            <BookContainer allBooks={this.props.books} getBook={this.props.getBook} getAllPages={this.props.getAllPages}/>
          </Route>
          <Route exact path="/books/:id/drafts">
            <BookDraftsContainer getDrafts={this.props.getDrafts} getBook={this.props.getBook} bookInView={this.props.bookInView}/>
          </Route>
          <Route exact path="/street">
              <StreetContainer books={this.props.books}/>
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
    getBooksOfUser:(id)=>dispatch(getBooksOfUser(id)),
    getLibrary:(id)=>dispatch(getLibrary(id)),
    getBooksOfLib:(id)=>dispatch(getBooksOfLibrary(id)),
    getDrafts:(id)=>dispatch(getDraftsOfBook(id)),
    updateUser: (user)=>dispatch(updateUser(user)),
    getBookLibraries:()=>dispatch(getBookLibraries()),
    getFollowersOfLibrary: (id)=>dispatch(getFollowersOfLibrary(id)),
    followLibrary: (id)=>dispatch(followLibrary(id)),
    deleteFollowLibrary: (id)=> dispatch(deleteFollowLibrary(id)),
    updateLibrary: (hash)=>dispatch(updateLibrary(hash)),
    deleteBookLibrary:(hash)=>dispatch(deleteBookLibrary(hash)),
    getFollowedBooksOfUser: (id)=>dispatch(getFollowedBooksOfUser(id)),
    getUserBookAccess: ()=>dispatch(getUserBookAccess()),
    getLibraryPages:(id)=>dispatch(getLibraryPages(id)),
    getPublicPages:()=>dispatch(getPublicPages()),
    getAllLibraries:()=>dispatch(getAllLibraries())
  }
}
function mapStateToProps(state){

  return{
    users: state.users.users,
    loggedIn: state.users.loggedIn,
    currentUser: state.users.currentUser,
    currentPage: state.pages.currentPage,
    bookInView: state.books.bookInView,
    booksOfUserr: state.books.booksOfUser,
    pages: state.pages.pages,
    inbox: state.pages.inbox,
    books: state.books.books,
    userInView: state.users.userInView,
    booksInView: state.books.booksInView,
    pagesInView: state.pages.pagesInView,
    libraryInView: state.libraries.libraryInView,
    librariesInView: state.libraries.librariesInView,
    libraryFollowers: state.libraries.libraryFollowers,
    followedBooks: state.books.followedBooksOfUser

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)

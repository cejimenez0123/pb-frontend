import React from 'react'
import "../App.css"
import ProfileCard from "../components/user/ProfileCard"
import { connect } from 'react-redux'
import {withRouter} from 'react-router'
import {startLibrary,getUserLibraries,getAllLibraries,getBookLibraries} from "../actions/LibraryAction"
import {startPage,myPages,savePage} from "../actions/PageActions"
import {SET_CURRENT_USER,getUsers, END_CURRENT_USER,userPageStream} from '../actions/UserActions'
import NavbarContainer from './NavbarContainer'
import SearchUsers from '../components/user/SearchUsers'
import Pages from "../components/page/pages"
import ReactDOM from 'react-dom'
import Book from "../components/book/book"
import PageBoxes from '../components/page/PageBoxes'
import LibraryIndex from "../components/library/LibraryIndex"
import SearchCardIndex from "../components/user/SearchCardIndex"
import {Button,Modal } from 'react-bootstrap'
import BookContainer from './BookContainer'
import {getFollowersOfUser,getFollowedUsersOfUser,getFollowedBooksOfUser} from "../actions/FollowActions"
import {getBooksOfUser,getAllBooks,startBook} from "../actions/BookActions"
import PageInput from "../components/page/PageInput"
import BookIndex from "../components/book/BookIndex"
import PageCards from "../components/page/PageCards"
import EditBook from "../components/book/EditBook"
import FollowingFeed from '../components/feed/FollowingFeed'
import FollowingBtn from "../components/user/FollowingBtn"
import FollowersBtn from "../components/user/FollowersBtn"
import Editor from "../components/page/editor"
let book
class ProfileContainer extends React.Component{
    constructor(){
        super()
        this.state={showBooks: "none",showLibraries: "none"}
    }
    componentDidMount(){
       const id=  localStorage.getItem("currentUser")
        // this.props.getInbox()
        this.props.setCurrentUser()
        this.props.getFollowedUsers(id)  
        this.props.getBooksOfUser(id)
        this.props.userPageStream()
       this.props.getMyPages()
       this.props.getBookLibraries()
        this.props.getAllLibraries()
        this.props.getUserLibraries(id)
        this.props.getFollowedBooks(id)
         this.props.getFollowers(id)
         
        
    }
    handleOnClick(){
        let title = prompt("Enter a title","untitled")
      
       this.props.startBook(title)
       
    }
    handleClickFollowers(){

    }
    handleClickFollowing(){
       
        let container = document.querySelector(".bContainer")
        ReactDOM.render(<FollowingFeed books={this.props.followedBooks} users={this.props.followedUsers} pages={this.props.pages}/>,container)
        
    }
    handleStartLib(){
        let name = prompt("Name your Library","unititled")
        if(name!==null){
            this.props.startLibrary(name)
        }
        
    }
    componentDidUpdate(){
        console.log(this.props.followedUsers)
    }
    handleShowBooks(){
        debugger
        if(this.state.showBooks==="none"){
            this.setState({showBooks: "block"})
        }else{
            this.setState({showBooks: "none"})
        }
    }
    handleShowLibraries(){
        if(this.state.showLibraries==="none"){
            this.setState({showLibraries: "block"})
        }else{
            this.setState({showLibraries: "none"})
        }
    }
    handleModalClose(e){

      if(e.target === e.currentTarget){
       this.setState({showBooks: "none"})
       this.setState({showLibraries: "none"})
     }
  }
    render(){
        
      
       if(this.props.userBooks.length >0 && this.props.currentUser.home_book){
         console.log(this.props.currentUser)
        book  = this.props.userBooks.find(x=>{return x.id == this.props.currentUser.home_book.id})
           if(book.attributes){book=book.attributes}
           
       }
  
         console.log(this.props)
        return(
<div>
    <NavbarContainer loggedIn={this.props.loggedIn} endSession={this.props.endSession} />
    <div className="profileContainer">
        <div className="profile">
            <div classname="" id="my-info">
                <div class="row">
                    <div class="col">
                        
                        <section>
                            <ProfileCard user={this.props.currentUser} setCurrentUser={this.props.setCurrentUser}/>
                            <button type="button" class="start-btn btn btn-secondary btn-dark btn-sm" onClick={()=>this.handleStartLib()}>Start Library</button>
                            <button type="button" class="start-btn btn btn-secondary btn-dark btn-sm" onClick={()=>this.handleOnClick()}>Start Book</button>
                            <FollowersBtn/>
                            <FollowingBtn/> 
                        </section>
                    </div>
                </div>
            </div>
                {/* <EditBook book={book} /> */}
                <h3 onClick={()=>this.handleShowBooks()}>Books</h3>
                <div onClick={(e)=>this.handleModalClose(e)} style={{width: "100%",display: this.state.showBooks}} class="modal">
                    <div   class="modal-content">
                        <span  class="close">&times;</span>
                        <div className="modalIndex">
                        <BookIndex books={this.props.booksInView}/>
                        </div>
                    </div>
                </div>
                <h3 onClick={()=>this.handleShowLibraries()}>Libraries</h3>
                <div onClick={(e)=>this.handleModalClose(e)} style={{width: "100%",display: this.state.showLibraries}} class="modal">
                    <div   class="modal-content">
                      <span  class="close">&times;</span>
                      <div className="modalIndex index">
                     <LibraryIndex libraries={this.props.libraries} bookLibraries={this.props.bookLibraries}/>
                    </div>
                    </div>
                </div>
            </div>
             
              <main className=" PageMain">
              <div class="col">
              
        <Pages pages={this.props.pagesInView}/>
        </div>
        </main>
        <a href={`/user/${this.props.currentUser.id}/settings`} >
                            <img src="https://img.icons8.com/ios/50/000000/settings.png"/>
                        </a>
    </div>
    
</div>
        )
    }

}


function mapDispatchToProps(dispatch){
    return{setCurrentUser: ()=> dispatch(SET_CURRENT_USER()),
    getUsers:()=>getUsers(),
    endSession:()=>END_CURRENT_USER(),
    startPage: (title)=>dispatch(startPage(title)),
    getMyPages: ()=>dispatch(myPages()),
getUsers: ()=>dispatch(getUsers()),
savePage: (data)=>dispatch(savePage(data)),
getAllBooks: ()=>dispatch(getAllBooks()),
getBooksOfUser: (id)=>dispatch(getBooksOfUser(id)),
startBook: (title)=>dispatch(startBook(title)),
getFollowers: (id)=>dispatch(getFollowersOfUser(id)),
    getFollowedUsers: (id)=>dispatch(getFollowedUsersOfUser(id)),
    getFollowedBooks:(id)=>dispatch(getFollowedBooksOfUser(id)),
    startLibrary:(name)=>dispatch(startLibrary(name)),
    getUserLibraries: (id)=>dispatch(getUserLibraries(id)),
    getAllLibraries: ()=>dispatch(getAllLibraries()),
    getBookLibraries: ()=>dispatch(getBookLibraries()),
    userPageStream: ()=>dispatch(userPageStream())}
}
function mapStateToProps(state){
    return{
        users: state.users.users,
        currentUser: state.users.currentUser,
        loggedIn: state.users.loggedIn,
        requesting: state.pages.requesting,
        myPages: state.pages.myPages,
        currentBook: state.books.currentBook,
        homeBook: state.users.currentUser.home_book,
        userBooks: state.books.booksOfUser,
        followedUsers: state.users.followedUsers,
        followedBooks: state.books.followedBooks,
        pagesInView: state.pages.pagesInView,
        pages: state.pages.pages,
        libraries: state.libraries.librariesInView,
        bookLibraries: state.libraries.bookLibraries
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProfileContainer)
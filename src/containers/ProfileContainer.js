import React from 'react'
import "../App.css"
import ProfileCard from "../components/user/ProfileCard"
import { connect } from 'react-redux'
import {withRouter} from 'react-router'
import {startLibrary,getUserLibraries,getAllLibraries,getBookLibraries} from "../actions/LibraryAction"
import {startPage,myPages,savePage,getPagesComments,getPagesOfFollowing} from "../actions/PageActions"
import {SET_CURRENT_USER,getUsers, END_CURRENT_USER,userPageStream,recommendPages} from '../actions/UserActions'
import NavbarContainer from './NavbarContainer'
import SearchUsers from '../components/user/SearchUsers'
import Pages from "../components/page/pages"
import ReactDOM from 'react-dom'
import Book from "../components/book/book"
import PageBoxes from '../components/page/PageBoxes'
import LibraryIndex from "../components/library/LibraryIndex"
import SearchCardIndex from "../components/user/SearchCardIndex"
import Modal from "../components/modal"
import BookContainer from './BookContainer'
import {getFollowersOfUser,getFollowedUsersOfUser,getFollowedBooksOfUser} from "../actions/FollowActions"
import {getBooksOfUser,getAllBooks,startBook} from "../actions/BookActions"
import {getLikesOfUser} from "../actions/LikeActions"
import PageInput from "../components/page/PageInput"
import BookIndex from "../components/book/BookIndex"
import PageCards from "../components/page/PageCards"
import EditBook from "../components/book/EditBook"
import FollowingFeed from '../components/feed/FollowingFeed'
import FollowingBtn from "../components/user/FollowingBtn"
import FollowersBtn from "../components/user/FollowersBtn"
import Editor from "../components/page/editor"
import BookIndexModal from "../components/book/BookIndexModal"
import {BottomScrollListener }from 'react-bottom-scroll-listener';

let book
let page =0
class ProfileContainer extends React.Component{
    constructor(){
        super()
        this.state={page: 0,loading: false,
        showStartLibraries: "none",showStartBook: "none"}
    }
    componentDidMount(){
//    let html=document.querySelector(".app")
// html.style.backgroundColor="#ededed"
       const id=  localStorage.getItem("currentUser")

        this.props.setCurrentUser()
        this.props.getFollowedUsers(id)  
        this.props.getBooksOfUser(id)
        this.props.getPagesOfFollowing(id)
        // this.props.userPageStream()
    //    this.props.getMyPages()
    //    this.props.getBookLibraries()
        this.props.getAllLibraries()
        this.props.getLikesOfUser(id)
        this.props.getUserLibraries({id,privacy:"private"})
        this.props.getFollowedBooks(id)
         this.props.getFollowers(id)
       
        
    }
    handleStartBookModal(){
    //     let title = prompt("Enter a title","untitled")
      this.setState({showBookLibraries: "block"})
    //    this.props.startBook(title)

       
    }
    handleClickFollowers(){

    }
    handleClickFollowing(){
       
        let container = document.querySelector(".bContainer")
        ReactDOM.render(<FollowingFeed books={this.props.followedBooks} users={this.props.followedUsers} pages={this.props.pages}/>,container)
        
    }
    handleStartLib(){
        this.setState({showStartLibraries: "block"})
        // let name = prompt("Name your Library","unititled")
        // if(name!==null){
        //     this.props.startLibrary(name)
        // }
        
    }
    handleOnBottom(){
  
         page = page + 1
        
        this.props.recommendPages(localStorage.getItem("currentUser"),page)
    }
    startLib(e){
e.preventDefault()
debugger
let name=e.target.querySelector(`input[name="name"]`).value
let privacy = e.target.querySelector(`select[name="privacy"]`).value
    this.props.startLibrary({name,privacy})
    }
    startBook(e){
        e.preventDefault()
        debugger
      let name=e.target.querySelector(`input[name="name"]`).value
      let intro = e.target.querySelector("textarea").value
      let privacy = e.target.querySelector(`select[name="privacy"]`).value
this.props.startBook({name,intro,privacy})
    }
    componentDidUpdate(){  
    }
    profileCard(){
        if(!!this.props.currentUser){
      
        let user = this.props.currentUser
      
        return(<div>
      <div className="flex">
                <div className="profilePic">
                    <img inline="true" style={{objectFit:"contain"}} src={user.photo} alt=""  height="auto"/>
                </div>
                <div className="flex flex-direction-column profileCardNames">
                    <h3>{user.name}</h3>
            
           
                    <h4>@{user.username}</h4>
            </div>
            </div>
  <div className="profile-buttons">
           
              
           
                           

                     
                     <button type="button" class=" mountain button" onClick={()=>this.setState({showStartBook: "block"})}>Start Book</button>
            
                    <button type="button" class=" blueJean button" onClick={()=>this.handleStartLib()}>Start Library</button>
         
              <FollowersBtn/>
                         
                            <FollowingBtn followedUsers={this.props.followedUsers}/> 
                             </div> 
        
            </div>)
    
        }else{return (
            <img src="https://media.giphy.com/media/sSgvbe1m3n93G/source.gif"  alt="gif" width="50" height="50" />)}
        
        
        }
    
    handleShowBooks(){
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
       this.setState({showStartLibraries: "none"})
       this.setState({showStartBook: "none"})
     }
  }
    render(){
        
      
       if(this.props.userBooks && (this.props.userBooks.length >0 && this.props.currentUser.home_book)){

        book  = this.props.userBooks.find(x=>{return x.id == this.props.currentUser.home_book.id})
           if(book.attributes){book=book.attributes}
           
       }
    if(this.props.pagesInView && this.props.pagesInView.length >0 ){
        debugger
    }
        
        return(
<div><div className="profileBackground">
    
   
    <div className="profileContainer">
        <div className="profile">
            <div classname="" >
               
                   
                    
                        {this.profileCard()}
                    
                        
                        <section>
                           
                            
                <div onClick={(e)=>this.handleModalClose(e)} style={{width: "100%",display: this.state.showStartLibraries}} class="modal">
                    <div   class="modalContent">
                      <span  class="close">&times;</span>
                       
                        <form  className="startForm" onSubmit={(e)=>this.startLib(e)}>
                            <h4>Name of Library:</h4>
                            <br/>
                            <input type="text" name="name" placeholder="untitled"/>
                            <br/>
                            <label> Intro to Library: </label>
                            <br/>
                            <textarea/>
                            <h4> Privacy:</h4>
                            <select name="privacy">
                                <option value="private">Private</option>
                                <option value="public">Public</option>
                            </select>
                            <br/>
                                <input type="submit" value="Create"/>
                        </form>
                      
                    </div>
                </div>
                            
                                <div onClick={(e)=>this.handleModalClose(e)} style={{display: this.state.showStartBook}} class="modal">
                    <div   class="modalContent">
                      <span  class="close">&times;</span>
                      <div  className="modalIndex">
                     
                        <form onSubmit={(e)=>this.startBook(e)}>
                         <div className="startForm">
                            <label htmlFor="name">Name of Book:  </label>
                            <br/>
                            <input type="text"  className="form-control" name="name" placeholder="untitled"/>
                            <br/>
                            <label> Introduction to Book</label>
                            <br/>
                            <textarea className=" form-control" placeholder="What's the why" rows="3"/>
                            <br/>
                            <label> Privacy:</label>
                            <select className="form-control" name="privacy">
                                <option value="private">Private</option>
                                <option value="public">Public</option>
                            </select>
                            <br/>
                                <input type="submit" value="Create"/>
                                </div>
                        </form>
                        
                    </div>
                </div>
            </div>
            {/* "start-btn btn btn-secondary btn-dark btn-sm */}
               
                        </section>
                        
                  
            </div>
            <Modal button={<h3>Books</h3>} className={"book-index"} content={<BookIndex books={this.props.followedBooks}/>}/>
          
                  <Modal button={ <h3 >Libraries</h3> } className={"lib-index"} content={<LibraryIndex libraries={this.props.libraries} bookLibraries={this.props.bookLibraries}/>
              }/>
            </div>
             
              <div >
              <div className="pageMain">
           <BottomScrollListener onBottom={()=>this.handleOnBottom()}>
        <Pages pages={this.props.pagesInView} />
 </BottomScrollListener>
        </div>
        </div>
        <a href={`/user/${this.props.currentUser.id}/settings`} >
                            <img src="https://img.icons8.com/ios/50/000000/settings.png"/>
                        </a>
    </div>
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
    userPageStream: ()=>dispatch(userPageStream()),
    getPagesComments: (pages)=>dispatch(getPagesComments(pages)),
    getLikesOfUser: (id)=>dispatch(getLikesOfUser(id)),
    recommendPages: (id,page_num)=>dispatch(recommendPages(id,page_num)),
    getPagesOfFollowing:(id)=>dispatch(getPagesOfFollowing(id))}
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
        followedBooks: state.books.followedBooksOfUser,
        pagesInView: state.pages.pagesInView,
        pages: state.pages.pages,
        libraries: state.libraries.librariesInView,
        bookLibraries: state.libraries.bookLibraries,
        booksInView: state.books.booksInView
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProfileContainer)
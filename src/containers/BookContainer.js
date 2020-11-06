import React from 'react'
import Pages from '../components/page/pages'
import Book from "../components/book/book"
import Editor from "../components/page/editor"
import NavbarContainer from "./NavbarContainer"
import { connect} from 'react-redux'
import {getBookAccessors} from "../actions/BookActions"
import {followBook,bookFollowers,deleteBookFollow} from "../actions/FollowActions"
import {savePage,getPagesOfBook} from '../actions/PageActions'
import PageInput from "../components/page/PageInput"
import FollowerCards from '../components/user/FollowerCards'
import Popup from 'reactjs-popup'
import IdCard from '../components/book/IdCard'
import Modal from "../components/modal"
 let truthy = "none"
class BookContainer extends React.Component{
constructor(){
    super()
    this.state={title: "",
    show: "none",
    editor: false,
    truthy: "none"}
}
 handleOnClick(){
     this.props.followBook(this.props.book.id)
 }
 componentDidMount(){
     let id = window.location.pathname.split("/")[2]
   this.props.getBook(id)
     this.props.getPagesOfBook(id)
     this.props.bookFollowers(id)
     this.props.getBookAccessors(id)
    
 }
 componentDidUpdate(){
    

 }
//   editBtn(){
      
//         if(this.props.currentUser && this.props.currentUser.id===this.props.book.user.id){
//             return(<div>
//             <Popup trigger={ <button className={".editBookBtnDropdown"}>Edit Book</button>} position="right center">
//    <div >
//         <button onClick={()=>this.setState({truthy:"block"})}>Add Page</button>
//         <button>Delete Page</button>
//          </div>
//   </Popup>
           
                     
       
//         </div>)
            
//         }else{
//             return ("")
//         }
//     }
// followBtn(){
//          let follow= this.props.followers.find(follow=>{
//            return follow.attributes.follower.id === localStorage.getItem("currentUser")
//         })
//         if(follow){
//             return (<button class={"followedBtn"} onClick={()=>handleFollow()}>Following</button>)
//         }else{
//             return( <button class={"followBtn"} onClick={()=>props.followBook(props.book.id)}>Follow</button>)
//         }
        
//     }
// idCard(){

//     if(this.props.book){
       
//         return(<div>
//          <button class="button is-dark" onClick={()=>this.setState({show: "block"})}>Followers</button>
//     <div style={{textAlign: "center"}}>
               
//     {this.editBtn()} <a href={`/books/${this.props.book.id}/drafts`}>Drafts</a>
//       {followBtn()}
//         <div onClick={(e)=>handleModalClose(e)} style={{width: "100%",display: show}} class="modal">
//             <div   class="modal-content">
//                 <span  class="close">&times;</span>
//                   {followerCards()}
//             </div>
//         </div></div>
//          xxxxxx{this.editBtn()} <a href={`/books/${this.props.book.id}/drafts`}>Drafts</a>
//    {this.followBtn()}
//          <div onClick={(e)=>this.handleModalClose(e)} style={{width: "100%",display: this.state.show}} class="modal">
//                    <div   class="modal-content">
//                      <span  class="close">&times;</span>
//                      {this.followerCards()}
//                     </div>
//                     <button class="button is-dark" onClick={()=>this.setState({show:"block"})}>Followers</button>
//                </div></div>)
//     }else{
//         return("no Book")
//     }
// }
ifBook(){

    if(this.props.book){

        return (
        <div>
           <Book editor={this.state.editor} truthy={truthy} book={this.props.book} pages={this.props.pagesInView} followBook={this.props.followBook}/>
        </div>
        )
    }else{
        return("no book")
    }
}


 editBtnClick(e){
        if(e.target.nextElementSibling.style.display === "none"){
            e.target.nextElementSibling.style.display ="block"
            
        }else{
            e.target.nextElementSibling.style.display = "none"
        }
        
    }
    editBtn(){
      
        if(this.props.currentUser && this.props.currentUser.id===this.props.book.user.id){
            return(<div>
        
    <Modal button={<button className="button">Edit Book</button>} content={<div>
        {this.props.book.title}
    </div>}/>
        <button onClick={()=>this.setState({editor:true})}>Add Page</button>
        

                     
       
        </div>)
            
        }else{
            return ("")
        }
    }
    handleFollow(){
  if(this.props.followers){
        let follow=  this.props.followers.find(follow=>{
           return follow.attributes.follower.id === localStorage.getItem("currentUser")
        })
      
        if(follow){
            this.props.deleteBookFollow(follow)
        }else{
            this.props.followBook(this.props.book.id)
        }
  } 
    }
  handleModalClose(e){

      if(e.target === e.currentTarget){
       console.log("!")
       
         
        this.set.state({show:"none"})
     }
  }
    followBtn(){
    
        if(this.props.followers){
         let follow=  this.props.followers.find(follow=>{
           return follow.attributes.follower.id === localStorage.getItem("currentUser")
        })
        if(follow){
            return (<button class={"followedBtn"} onClick={()=>this.handleFollow()}>Following</button>)
        }else{
            return( <button class={"followBtn"} onClick={()=>this.props.followBook(this.props.book.id)}>Follow</button>)
        }
        } 
    }
  followerCards(){
      if (this.props.followers){

          return(<FollowerCards users={this.props.followers}/>)
      }else{
          return("x")
      }
  }
    render(){
       
       
       
        return(<div>
        <NavbarContainer/>
        
              
               
    
     
        BookContainer
    <div className="bookContainer">
       <IdCard users={this.props.users}book={this.props.book} currentUser={this.props.currentUser} truthy={truthy} followers={this.props.followers}/>
     
        <div className="book">
       {this.ifBook()}
           </div>
       
        </div> 
        </div>)
    }
}
const mapStateTothis=(state)=>{
  
    return{ book: state.books.bookInView,
    currentUser: state.users.currentUser,
    users: state.users.users,
    pagesInView: state.pages.pagesInView,
    currentPage: state.pages.currentPage,
    followers: state.books.bookFollowers
    }
}
const mapDispatchTothis=(dispatch)=>{
    return{
        savePage: (data)=>dispatch(savePage(data)),
        followBook:(id)=>dispatch(followBook(id)),
        getPagesOfBook:(id)=>dispatch(getPagesOfBook(id)),
        bookFollowers: (id)=>dispatch(bookFollowers(id)),
        deleteBookFollow:(follow)=>dispatch(deleteBookFollow(follow)),
        getBookAccessors: (id)=>dispatch(getBookAccessors(ids))
    }
}
export default  connect(mapStateTothis,mapDispatchTothis)(BookContainer)
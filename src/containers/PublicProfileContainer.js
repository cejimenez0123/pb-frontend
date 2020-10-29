import React from 'react'
import NavbarContainer from "./NavbarContainer" 
import ProfileCard from "../components/user/ProfileCard"
import BookIndex from "../components/book/BookIndex"
import {followUser,getFollowersOfUser,deleteFollow} from '../actions/FollowActions'
import {getPagesById} from "../actions/PageActions"
import {getUserLibraries} from "../actions/LibraryAction"
import BookIndexModal from "../components/book/BookIndexModal"
import Pages from "../components/page/pages"
import {connect} from "react-redux"
import FollowerCards from "../components/user/FollowerCards"
import LibraryIndex from "../components/library/LibraryIndex"
import "../App.css"
import Modal from "../components/modal"
let id= window.location.pathname.split("/")[2]
 let user
 
class PublicProfileContainer extends React.Component{
    constructor(){
        super()
        this.state={show: "none"}
    }
    componentDidMount(){
        
          
     if(Object.keys(this.props.user).length !== 0){
       this.props.getBooksOfUser(this.props.user.id)  
        }else{
            
        this.props.getUser(id)
        this.props.getPagesById(id)
        this.props.getFollowers(id)
        this.props.getBooksOfUser(id)
        this.props.getUserLibraries({id,privacy: "public"})
    
    }    
    }
    componentDidUpdate(){
        
    }
    handleFollow(){
        console.log("CLICKEd")
        let follow=  this.props.followers.find(follow=>{
           return follow.attributes.follower.id === localStorage.getItem("currentUser")
        })
      
        if(follow){
            this.props.deleteFollow(follow)
        }else{
            this.props.followUser(this.props.user.id)
        }
        
    }
    handleShow(){
        if(this.state.show==="block"){
            this.setState({show:"none"})
        }else{
            this.setState({show:"block"})
        }

    }
    followBtn(){
      let follow=  this.props.followers.find(follow=>{
           return follow.attributes.follower.id === localStorage.getItem("currentUser")
        })
   
        if(follow){
            return (<button className="followedBtn button pink" onClick={()=>this.handleFollow()}>Following</button>)
        }else{
            return (<button className="followBtn button red" onClick={()=>this.handleFollow()}>Follow</button>)
        }
    }
    handleModalClose(e){
         if(e.target === e.currentTarget){
       this.setState({show: "none"})
     }
    }
    render(){
    
     
        return(
         
    <div>
        <NavbarContainer loggedIn={this.props.loggedIn} endSession={this.props.endSession} />
             <div className=" profileContainer">
        <section className="profile">
             < ProfileCard user={this.props.user}/>
            {this.followBtn()}
            <button className="button green" onClick={()=>this.handleShow()} >Followers</button>
                <div onClick={(e)=>this.handleModalClose(e)} style={{width: "100%",display: this.state.show}} class="modal">
                <div   class="modal-content">
                  <span  onClick={()=>this.handleShow()}class="close">&times;</span>
                  <div className={"modalInfo"}>

                    <FollowerCards users={this.props.followers}/>
                  </div>
                  </div>
            </div>
            <Modal button={<h3>Books</h3>} content={<BookIndex books={this.props.booksInView}/>}/>
            <Modal button={<h3>Libraries</h3>} content={<LibraryIndex libraires={this.props.librariesInView}/>}/>
            {/* <BookIndexModal books={this.props.booksInView}/> */}
            </section>
            <Pages pages={this.props.pages}/>
            <BookIndex books={this.props.booksInView} user={this.props.user}/>
    </div>
            </div>
        )
    }
}
const mapState = (state)=>{
    return{
        followers: state.users.userFollowers,
        pages: state.pages.pagesInView
    }
}
const mapDispatch = (dispatch)=>{
    return{followUser: (id)=>dispatch(followUser(id)),
    getFollowers: (id)=>dispatch(getFollowersOfUser(id)),
    deleteFollow:(follow)=>dispatch(deleteFollow(follow)),
    getPagesById: (id)=>dispatch(getPagesById(id))
    }
}
export default connect(mapState,mapDispatch)(PublicProfileContainer)
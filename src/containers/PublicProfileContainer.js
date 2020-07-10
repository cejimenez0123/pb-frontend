import React from 'react'
import NavbarContainer from "./NavbarContainer" 
import ProfileCard from "../components/user/ProfileCard"
import BookIndex from "../components/book/BookIndex"
import {followUser} from "../actions/FollowActions"
import {connect} from "react-redux"
let id= window.location.pathname.split("/")[2]
 let user
class PublicProfileContainer extends React.Component{
    componentDidMount(){
        
          
     if(Object.keys(this.props.user).length !== 0){
       this.props.getBooksOfUser(this.props.user.id)  
        }else{
            debugger 
        this.props.getUser(id)
        this.props.getBooksOfUser(id)
    }
       
    }
    handleFollow(){
        console.log("CLICKEd")
        this.props.followUser(this.props.user.id)
    }

    render(){
    
     
        return(
         
            <div>
            <NavbarContainer loggedIn={this.props.loggedIn} endSession={this.props.endSession} />
             UserContainer
             < ProfileCard user={this.props.user}/>
             <button onClick={()=>this.handleFollow()}>Follow</button>
            <BookIndex books={this.props.booksInView} user={this.props.user}/>

            </div>
        )
    }
}
const mapDispatch = (dispatch)=>{
    return{followUser: (id)=>dispatch(followUser(id))}
}
export default connect(null,mapDispatch)(PublicProfileContainer)
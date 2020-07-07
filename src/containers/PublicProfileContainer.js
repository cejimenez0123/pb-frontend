import React from 'react'
import NavbarContainer from "./NavbarContainer" 
import ProfileCard from "../components/user/ProfileCard"
import BookIndex from "../components/book/BookIndex"
import {followUser} from "../actions/UserActions"
let id= window.location.pathname.split("/")[2]
 let user
class PublicProfileContainer extends React.Component{
    componentDidMount(){
        
          
     if(Object.keys(this.props.user).length != 0){
       this.props.getBooksOfUser(this.props.user.id)  
        }else{ 
        this.props.getUser(id)
        this.props.getBooksOfUser(id)
    }
       
    }

    render(){
    
     
        return(
         
            <div>
            <NavbarContainer loggedIn={this.props.loggedIn} endSession={this.props.endSession} />
             UserContainer
             < ProfileCard user={this.props.user}/>
             <button onClick={followUser(this.props.user.id)}>Follow</button>
            <BookIndex books={this.props.booksInView} user={this.props.user}/>

            </div>
        )
    }
}
export default PublicProfileContainer
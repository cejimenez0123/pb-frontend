import React from 'react'
import NavbarContainer from "./NavbarContainer" 
import ProfileCard from "../components/user/ProfileCard"
import BookIndex from "../components/book/BookIndex"
let id= window.location.pathname.split("/")[2]
class UserContainer extends React.Component{
    componentDidMount(){
        
       this.props.getBooksOfUser(id)

    }

    render(){
        let user
        
    if(this.props.users){ 
        user = this.props.users.find(u=>{         
      return  u.id ==  id
        })    
    }else{ 
        this.props.getUser(id)
        user = this.props.user
    }
    if(user){
    user = user.attributes}
     
   
        return(
            <div>
            <NavbarContainer loggedIn={this.props.loggedIn} endSession={this.props.endSession} />
                UserContainer
                < ProfileCard user={user}/>
                <BookIndex books={this.props.booksInView} user={user}/>

            </div>
        )
    }
}
export default UserContainer
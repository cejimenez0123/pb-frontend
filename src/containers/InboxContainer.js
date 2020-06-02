import React from 'react'
import NavbarContainer from "./NavbarContainer"
import Inbox from "../components/page/Inbox"
export default class InboxContainer extends React.Component{
    componentDidMount(){
            this.props.setCurrentUser()
            console.log("hit")
            this.props.getInbox()
            
            
    }

    render(){
        return(<div>
             <NavbarContainer loggedIn={this.props.loggedIn}/>
            <Inbox inbox={this.props.inbox} users={this.props.users} /> 
            
        </div>)
    }
}
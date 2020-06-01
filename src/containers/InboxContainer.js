import React from 'react'
import NavbarContainer from "./NavbarContainer"
import Inbox from "../components/page/Inbox"
export default class InboxContainer extends React.Component{
    componentDidMount(){
        this.props.setCurrentUser()
            this.props.getInbox()
            
            
    }

    render(){
        return(<div>
             <NavbarContainer/>
            <Inbox inbox={this.props.inbox}/> 
            
        </div>)
    }
}
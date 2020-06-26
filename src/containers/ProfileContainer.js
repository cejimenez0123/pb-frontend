import React from 'react'
import "../App.css"
import ProfileCard from "../components/user/ProfileCard"
import { connect } from 'react-redux'
import {withRouter} from 'react-router'
import {startPage,myPages} from "../actions/PageActions"
import {SET_CURRENT_USER,getUsers, END_CURRENT_USER} from '../actions/UserActions'
import NavbarContainer from './NavbarContainer'
import SearchUsers from '../components/user/SearchUsers'
import Pages from "../components/page/pages"
import EditorContainer from './EditorContainer'
import PageBoxes from '../components/page/PageBoxes'
import Editor from "../components/page/editor"
import SearchCardIndex from "../components/user/SearchCardIndex"
import BoxEditor from "../components/page/BoxEditor"
import BookContainer from './BookContainer'
import PartInput from "../components/page/PartInput"
class ProfileContainer extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.getInbox()
        this.props.setCurrentUser()
        this.props.getUsers()
        this.props.getMyPages()
        
    }
    handleOnClick(){
        let title = prompt("Enter a title","untitled")
      
       this.props.startPage(title)
       
    }
    render(){
        return(
            <div >
                <NavbarContainer loggedIn={this.props.loggedIn} endSession={this.props.endSession} />
                < ProfileCard currentUser={this.props.currentUser} setCurrentUser={this.props.setCurrentUser}/>
                <button onClick={()=>this.handleOnClick()}>Start something</button>
                <PartInput/>
           
                
                
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
getUsers: ()=>dispatch(getUsers())}
}
function mapStateToProps(state){
    return{
        users: state.users.users,
        currentUser: state.users.currentUser,
        loggedIn: state.users.loggedIn,
        requesting: state.pages.requesting,
        myPages: state.pages.myPages
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProfileContainer)
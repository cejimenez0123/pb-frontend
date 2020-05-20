import React from 'react'
import ProfileCard from "../components/user/ProfileCard"
import { connect } from 'react-redux'
import {withRouter} from 'react-router'
import {startPage} from "../actions/PageActions"
import {SET_CURRENT_USER,getUsers, END_CURRENT_USER} from '../actions/UserActions'
import NavbarContainer from './NavbarContainer'
import EditorContainer from './EditorContainer'
class ProfileContainer extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.setCurrentUser()
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
                <EditorContainer/>
                
            </div>
        )
    }

}


function mapDispatchToProps(dispatch){
    return{setCurrentUser: ()=> dispatch(SET_CURRENT_USER()),
    getUsers:()=>getUsers(),
    endSession:()=>END_CURRENT_USER(),
    startPage: (title)=>dispatch(startPage(title))}
}
function mapStateToProps(state){
    return{
        currentUser: state.users.currentUser,
        loggedIn: state.users.loggedIn,
        requesting: state.pages.requesting
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProfileContainer)
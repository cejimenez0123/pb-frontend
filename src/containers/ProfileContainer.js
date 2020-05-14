import React from 'react'
import ProfileCard from "../components/user/ProfileCard"
import { connect } from 'react-redux'
import {SET_CURRENT_USER,getUsers, END_CURRENT_USER} from '../actions/UserActions'
import NavbarContainer from './NavbarContainer'
class ProfileContainer extends React.Component{
    componentDidMount(){
        this.props.setCurrentUser()
    }
    render(){
        return(
            <div>
                <NavbarContainer loggedIn={this.props.loggedIn} endSession={this.props.endSession} />
                < ProfileCard currentUser={this.props.currentUser} setCurrentUser={this.props.setCurrentUser}/>
                <button>Start Something New</button>
            </div>
        )
    }

}


function mapDispatchToProps(dispatch){
    return{setCurrentUser: ()=> SET_CURRENT_USER(),
    getUsers:()=>getUsers(),
endSession:()=>END_CURRENT_USER()}
}
function mapStateToProps(state){
console.log(state.users)
    return{
        currentUser: state.users.currentUser,
        loggedIn: state.users.loggedIn
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProfileContainer)
import React from 'react'
import ProfileCard from "../components/user/ProfileCard"
import { connect } from 'react-redux'
import {SET_CURRENT_USER,getUsers} from '../actions/UserActions'
class ProfileContainer extends React.Component{
  
    render(){
        return(
            <div>
                < ProfileCard currentUser={this.props.currentUser} setCurrentUser={this.props.setCurrentUser}/>
            </div>
        )
    }

}


function mapDispatchToProps(dispatch){
    return{setCurrentUser: ()=> SET_CURRENT_USER(),
    getUsers:()=>getUsers()}
}
function mapStateToProps(state){
console.log(state.users)
    return{
        currentUser: state.users.currentUser
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProfileContainer)
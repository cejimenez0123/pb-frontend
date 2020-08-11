import React from 'react'
import NavbarContainer from "./NavbarContainer"
import {updateUser} from "../actions/UserActions"
class ProfileSettingsContainer extends React.Component{
    constructor(){
        super()
        this.state={}
    }
 

    handleOnSubmit(e){
        e.preventDefault()
        debugger
       let name=e.target.querySelector('input[name="name"]').value
       let username= e.target.querySelector('input[name="username"]').value
       let profile_picture = e.target.querySelector('input[name="profile_picture"]').value
       debugger
       let user ={name,username,profile_picture}
    updateUser(user)
    }


    render(){
        let user = this.props.currentUser
        return(<div>
        <NavbarContainer/>
        <form onSubmit={(e)=>this.handleOnSubmit(e)}>
            Profile Picture: <input type="file" name="profile_picture"/>
            <br/>
            Username:<input type="text" value={user.username} name="username"/>
            <br/>
            Name: <input type="text" value={user.name} name="name"/>
            <input type="submit"/>
        </form>
        </div>)
    }
}
export default ProfileSettingsContainer
import React from 'react'

import NavbarContainer from "./NavbarContainer"
import {Row,Col} from 'react-bootstrap'
import {updateUser} from "../actions/UserActions"
class ProfileSettingsContainer extends React.Component{
    constructor(){
        super()
        this.state={}
    }
 

    handleOnSubmit(e){
        e.preventDefault()
       
       let name=e.target.querySelector('input[name="name"]').value
       let username= e.target.querySelector('input[name="username"]').value
       let profile_picture = e.target.querySelector('input[name="profile_picture"]').files[0]
       let formData = new FormData();
       formData.append("file", profile_picture)
       
    formData.set("file", profile_picture)
    debugger
       let user ={name,username,formData}
    this.props.updateUser(user)
    }


    render(){
        let user = this.props.currentUser
    
        return(<div>
        <NavbarContainer/>
        <div class="container">
        <div className="col mx-auto">
        <div className="settingsForm">
        <form onSubmit={(e)=>this.handleOnSubmit(e)}>
        
        <img className="profilePic" src={user.photo}/>
        <br/>
            <div className="setttingsItem">
            PROFILE PICTURE: <input type="file" name="profile_picture"/>
           </div>
            <br/>
            <div className="setttingsItem">
            USERNAME:<input type="text" value={user.username} name="username"/>
           </div>
            <br/>
            <div className="setttingsItem">
            NAME: <input type="text" value={user.name} name="name"/>
            </div>
            <input type="submit" value="Save"/>
            
        </form>
        </div>
        </div>
        </div>
        </div>)
    }
}
export default ProfileSettingsContainer
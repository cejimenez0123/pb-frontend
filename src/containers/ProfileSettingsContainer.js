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
       let profile_picture = e.target.querySelector('input[name="profile_picture"]').value
       
       let formData = new FormData();
    formData.set("file", profile_picture)
    debugger
       let user ={name,username,profile_picture}
    updateUser(user)
    }


    render(){
        let user = this.props.currentUser
    
        return(<div>
        <NavbarContainer/>
        <div class="row">
        <div className="col mx-auto" style={{left: "200px",padding: "100px"}}>
        <form onSubmit={(e)=>this.handleOnSubmit(e)}>
        <img src={user.photo}/>
        <br/>
            Profile Picture: <input type="file" name="profile_picture"/>
            <br/>
            Username:<input type="text" value={user.username} name="username"/>
            <br/>
            Name: <input type="text" value={user.name} name="name"/>
            <input type="submit" value="Save"/>
        </form>
        </div>
        </div>
        </div>)
    }
}
export default ProfileSettingsContainer
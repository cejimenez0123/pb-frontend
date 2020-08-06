import React from 'react'
import NavbarContainer from "./NavbarContainer"
class ProfileSettingsContainer extends React.Component{
    constructor(){
        super()
        this.state={}
    }

    handleOnSubmit(e){
        e.preventDefault()
    }


    render(){
        let user = this.props.currentUser
        return(<div>
        <NavbarContainer/>
        <form onSubmit={(e)=>this.handleOnSubmit(e)}>
            Profile Picture: <input type="file"/>
            Username:<input type="text" value={user.username}/>
            Name: <input type="text"/>
            <input type="submit"/>
        </form>
        </div>)
    }
}
export default ProfileSettingsContainer
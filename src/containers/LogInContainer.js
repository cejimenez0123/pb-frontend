import React from 'react'
import NavbarContainer from "../containers/NavbarContainer"
import LogInForm from "./../components/user/LogInForm"
function LogInContainer(props){



    return(<div>
    <NavbarContainer/>
    <div className="logInContainer">
    <LogInForm/>
    </div>
    </div>)
}
export default LogInContainer
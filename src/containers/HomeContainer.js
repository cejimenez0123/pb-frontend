import React from 'react'
import {Link} from 'react-router-dom'

import Navbar from './NavbarContainer'
import NavbarContainer from './NavbarContainer'
import Editor from './EditorContainer'
class HomeContainer extends React.Component{
    render(){
        return(
            <div>
                <NavbarContainer />
                
                < Link to="/signup" >Sign Up</Link>
                <br/>
                < Link to="/login">Log In</Link>
                <Editor/>
            </div>
        )
    }
}
export default HomeContainer
import React from 'react'
import {Link} from 'react-router-dom'
import BookContainer from "./BookContainer"
import Navbar from './NavbarContainer'
import NavbarContainer from './NavbarContainer'
import Editor from './EditorContainer'
import { useStore } from 'react-redux'
import { render } from 'react-dom'

class HomeContainer extends React.Component{
    //     props.getAllPages()
    // let store = useStore()
    // let pages = store.getState().pages.pages
    // debugger
    
 render(){
        return(
            <div>
                <NavbarContainer />
                
                < Link to="/signup" >Sign Up</Link>
                <br/>
                < Link to="/login">Log In</Link>
                <BookContainer pages={this.props.pages} />
            </div>
        )
        } 
}
export default HomeContainer
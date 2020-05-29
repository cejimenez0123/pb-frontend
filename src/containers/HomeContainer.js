import React from 'react'
import {Link} from 'react-router-dom'
import BookContainer from "./BookContainer"
import Navbar from './NavbarContainer'
import NavbarContainer from './NavbarContainer'
import Editor from './EditorContainer'
import { useStore } from 'react-redux'
import { render } from 'react-dom'
import SearchCardIndex from '../components/user/SearchCardIndex'
import "../App.css"
class HomeContainer extends React.Component{
    //     props.getAllPages()
    // let store = useStore()
    // let pages = store.getState().pages.pages
    // debugger
  
    
 render(){
        return(
            <div className="HomeContainer" >
                <NavbarContainer />
                <div className="signbtns">
                < Link to="/signup" >Sign Up</Link>
                <br/>
                < Link to="/login">Log In</Link>
                </div>
                <div id="SHomeConatiner">

                </div>
                <div class="BookContainer">
                <BookContainer pages={this.props.pages}/>
                </div>
            </div>
        )
        } 
}
export default HomeContainer
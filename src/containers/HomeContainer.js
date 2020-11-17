import React from 'react'
import {Link} from 'react-router-dom'
import BookContainer from "./BookContainer"
import Navbar from './NavbarContainer'
import Pages from "../components/page/pages"
import NavbarContainer from './NavbarContainer'
import { useStore } from 'react-redux'
import ReactDOM,{ render } from 'react-dom'
import SearchCardIndex from '../components/user/SearchCardIndex'
import "../App.css"
class HomeContainer extends React.Component{
    //     props.getAllPages()
    // let store = useStore()
    // let pages = store.getState().pages.pages
    // debugger
    componentDidMount(){
        this.props.getPublicPages()
    }
  
    
    
    
    uploadPhoto(e){
        debugger
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    
    // configure your fetch url appropriately
    fetch(`http://localhost:3000/${localStorage.getItem("currentUser")}/upload`, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(data => {
          debugger

       // do something with the returned data
      });
  };
    
 render(){
     console.log(this.props.pagesInView)
        return(
            <div className="HomeContainer" >
                <NavbarContainer />
                <div className="signbtns">
                < Link to="/signup" >Sign Up</Link>
                <br/>
                < Link to="/login">Log In</Link>
                </div>
                <div id="SHomeConatiner">
                    <Pages pages={this.props.pagesInView}/>
                </div>
                
            </div>
        )
        } 
}
export default HomeContainer
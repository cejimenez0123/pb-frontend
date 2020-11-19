import React from 'react'
import {Link} from 'react-router-dom'
import BookContainer from "./BookContainer"
import Navbar from './NavbarContainer'
import Pages from "../components/page/pages"
import NavbarContainer from './NavbarContainer'
import { useStore } from 'react-redux'
import Modal from "../components/modal"
import ReactDOM,{ render } from 'react-dom'
import SearchCardIndex from '../components/user/SearchCardIndex'
import "../App.css"
import SignUpForm from "../components/user/SignUpForm"
import LogInForm from "../components/user/LogInForm"
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
            <div className="" >
                <NavbarContainer />
                <div className="homeContainer">
                
                <div id="main">
                    <Pages pages={this.props.pagesInView}/>
                </div>
                <div className="signbtns">
                <Modal button={ <p className="btn"><b>Sign Up</b></p>} content={<SignUpForm/>}/>
        
                <Modal button={<p className="btn"><b>Log In</b></p>} content={<LogInForm/>}/>
                </div>
                </div>
            </div>
        )
        } 
}
export default HomeContainer
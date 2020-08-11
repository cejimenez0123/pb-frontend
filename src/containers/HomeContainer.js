import React from 'react'
import {Link} from 'react-router-dom'
import BookContainer from "./BookContainer"
import Navbar from './NavbarContainer'
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
        return(
            <div className="HomeContainer" >
                <NavbarContainer />
                <div className="signbtns">
                < Link to="/signup" >Sign Up</Link>
                <br/>
                < Link to="/login">Log In</Link>
                </div>
                <div id="SHomeConatiner">
    <input type="file" onChange={(e)=>this.uploadPhoto(e)}/>
        <img style={{width :"50px",height:"100px"}}src="http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d9f84108639caf4715980dcbdd9b6cb5e7e5bd1f/9696CA31-6191-40C2-BCDF-ED4AC59C1610.jpg"/>
                </div>
                
            </div>
        )
        } 
}
export default HomeContainer
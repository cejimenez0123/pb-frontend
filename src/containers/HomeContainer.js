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
import {BottomScrollListener }from 'react-bottom-scroll-listener';
class HomeContainer extends React.Component{
    constructor(props){
        super(props)
        this.state={pages: 10}
    }
    componentDidMount(){
        this.props.getPublicPages(10)
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
 
  handleOnBottom(){
 

    let pages=10+this.state.pages
    this.props.getPublicPages(pages)
  } 
 render(){
     console.log(this.props.pagesInView)

        return(
            <div className="" >
             
                <div className="homeContainer">
                <div  style={{color: "white"}}>
            
                </div>
                <div id="HomePagesContainer">
                <BottomScrollListener onBottom={()=>this.handleOnBottom()}>
                    <Pages pages={this.props.pagesInView}/>
                </BottomScrollListener>
                </div>
                
                </div>
            </div>
        )
        } 
}
export default HomeContainer
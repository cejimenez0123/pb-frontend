import React ,{useState,useEffect,useLayoutEffect}from 'react'
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
function HomeContainer(props){
    
        
        let [loading,setLoading] = useState(false)
        let [page,setPage] =useState(0)
        let [publicPagesPer,setPublicPagesPer] = useState(10)
        let [lastPackLength,setLastPackLength] =useState(0)
        let [pages,setPages] = useState([])
        let [endRecommend,setEndRecommend]=useState(false)
  

      useLayoutEffect(()=>{
          
          if(props.loggedIn){  props.getPublicPages(10)
          }else{
              props.recommendPages(localStorage.getItem("currentUser"),page)
              }
          
          },[])
    
    useEffect(()=>{

       
          let num =  props.pagesInView.length - pages.length 

            setPages(props.pagesInView)
             setLastPackLength(num)}
            ,[props.pagesInView])
    function uploadPhoto(e){
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
 
 function handleOnBottom(){
 
 if(!endRecommend){
    let newPage=page+1
    props.recommendPages(localStorage.getItem("currentUser"),newPage)
    setPage(newPage)
    
 }else{
 let per=10+publicPagesPer
    props.getPublicPages(per)
 }
 if(lastPackLength<10){
     setEndRecommend(true)
 }


}

     console.log(props.pagesInView)

        return(
            <div className="" >
             
                <div className="homeContainer">
                <div  style={{color: "white"}}>
            
                </div>
                <div id="HomePagesContainer">
                <BottomScrollListener onBottom={()=>handleOnBottom()}>
                    <Pages pages={props.pagesInView}/>
                </BottomScrollListener>
                </div>
                
                </div>
            </div>
        )
        
}
export default HomeContainer
import React, {useState} from 'react'
import "../../App.css"

import Popup from 'reactjs-popup'
import PageInput from "../page/PageInput"
import {connect,useDispatch } from "react-redux"
import Editor from "../page/editor"
import {deleteBookFollow} from "../../actions/FollowActions"
import { getPagesOfBook } from "../../actions/PageActions"
import {Modal,Button} from "react-bootstrap"
import PageCards from "../page/PageCards"
import Pages from "../page/pages"
import Infinite from "react-infinite"
import FollowerCards from "../user/FollowerCards"

let book

function Book(props){
    const dispatch = useDispatch()

    let [truthy,setTruthy]=useState("none")
    const handleTruthyClose=(text)=>{
        
        setTruthy("none");}
//     function editBtn(){
      
//         if(props.currentUser && props.currentUser.id===props.book.user.id){
//             return(<div>
//             <Popup trigger={ <button className={".editBookBtnDropdown"}>Edit Book</button>} position="right center">
//    <div >
//         <button onClick={handleTruthyShow}>Add Page</button>
//         <button>Delete Page</button>
//          </div>
//   </Popup>
           
                     
       
//         </div>)
            
//         }else{
//             return ("")
//         }
//     }

//     let html
    let pages
//     function followBtn(){
//          let follow=  props.followers.find(follow=>{
//            return follow.attributes.follower.id === localStorage.getItem("currentUser")
//         })
//         if(follow){
//             return (<button class={"followedBtn"} onClick={()=>handleFollow()}>Following</button>)
//         }else{
//             return( <button class={"followBtn"} onClick={()=>props.followBook(props.book.id)}>Follow</button>)
//         }
        
//     }
//   function followerCards(){
//       if (props.followers){

//           return(<FollowerCards users={props.followers}/>)
//       }else{
//           return("x")
//       }
//   }
//   function handleFollow(){
  
//         let follow=  props.followers.find(follow=>{
//            return follow.attributes.follower.id === localStorage.getItem("currentUser")
//         })
      
//         if(follow){
//             dispatch(deleteBookFollow(follow))
//         }else{
//             props.followBook(props.book.id)
//         }
        
//     }
//   function handleModalClose(e){

//       if(e.target === e.currentTarget){
//        console.log("!")
       
//         // setShow("none")
//         setShow("none")
//      }
//   }
        if(props.book ){
  
            if(props.pages.length > 0){
               
                pages= props.pages
            }
         pages = props.pages.filter(page=>{
               return page.attributes.book.id == props.book.id
           })
                
              
            
           
              return (
<div>
              
    
      

                {/* <PageInput book={props.book}/> */}
               <div className={"scroll bookPages button is-dark"}>
               <section>
               <div style={{display: props.show}} className={"ed"}>
                
               <Editor book={props.book} handleTruthyClose={handleTruthyClose}/>
               </div>
               <div className="pagesOfBook">
                <Pages pages={pages}/>
                </div>
                </section>
                {/* </div> */}

        </div>
              </div>  
            )}else{
                return(<div></div>)
            }
        };


function mapDispatch(dispatch){
    return{getPagesOfBook:(id)=>dispatch()}
}
function mapState(state){
    console.log(state.books.bookFollowers)
    return{
        currentUser: state.users.currentUser,
        bookInView: state.books.bookInView,
        pages: state.pages.pages,
        books: state.books.books,
        users: state.users.users,
        followers: state.books.bookFollowers,
        show: state.books.showEditor
            }
}
export default connect(mapState,mapDispatch)(Book)


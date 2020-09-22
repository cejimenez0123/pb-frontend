import React, {useState} from 'react'
import "../../App.css"
import Popup from 'reactjs-popup'
import PageInput from "../page/PageInput"
import {connect } from "react-redux"
import Editor from "../page/editor"
import { getPagesOfBook } from "../../actions/PageActions"
import {Modal,Button} from "react-bootstrap"
import PageCards from "../page/PageCards"
import Pages from "../page/pages"
import Infinite from "react-infinite"
import FollowerCards from "../user/FollowerCards"
let book

function Book(props){
    let [show,setShow]=useState("none")
    const handleShow=()=>setShow("block")
    const handleClose=()=>setShow("none")
    if (props.books){
    book = props.books.find(book=>{return book.id==props.book.id } )
    }
   
    
    const [title,setTitle]=useState("")
    let [truthy,setTruthy]=useState("none")
let ifEdit = false
const handleEditClick = () => {
     let div= document.getElementById(`book-${props.book.id}`)
     debugger
    if(ifEdit){
       ifEdit=false
       div.style.display = "none"
    }else{
       
       div.style.display = "block"
       ifEdit=true
    }
    
 };
//   const handleCloseEdit = () => { };
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

     let user_id 
  
     let user 
//         if(props.book && props.book.user_id){
//             setTitle(props.book.title)
//             user_id = props.book.user_id
//             user = props.users.find(user=>{return user.id == user_id})

//    user = user.attributes
//         }else 
 
   function changeTruthy(e){
   
       if(e.target.nextElementSibling.style.display === "block"){
           truthy=false
           e.target.nextElementSibling.style.display ="none"
       }else{
           e.target.nextElementSibling.style.display ="block"
            truthy=true
       }
   }

    function editBtnClick(e){
        if(e.target.nextElementSibling.style.display === "none"){
            e.target.nextElementSibling.style.display ="block"
        }else{
            e.target.nextElementSibling.style.display = "none"
        }
        
    }
    const handleTruthyShow =()=>setTruthy("block")
    const handleTruthyClose=(text)=>{
        
        setTruthy("none");}
    function editBtn(){
      
        if(props.currentUser && props.currentUser.id===props.book.user.id){
            return(<div>
            <Popup trigger={ <button className={".editBookBtnDropdown"}>Edit Book</button>} position="right center">
   <div >
        <button onClick={handleTruthyShow}>Add Page</button>
        <button>Delete Page</button>
         </div>
  </Popup>
           
                     
       
        </div>)
            
        }else{
            return ("")
        }
    }
//     followBtn(){
// let follow=  this.props.followers.find(follow=>{
//            return follow.attributes.follower.id === localStorage.getItem("currentUser")
//         })
   
//         if(follow){
//             return (<button className="followedBtn" onClick={()=>this.handleFollow()}>Follow</button>)
//         }else{
//             return (<button className="followBtn" onClick={()=>this.handleFollow()}>Follow</button>)
//         }
//     }
    let html
    let pages
  function followerCards(){
      if (props.bookFollowers){

          return(<FollowerCards users={props.bookFollowers}/>)
      }else{
          return("x")
      }
  }
        if(props.book ){
  
            if(props.pages.length > 0){
               
                pages= props.pages
            }
         pages = props.pages.filter(page=>{
               return page.attributes.book.id == props.book.id
           })
                
              
            console.log("ZFf",props.bookFollowers)
           
              return (<div>
              
             <button onClick={handleShow}>Followers</button>
               <div style={{textAlign: "center"}}>
               
     
     {editBtn()} <a href={`/books/${props.book.id}/drafts`}>Drafts</a>
       
      <div onClick={()=>handleShow()} style={{width: "100%",display: show}} class="modal">
                <div   class="modal-content">
                  <span  class="close">&times;</span>
                  {followerCards()}
            </div>
            </div>
      <h3 >{props.book.title} </h3>
      

                {/* <PageInput book={props.book}/> */}
               <div className={"scroll bookPages"}>
               <section>
               <div style={{display: truthy}} className={"ed"}>
                
               <Editor book={props.book} handleTruthyClose={handleTruthyClose}/>
               </div>
                <Pages pages={pages}/>
                </section>
                </div>

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
        bookFollowers: state.books.bookFollowers
            }
}
export default connect(mapState,mapDispatch)(Book)


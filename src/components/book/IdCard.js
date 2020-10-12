import React,{useState} from 'react'
import Popup from 'reactjs-popup'
import {useDispatch} from "react-redux"
import {deleteBookFollow} from '../../actions/FollowActions'
import FollowerCards from "../user/FollowerCards"
import Modal from "../modal"
import "../../App.css"
function IdCard(props){
    const [title,setTitle]=useState("")
    let [truthy,setTruthy]=useState("none")
    let [show,setShow]=useState("none")
     const handleShow=()=>setShow("block")
    const handleClose=()=>setShow("none")
    const dispatch = useDispatch()
    let book

    if (props.books){
    book = props.books.find(book=>{return book.id==props.book.id } )
    }
   
    
    
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
    let [showPop,setShowPop]=useState("none")
    const handleTruthyShow =()=>{
        let show = "block"
        dispatch({type: "SHOW_EDITOR",show})
       // setTruthy("block")
        }
    const handleTruthyClose=(text)=>{
        
        setTruthy("none");
        }
    function editBtn(){
      
        if(props.currentUser && props.currentUser.id === props.book.user.id){
            return(<div className="editBtn">
<div >
 <button onClick={()=>setShowPop("block")}className="button light-green">Edit Book</button>
   <div className="popUp editBookBtn"style={{display: showPop}}>
   <Modal button={<button>Edit Book</button>} content={<div
   >
   <form className="editForm">
   <label>Name of Book:</label>
   <br/>
   <input type="text" placeholder={props.book.title}/>
   <br/>
   <label>Intro to book</label> 
   <textarea placeholder={props.book.bio}/>
   <br/>
   {props.book.privacy}
   <select id='privacy'>
        <option value="public">Public</option>
        <option value="private">Private</option>
   </select>
   </form>
   </div>}/>
        <button onClick={handleTruthyShow}>Add Page</button>
        <button>Delete Page</button>
         </div>
  </div>
            {/* <Popup trigger={ <button className="button light-green">Edit Book</button>} position="right center">
   <div >
   <Modal button={<button>Edit Book</button>} content={<div></div>}/>
        <button onClick={handleTruthyShow}>Add Page</button>
        <button>Delete Page</button>
         </div>
  </Popup> */}
           
                     
       
        </div>)
            
        }else{
            return ("")
        }
    }

    let html
    let pages
    function followBtn(){
         let follow=  props.followers.find(follow=>{
           return follow.attributes.follower.id === localStorage.getItem("currentUser")
        })
        if(follow){
            return (<button class={" button pink "} onClick={()=>handleFollow()}>Following</button>)
        }else{
            return( <button class={" button red "} onClick={()=>props.followBook(props.book.id)}>Follow</button>)
        }
        
    }
  function followerCards(){
      if (props.followers){

          return(<FollowerCards users={props.followers}/>)
      }else{
          return("x")
      }
  }
  function handleFollow(){
  
        let follow=  props.followers.find(follow=>{
           return follow.attributes.follower.id === localStorage.getItem("currentUser")
        })
      
        if(follow){
            dispatch(deleteBookFollow(follow))
        }else{
            props.followBook(props.book.id)
        }
        
    }
  function handleModalClose(e){

      if(e.target === e.currentTarget){
       console.log("!")
       
        // setShow("none")
        setShow("none")
     }
  }


    if(props.book){
   
        return(<section className="bookIdCard">
         
    <div>
    <div className="bookTitle">
         <h4>{props.book.title}</h4>  
         <p>{props.book.bio}</p> 
         </div> 
         <div className="btnBox">  
    {editBtn()} <a className={"aBtn button grey"} style={{padding: "7px 15px"}} href={`/books/${props.book.id}/drafts`}>Drafts</a>
      <button class="button is-dark blue" onClick={()=>setShow( "block")}>Followers</button> {followBtn()}
        <div onClick={(e)=>handleModalClose(e)} style={{width: "100%",display: show}} class="modal">
            <div   class="modal-content">
                <span  class="close">&times;</span>
                  {followerCards()}
            </div>
            </div>
        </div></div>
       </section>)
    }else{
        return("no Book")
    }


}

export default IdCard
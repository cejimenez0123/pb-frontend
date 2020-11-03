import React,{useState} from 'react'
import Popup from 'reactjs-popup'
import {useDispatch} from "react-redux"
import {updateBook} from "../../actions/BookActions"
import {deleteBookFollow,followBook} from '../../actions/FollowActions'
import FollowerCards from "../user/FollowerCards"
import Modal from "../modal"
import SearchUsersShare from "../user/SearchUsersShare"
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
    function addPageBtn(){
      
        if(props.currentUser && props.currentUser.id === props.book.user.id){

            return(<div className="editBtn">
<div >
 {/* <button onClick={()=>setShowPop("block")}className="button light-green">Edit Book</button> */}
   <div >
   
        <button classNAme="button green" onClick={handleTruthyShow}>Add Page</button>
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
            return( <button class={" button red "} onClick={()=>handleFollow()}>Follow</button>)
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
            dispatch(followBook(props.book.id))
        }
        
    }

    function shareBtn(){
        if(props.book.user.id === localStorage.getItem("currentUser")){

            return(<Modal button={<button className="button">Share</button> }  content={<div>
                <p>Others <select name="shareLevel">
                <option name="view">can view only</option>
                <option name="add">can add only</option>
                <option name="edit">can edit</option>
                </select></p>
                <SearchUsersShare users={props.users}/>
        </div>}/>)
        }}
    
    
    function editBtn(){
        if(props.book.user.id === localStorage.getItem("currentUser")){
return( <Modal button={
        
        <a className="">Edit</a>
       } content={<div className="editForm"
   >
   <form  onSubmit={(e)=>handleBookUpdate(e)}>
   <label>Name of Book:</label>
   <br/>
   <input style={{width: "200px"}} className="form-control bookName " type="text" defaultValue={props.book.title}/>
   <br/>
   <label>Introduction to book</label> 
   <textarea style={{width: "350px",height: "200px"}} className="form-control introBook " defaultValue={props.book.intro}/>
   <br/>
   
   <select style={{width: "100px"}}className="form-control " defaultValue={props.book.privacy}id='privacy'>
        <option value="private">Private</option>
        <option value="public">Public</option>
        
   </select>
   <button type="submit" >Update</button>
   </form>
   </div>}/>)
        }
    }
  function handleModalClose(e){

      if(e.target === e.currentTarget){
       console.log("!")
       
        // setShow("none")
        setShow("none")
     }
  }
function draftsBtn(){
    if(props.book.user.id === localStorage.getItem("currentUser")){
    return( <a className={"aBtn button yellow"} style={{padding: "7px 15px"}} href={`/books/${props.book.id}/drafts`}>Drafts</a>
    )}}
    function handleBookUpdate(e){
        debugger
e.preventDefault()
        let title = e.target.querySelector(".bookName").value
        let intro = e.target.querySelector(".introBook").value
        let privacy = e.target.querySelector("select").value
        let hash = {bookId: props.book.id,title, intro,privacy}
        dispatch(updateBook(hash))
    }
    if(props.book){

        return(<section className="idCard">
         
    <div>
    <div id="idCardHeader">
     {editBtn()}
    </div>
    <div className="bookTitle">
         <h4>{props.book.title}</h4>  
     </div>
         <p>{props.book.intro}</p> 
         
         <div className="btnBox"> 
        
    {addPageBtn()} {draftsBtn()} {shareBtn()}
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
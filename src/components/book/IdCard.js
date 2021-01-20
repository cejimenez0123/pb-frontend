import React,{useState,useContext} from 'react'
import Popup from 'reactjs-popup'
import {useDispatch} from "react-redux"
import {updateBook} from "../../actions/BookActions"
import {deleteBookFollow,followBook} from '../../actions/FollowActions'
import FollowerCards from "../user/FollowerCards"
import Modal from "../modal"
import SearchUsersShare from "../user/SearchUsersShare"
import "../../App.css"
import url from "../../actions/url"
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
   <div >
   
        <button className="button green" onClick={handleTruthyShow}>Add Page</button>
         </div>
  </div>
            
           
                     
       
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
            return( <button class={" button ab0560 "} onClick={()=>handleFollow()}>Follow</button>)
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

        if(props.book.privacy==="private"){
        if(props.book.user.id === localStorage.getItem("currentUser")){
 let users =props.users.filter(user=>{return user.id!==localStorage.getItem("currentUser")})
         console.log("BDDF",props.bookAccessors)
  
            return(<Modal button={<button className="button aqua">Share</button> }  content={<section className="sharing">
                <div>
                 
                    <SearchUsersShare bookAccessors={props.bookAccessors} users={users} book={props.book} />
                 </div>
        </section>}/>)
        }
    }}
    
    function setEditMode(){
    
        props.editMode? props.setEditMode(false):props.setEditMode(true)
    }
    function editBtn(){
        if(props.book.user.id === localStorage.getItem("currentUser")&&!props.editMode){
            return(<p onClick={setEditMode}>Edit</p>)
        }else if(props.book.user.id === localStorage.getItem("currentUser")&&props.editMode){
           return(<p onClick={handleBookUpdate}>Save</p>) 
        }else{
            return("")
        }
        // return( <Modal button={
        
//         <a className="">Edit</a>
//        } content={<div className="editForm"
//    >
//    <form  onSubmit={(e)=>handleBookUpdate(e)}>
//    <label>Name of Book:</label>
//    <br/>
//    <input style={{width: "200px"}} className="form-control bookName " type="text" defaultValue={props.book.title}/>
//    <br/>
//    <label>Introduction to book</label> 
//    <textarea style={{width: "350px",height: "200px"}} className="form-control introBook " defaultValue={props.book.intro}/>
//    <br/>
   
//    <select style={{width: "100px"}}className="form-control " defaultValue={props.book.privacy}id='privacy'>
//         <option value="private">Private</option>
//         <option value="public">Public</option>
        
//    </select>
//    <button type="submit" >Update</button>
//    </form>
//    </div>}/>
        }
    
  function handleModalClose(e){

      if(e.target === e.currentTarget){
       console.log("!")
 
        setShow("none")
     }
  }
 
function draftsBtn(){
    if(props.book.user.id === localStorage.getItem("currentUser")){
    return( <a className={"aBtn button yellow"} style={{padding: "7px 15px"}} href={`/books/${props.book.id}/drafts`}>Drafts</a>
    )}}
 
    function handleBookUpdate(e){
    
e.preventDefault()

        let title = document.querySelector("#bookTitle").value
        let intro = document.querySelector("#bookIntro").value
        let privacy = document.querySelector("#bookPrivacy").value
        let published_pages = localStorage.getItem("published_pages").split(",")
        let hash = {bookId: props.book.id,title, intro,privacy,published_pages}
        dispatch(updateBook(hash))
          props.setEditMode(false)
    }
    if(props.book && props.editMode){

        return(<section className="idCard">
         
    <div>
    <div id="idCardHeader">
     {editBtn()}
    </div>
    
    <form>
   
        
            <input type="text" className="form-control" id="bookTitle" defaultValue={props.book.title}/>
 
            by 
        
         <h6> <a href={`${url}/users/${props.book.user.id}`}>{props.book.user.name}
         </a></h6>
     
        <textarea className="form-control" id="bookIntro" defaultValue={props.book.intro}/>
        <select style={{width: "100px"}} id="bookPrivacy" className="form-control " defaultValue={props.book.privacy}>
            <option value="private">Private</option>
            <option value="public">Public</option>
        </select>
    </form>
         <div className="btnBox"> 
        
    {addPageBtn()} {draftsBtn()} {shareBtn()}
      <button class=" aBtn is-dark blueJean" onClick={()=>setShow( "block")}>Followers</button> {followBtn()}
        <div onClick={(e)=>handleModalClose(e)} style={{width: "100%",display: show}} class="modal">
            <div   class="modal-content">
                <span  class="close">&times;</span>
                  {followerCards()}
            </div>
            </div>
        </div></div>
       </section>)
    }
    else if(props.book && !props.editMode){
    
return(<section className="idCard">
         

    <div id="idCardHeader">
     {editBtn()}
    </div>
    <table>
    <tr>
    <th colspan={2}>
        

         <h4>{props.book.title}</h4>  
         </th>
     </tr>
     <tr>
         <th>
            by {props.book.user.name}
        </th>
        <td>
          
         </td>
  </tr>
  <tr>
  <td>
        <p>{props.book.intro}</p> 
  </td>

  </tr>
  <tr>
    <td>
    {followBtn()}
        
    </td>
    <td>
        <Modal button={<button class="button is-dark blue" >Followers</button> } content={
        <div>
                  {followerCards()}
         </div>
          }/>
    </td>

  </tr>
  <tr>
    <td>
{addPageBtn()}
    </td>
    <td>
    {draftsBtn()}
    </td>
  </tr>
  <tr>
    <td>
{shareBtn()}
    </td>
  </tr>
    </table>
         
         
         {/* <div className="btnBox"> 
        
     
      </div> */}
       </section>)

    } else{
        return("no Book")
    }


}

export default IdCard
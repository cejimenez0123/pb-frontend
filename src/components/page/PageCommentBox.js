import React,{useState} from 'react'
import Popup from 'reactjs-popup'

import {useDispatch,useStore} from 'react-redux'
import {commentOnPageComment} from '../../actions/PageActions'
function PageCommentBox(props){
    const store = useStore()
    let [showComBox,setShowComBox]=useState("none")
    let users = store.getState().users.users
    const dispatch =useDispatch()
    let {comment}= props
     let user ={id: null}
   
    


    
   
 let  renderChildren = null
  if(props.comment.comments && props.comment.comments.length>0){
    renderChildren=  props.comment.comments.map((x,i)=>{

         return (<PageCommentBox key={i} comment={x} page={props.page}/>)
      })

  }
    function handleOnSubmit(e){
        
        e.preventDefault()
        let value = e.target.getElementsByTagName("textarea")[0].value

        let obj ={page_id: props.page.id,parent_id: comment.id,text: value}
        dispatch(commentOnPageComment(obj))
    }
   user = users.find(t=>{

 return t.id ===  comment.user.id
   })

   if(user){user=user.attributes}
   if(user){
    return(
<div>
  <div>
    <div className="commentBox">
      <div>
        <div className="comment">
          <p>{props.comment.text}</p>
        </div>
      <div style={{display:"flex",fontSize: "12px"}}>
        <div style={{width: "100px",margin: "0px 10px 0px 10px"}}><p> from <a href={`/users/${user.id}`}>@{user.username}</a></p></div>
        <a  style={{width: "100px",margin: "0px 10px 0px 10px"}} onClick={()=>setShowComBox("block")}>Reply</a>
      </div>
    </div>
  </div>
     
      
   
    <div style={{display: showComBox }}> 
    <div><form onSubmit={(e)=>handleOnSubmit(e)}><textarea></textarea><button type="submit">Submit</button></form></div>
      </div>
    <ul>
    {renderChildren}
    </ul>
  
    </div> 
    </div>)}
    else{
      return("")
    }
}
export default PageCommentBox
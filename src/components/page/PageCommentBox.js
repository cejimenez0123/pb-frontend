import React,{useState} from 'react'
import Popup from 'reactjs-popup'

import {useDispatch,useStore} from 'react-redux'
import {commentOnPageComment} from '../../actions/PageActions'
function PageCommentBox(props){
    const store = useStore()
    let [showComBox,setShowComBox]=useState("none")
    let users = store.getState().users.users
    const dispatch =useDispatch()
    let comment
     let user ={id: null}
    if(props.comment.self){
    
    comment = props.comment.self

   
    }else{
        comment=props.comment
       
  
    }
    


    
   
 let  renderChildren = null
  if(props.comment.children && props.comment.children.length>0){
    renderChildren=  props.comment.children.map((x,i)=>{

         return (<PageCommentBox key={i} comment={x} page={props.page}/>)
      })

  }
    function handleOnSubmit(e){
        
        e.preventDefault()
        let value = e.target.getElementsByTagName("textarea")[0].value
  debugger
        let obj ={page_id: props.page.id,parent_id: comment.id,text: value}
        dispatch(commentOnPageComment(obj))
    }
   user = users.find(t=>{

 return t.id ==  comment.user_id
   })

   if(user){user=user.attributes}
   if(user){
    return(<div>
     <div >
     <div className="comment">
     <p>{comment.text}</p>
     from <a href={`/users/${user.id}`}>@{user.username}</a>
     </div>
     <br/>
     
    <button onClick={()=>setShowComBox("block")}>reply</button>
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